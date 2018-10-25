const keys = require('./keys');

// Express App setup.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client setup.
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  port: keys.pgPort.
  database: keys.pgDatabase,
  password: keys.pgPassword,
});
pgClient.on('error', () => console.log('Lost Pg Connection!'));
pgClient
  .query('CREATE TABLE IF NOT EXIST values(number INT)')
  .catch(error => console.log(error));


