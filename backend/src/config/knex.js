const { database: databaseConfig } = require('./index')

const { dialect: client, host, user, password, database } = databaseConfig;

const knex = require('knex')({
    client,
    connection: {
      host,
      user,
      password,
      database,
    }
  });

module.exports = knex;