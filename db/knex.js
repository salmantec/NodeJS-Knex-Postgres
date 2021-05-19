const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile");
const envConfig = config[environment];
const knex = require("knex");

module.exports = knex(envConfig);
