"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraCientifica = void 0;
const calculadora_1 = require("./calculadora");
class CalculadoraCientifica extends calculadora_1.Calculadora {
    exponenciar() {
        return Math.pow(this.num_1, this.num_2);
    }
}
exports.CalculadoraCientifica = CalculadoraCientifica;
//# sourceMappingURL=calculadora_cientifica.js.map