"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hora = void 0;
class Hora {
    constructor(horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    Ler_hora() {
        console.log(`Hora certa: ${this.horas}`);
    }
    Ler_minutos() {
        console.log(`minutos certos: ${this.minutos}`);
    }
    Ler_segundos() {
        console.log(`segundos certos: ${this.segundos}`);
    }
    Hora_completa() {
        console.log(`Horas atuais: ${this.horas}:${this.minutos}:${this.segundos}`);
    }
}
exports.Hora = Hora;
//# sourceMappingURL=hora.js.map