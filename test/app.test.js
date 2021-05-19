const request = require("supertest");
const expect = require("chai").expect;
const knex = require("../db/knex");
const fixtures = require("./fixtures");

const app = require("../app");

describe("CRUD Sticker", () => {
  before((done) => {
    // run migrations and seeds
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });

  it("List all records", (done) => {
    request(app)
      .get("/api/v1/stickers")
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a("array");
        expect(response.body).to.deep.equal(fixtures.stickers);
        done();
      });
  });

  it("List a single record", (done) => {
    request(app)
      .get("/api/v1/stickers/1")
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a("object");
        expect(response.body).to.deep.equal(fixtures.stickers[0]);
        done();
      });
  });

  it("Creates a record", (done) => {
    request(app)
      .post("/api/v1/stickers")
      .send(fixtures.sticker)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a("object");
        fixtures.sticker.id = response.body.id;
        expect(response.body).to.deep.equal(fixtures.sticker);
        done();
      });
  });

  it("Updates a record", (done) => {
    fixtures.sticker.rating = 5;
    request(app)
      .put("/api/v1/stickers/5")
      .send(fixtures.sticker)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a("object");
        expect(response.body).to.deep.equal(fixtures.sticker);
        done();
      });
  });

  it("Deletes a record", (done) => {
    request(app)
      .delete("/api/v1/stickers/5")
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a("object");
        expect(response.body).to.deep.equal({ deleted: true });
        done();
      });
  });
});
