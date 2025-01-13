"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = exports.Banco = void 0;
class Banco {
    constructor() {
        this.contas = [];
        this.clientes = [];
    }
    consultar(numero) {
        for (let conta of this.contas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        console.log(`Conta com número ${numero} não encontrada.`);
        return undefined;
    }
    consultar_por_cpf(cpf) {
        for (let cliente of this.clientes) {
            if (cliente.cpf === cpf) {
                return cliente;
            }
        }
        console.log(`Cliente com CPF ${cpf} não encontrado.`);
        return undefined;
    }
    inserirConta(conta) {
        this.contas.push(conta);
    }
    inserir_clientes(cliente) {
        this.clientes.push(cliente);
    }
    listas_contas_cliente(cpf) {
        let contas_selecionadas = [];
        for (let conta of this.contas) {
            if (conta.cliente && conta.cliente.cpf === cpf) {
                contas_selecionadas.push(conta);
            }
        }
        if (contas_selecionadas.length === 0) {
            console.log(`Nenhuma conta encontrada para o CPF ${cpf}.`);
        }
        return contas_selecionadas;
    }
    totalizar_saldo_cliente(cpf) {
        let contas_cliente_selecionado = this.listas_contas_cliente(cpf);
        if (!contas_cliente_selecionado || contas_cliente_selecionado.length === 0) {
            console.log(`Nenhuma conta encontrada para o CPF ${cpf}.`);
            return 0;
        }
        let saldo_total_cliente = 0;
        for (let conta of contas_cliente_selecionado) {
            saldo_total_cliente += conta.saldo;
        }
        return saldo_total_cliente;
    }
    associar_cliente_conta(numeroConta, cpfCliente) {
        let conta_selecionada = this.consultar(numeroConta);
        let cliente_selecionado = this.consultar_por_cpf(cpfCliente);
        if (!conta_selecionada) {
            console.log(`Conta com número ${numeroConta} não encontrada.`);
            return;
        }
        if (!cliente_selecionado) {
            console.log(`Cliente com CPF ${cpfCliente} não encontrado.`);
            return;
        }
        conta_selecionada.cliente = cliente_selecionado;
        console.log(`Cliente ${cliente_selecionado.nome} associado à conta ${numeroConta}.`);
    }
    consultar_por_indice(indice) {
        if (indice >= 0 && indice < this.contas.length) {
            return this.contas[indice];
        }
    }
    excluir_conta(numeroConta) {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numeroConta) {
                indice = i;
                break;
            }
        }
        if (indice !== -1) {
            this.contas.splice(indice, 1);
            console.log(`Conta ${numeroConta} excluída com sucesso.`);
        }
        else {
            console.log(`Conta ${numeroConta} não encontrada.`);
        }
    }
    sacar(numeroConta, valor) {
        let conta = this.consultar(numeroConta);
        if (conta) {
            conta.saldo -= valor;
        }
    }
    depositar(numeroConta, valor) {
        let conta = this.consultar(numeroConta);
        if (conta) {
            conta.saldo += valor;
        }
    }
    tranferir(numeroConta_deposito, numeroConta_destino, valor) {
        let conta_depois = this.consultar(numeroConta_deposito);
        let conta_destino = this.consultar(numeroConta_destino);
        if (conta_depois && conta_destino) {
            conta_depois.saldo -= valor;
            conta_destino.saldo += valor;
        }
    }
    transferir_contas(numeroConta_deposito, numerosContas_destino, valor) {
        let conta_depois = this.consultar(numeroConta_deposito);
        if (conta_depois) {
            for (let numeroConta_destino of numerosContas_destino) {
                let conta_destino = this.consultar(numeroConta_destino);
                if (conta_destino) {
                    conta_depois.saldo -= valor;
                    conta_destino.saldo += valor;
                }
            }
        }
    }
    quantidade_contas() {
        return this.contas.length;
    }
    total_dinheiro_banco() {
        let total = 0;
        for (let conta of this.contas) {
            total += conta.saldo;
        }
        return total;
    }
    media_saldo_contas() {
        return this.total_dinheiro_banco() / this.quantidade_contas();
    }
}
exports.Banco = Banco;
class Conta {
    constructor(numero, saldo, id, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.id = id;
        this.cliente = cliente;
    }
}
exports.Conta = Conta;
//# sourceMappingURL=banco.js.map