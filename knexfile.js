require("dotenv").config({ path: "./.env" });

// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
  test: {
    client: "pg",
    connection: process.env.TEST_DATABASE_URL,
  },
};
