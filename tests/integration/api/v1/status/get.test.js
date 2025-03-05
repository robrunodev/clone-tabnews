test("GET to /api/vi/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  const { updated_at } = responseBody;

  const parsedUpdatedAt = new Date(updated_at).toISOString();
  expect(updated_at).toBeDefined();
  expect(updated_at).toEqual(parsedUpdatedAt);
  console.log({ responseBody });
});
