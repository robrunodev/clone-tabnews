import database from "infra/database";

export default async function status(req, res) {
  const postrgresVersion = await database.query(
    "SELECT SETTING from pg_settings where NAME = 'server_version';",
  );
  const databaseMaxConnections = await database.query(
    "SELECT SETTING from pg_settings where NAME = 'max_connections';",
  );
  const databaseName = process.env.POSTGRES_DB;
  console.log(`Banco de dados selecionado: ${databaseName}`);

  const openedConnections = await database.query({
    text: `SELECT count(*)::int from pg_stat_database WHERE datname=$1;`,
    values: [databaseName],
  });

  const updatedAt = new Date().toISOString();
  return res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: Number(postrgresVersion.rows[0].setting),
        max_connections: Number(databaseMaxConnections.rows[0].setting),
        opened_connections: openedConnections.rows[0].count,
      },
    },
  });
}
