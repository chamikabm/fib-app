const keys = require('./keys')
const redis = require('redis');

// This retry_strategy param says redis client to reconnect to server if it lose the connection with redis server,
// once a every second.
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

const sub = redisClient.duplicate();