test("GET to /api/vi/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  const { updated_at, dependencies } = responseBody;
  const { version, max_connections, opened_connections } =
    dependencies.database;

  const parsedUpdatedAt = new Date(updated_at).toISOString();

  expect(updated_at).toEqual(parsedUpdatedAt);
  expect(version).toEqual(17.4);
  expect(max_connections).toEqual(100);
  expect(opened_connections).toEqual(1);
  // console.log({ responseBody, version, max_connections, opened_connections });
});
