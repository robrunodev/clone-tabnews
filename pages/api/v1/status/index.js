import database from "infra/database";

export default async function status(req, res) {
  const postrgresVersion = await database.query(
    "SELECT SETTING from pg_settings where NAME = 'server_version';",
  );
  const databaseMaxConnections = await database.query(
    "SELECT SETTING from pg_settings where NAME = 'max_connections';",
  );
  const usedConnections = await database.query(
    "SELECT numbackends from pg_stat_database WHERE datname = 'local_db';",
  );

  const updatedAt = new Date().toISOString();
  return res.status(200).json({
    updated_at: updatedAt,
    database: {
      postgres_version: Number(postrgresVersion.rows[0].setting),
      database_max_connections: Number(databaseMaxConnections.rows[0].setting),
      used_connections: Number(usedConnections.rows[0].numbackends),
    },
  });
}
