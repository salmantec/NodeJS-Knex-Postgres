exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sticker")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("sticker").insert([
        {
          title: "Javascript",
          description: "JS LOGO",
          rating: 10,
          url: "http://devsticker.com",
        },
        {
          title: "Rainbow Javascript",
          description: "JS LOGO",
          rating: 10,
          url: "http://devsticker.com",
        },
        {
          title: "ES6",
          description: "ES6 LOGO",
          rating: 7,
          url: "http://devsticker.com",
        },
        {
          title: "Javascript Beer",
          description: "JS Beer LOGO",
          rating: 10,
          url: "http://devsticker.com",
        },
      ]);
    });
};
