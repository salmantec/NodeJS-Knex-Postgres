# ExpressJS CRUD API services with Knex and PostgreSQL with Unit Tests

## Pre-reqs
- Install [Node.js](https://nodejs.org/en/)
- Install [PostgresSQL](https://www.postgresql.org/)

## Getting started
- Clone the repository
```
git clone https://github.com/salmantec/NodeJS-Knex-Postgres.git
```
- Install dependencies
```
cd NodeJS-Knex-Postgres
npm install
```
- Create Your DBs in postgres 
``
For Dev - knex_sample
For Test - knex_sample_test
``
- Create .env file in root folder and add below DB URLs 
```
DATABASE_URL='postgres://[db-user]:[password]@localhost:5432/knex_sample'
TEST_DATABASE_URL='postgres://[db-user]:[password]@localhost:5432/knex_sample_test'
```

- run the test
```
npm run test
```

- run the project
```
npm run dev
```

Navigate to `http://localhost:3000`