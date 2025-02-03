const calculadora = require("../models/calculadora.js");

test("Espero que 2 + 4 seja 6", () => {
  const { somar } = calculadora;
  expect(somar(2, 4)).toBe(6);
});

test("Espero que 5 + 100 seja 105", () => {
  const { somar } = calculadora;
  expect(somar(5, 100)).toBe(105);
});

test("Espero que 'Banana' + 100 retorne 'Erro'", () => {
  const { somar } = calculadora;
  expect(somar("Banana", 100)).toBe("Erro");
});
