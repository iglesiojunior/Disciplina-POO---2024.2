"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(operando_01, operando_02) {
        this.operando_01 = operando_01;
        this.operando_02 = operando_02;
    }
    soma() {
        return this.operando_01 + this.operando_02;
    }
    subtracao() {
        return this.operando_01 - this.operando_02;
    }
}
exports.Calculadora = Calculadora;
//# sourceMappingURL=calculadora.js.map