import { Calculadora } from "./calculadora";
import { CalculadoraCientifica } from "./calculadora_cientifica";

function main() {
    const calculadora: Calculadora = new Calculadora(2, 5);
    const resultado = calculadora.soma();
    const calculadora_cientifica: CalculadoraCientifica = new CalculadoraCientifica(2, 5);
    const exponenciacao = calculadora_cientifica.exponenciar();

    console.log(`O resultado da soma é equivalente a ${resultado}`);
    console.log(`O resultado da exponenciação é equivalente a ${exponenciacao}`)

}

main();