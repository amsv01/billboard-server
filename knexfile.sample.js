'use strict';
//PG_CONNECTION_STRING=postgres://u_billboard_dev:123456@127.0.0.1:5432/billboard_dev
module.exports = {
  test: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }
};