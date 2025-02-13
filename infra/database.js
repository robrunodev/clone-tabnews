import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "teste@123",
    database: "postgres",
  });
  await client.connect();
  const result = client.query(queryObject);
  // await client.end();
  return result;
}

export default {
  query: query,
};
