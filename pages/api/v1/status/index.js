import database from "../../../../infra/database";

export default async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result);
  return res.status(200).json({ chave: "Olá mundo, api status" });
}
