"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculadora_1 = require("./calculadora");
const calculadora_cientifica_1 = require("./calculadora_cientifica");
function main() {
    const calculadora = new calculadora_1.Calculadora(2, 5);
    const resultado = calculadora.soma();
    const calculadora_cientifica = new calculadora_cientifica_1.CalculadoraCientifica(2, 5);
    const exponenciacao = calculadora_cientifica.exponenciar();
    console.log(`O resultado da soma é equivalente a ${resultado}`);
    console.log(`O resultado da exponenciação é equivalente a ${exponenciacao}`);
}
main();
//# sourceMappingURL=app.js.map