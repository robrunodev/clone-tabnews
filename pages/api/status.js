export default function status(req, res) {
  res
    .status(200)
    .json({ chave: "Olá mundo, aqui é uma resposta da api status" });
}
