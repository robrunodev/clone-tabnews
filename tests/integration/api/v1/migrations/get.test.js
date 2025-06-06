import database from "infra/database";

async function cleanDatabase() {
  await database.query(
    "drop schema if exists public cascade; create schema public;",
  );
}

beforeAll(async () => {
  await cleanDatabase();
});

test("GET to /api/vi/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "GET",
  });
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});
