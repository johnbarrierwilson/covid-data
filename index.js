require("dotenv").config();

const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: process.env.ENDPOINT_URL
});
