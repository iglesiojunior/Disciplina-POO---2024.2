"use strict";
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
        this.clientes = [];
    }
    Banco.prototype.consultar = function (numero) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero === numero) {
                return conta;
            }
        }
        console.log("Conta com n\u00FAmero ".concat(numero, " n\u00E3o encontrada."));
        return undefined;
    };
    Banco.prototype.consultar_por_cpf = function (cpf) {
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
            var cliente = _a[_i];
            if (cliente.cpf === cpf) {
                return cliente;
            }
        }
        console.log("Cliente com CPF ".concat(cpf, " n\u00E3o encontrado."));
        return undefined;
    };
    Banco.prototype.inserirConta = function (conta) {
        this.contas.push(conta);
    };
    Banco.prototype.inserir_clientes = function (cliente) {
        this.clientes.push(cliente);
    };
    Banco.prototype.listas_contas_cliente = function (cpf) {
        var contas_selecionadas = [];
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.cliente && conta.cliente.cpf === cpf) {
                contas_selecionadas.push(conta);
            }
        }
        if (contas_selecionadas.length === 0) {
            console.log("Nenhuma conta encontrada para o CPF ".concat(cpf, "."));
        }
        return contas_selecionadas;
    };
    Banco.prototype.totalizar_saldo_cliente = function (cpf) {
        var contas_cliente_selecionado = this.listas_contas_cliente(cpf);
        if (!contas_cliente_selecionado || contas_cliente_selecionado.length === 0) {
            console.log("Nenhuma conta encontrada para o CPF ".concat(cpf, "."));
            return 0;
        }
        var saldo_total_cliente = 0;
        for (var _i = 0, contas_cliente_selecionado_1 = contas_cliente_selecionado; _i < contas_cliente_selecionado_1.length; _i++) {
            var conta = contas_cliente_selecionado_1[_i];
            saldo_total_cliente += conta.saldo;
        }
        return saldo_total_cliente;
    };
    Banco.prototype.associar_cliente_conta = function (numeroConta, cpfCliente) {
        var conta_selecionada = this.consultar(numeroConta);
        var cliente_selecionado = this.consultar_por_cpf(cpfCliente);
        if (!conta_selecionada) {
            console.log("Conta com n\u00FAmero ".concat(numeroConta, " n\u00E3o encontrada."));
            return;
        }
        if (!cliente_selecionado) {
            console.log("Cliente com CPF ".concat(cpfCliente, " n\u00E3o encontrado."));
            return;
        }
        conta_selecionada.cliente = cliente_selecionado;
        console.log("Cliente ".concat(cliente_selecionado.nome, " associado \u00E0 conta ").concat(numeroConta, "."));
    };
    return Banco;
}());
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, id, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.id = id;
        this.cliente = cliente;
    }
    return Conta;
}());
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, cpf, dataNascimento, contas) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = contas;
    }
    return Cliente;
}());
function main() {
    var banco = new Banco();
    // Criar clientes
    var cliente1 = new Cliente(1, "Iglésio Júnior", "12345678900", new Date(1990, 1, 1), []);
    var cliente2 = new Cliente(2, "Metallica Megadeph da Silva", "98765432100", new Date(1985, 5, 10), []);
    banco.inserir_clientes(cliente1);
    banco.inserir_clientes(cliente2);
    // Criar contas
    var conta1 = new Conta("111-1", 100, 1, cliente1);
    var conta2 = new Conta("222-2", 200, 2);
    banco.inserirConta(conta1);
    banco.inserirConta(conta2);
    // Testar consultas e associações
    console.log("Consulta de conta por número:", banco.consultar("111-1"));
    console.log("Consulta de cliente por CPF:", banco.consultar_por_cpf("12345678900"));
    banco.associar_cliente_conta("222-2", "12345678900");
    console.log("Conta após associação com novo cliente:", banco.consultar("222-2"));
    console.log("Contas do cliente 1:", banco.listas_contas_cliente("12345678900"));
    console.log("Saldo total do cliente 1:", banco.totalizar_saldo_cliente("12345678900"));
}
main();
//# sourceMappingURL=atividade_05.js.map