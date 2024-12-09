
import prompt from "prompt-sync";
import {Banco, Conta, Cliente} from "./banco";

let input = prompt();
let banco = new Banco();
let opcao: string = '';

do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('Contas:');
    console.log('1 - Inserir  2 - Consultar  3 - Sacar');
    console.log('4 - Depositar  5 - Excluir  6 - Transferir');
    console.log('7 - Totalizações');
    console.log('Clientes:');
    console.log('8 - Inserir  9 - Consultar  10 - Associar');
    console.log('0 - Sair');
    opcao = input("Opção: ");

    switch (opcao) {
        case "1":
            inserirConta();
            break;
        case "2":
            consultarConta();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
        case "5":
            excluirConta();
            break;
        case "6":
            transferir();
            break;
        case "8":
            inserirCliente();
            break;
        case "9":
            consultarCliente();
            break;
        case "10":
            associarCliente();
            break;
        default:
            if (opcao !== "0") console.log("Opção inválida.");
    }

    input("Operação finalizada. Pressione <Enter> para continuar.");
} while (opcao !== "0");

console.log("Aplicação encerrada.");

// Funções
function inserirConta(): void {
    console.log("\nCadastrar conta");
    let numero = input('Digite o número da conta: ');
    let saldo = parseFloat(input('Digite o saldo inicial: '));
    let id = parseInt(input('Digite o ID do cliente: '));
    let conta = new Conta(numero, saldo, id);
    banco.inserirConta(conta);
    console.log("Conta inserida com sucesso!");
}

function consultarConta(): void {
    let numero = input('Digite o número da conta: ');
    let conta = banco.consultar(numero);
    if (conta) {
        console.log(`Conta encontrada: Número ${conta.numero}, Saldo ${conta.saldo}`);
    }
}

function sacar(): void {
    let numero = input('Digite o número da conta: ');
    let valor = parseFloat(input('Digite o valor para sacar: '));
    banco.sacar(numero, valor);
    console.log("Saque realizado.");
}

function depositar(): void {
    let numero = input('Digite o número da conta: ');
    let valor = parseFloat(input('Digite o valor para depositar: '));
    banco.depositar(numero, valor);
    console.log("Depósito realizado.");
}

function excluirConta(): void {
    let numero = input('Digite o número da conta para excluir: ');
    banco.excluir_conta(numero);
}

function transferir(): void {
    let origem = input('Digite o número da conta de origem: ');
    let destino = input('Digite o número da conta de destino: ');
    let valor = parseFloat(input('Digite o valor a ser transferido: '));
    banco.tranferir(origem, destino, valor);
    console.log("Transferência realizada.");
}

function inserirCliente(): void {
    console.log("\nCadastrar cliente");
    let id = parseInt(input('Digite o ID do cliente: '));
    let nome = input('Digite o nome do cliente: ');
    let cpf = input('Digite o CPF do cliente: ');
    let cliente = new Cliente(id, nome, cpf);
    banco.clientes.push(cliente);
    console.log("Cliente inserido com sucesso!");
}

function consultarCliente(): void {
    let cpf = input('Digite o CPF do cliente: ');
    let cliente = banco.clientes.find(c => c.cpf === cpf);
    if (cliente) {
        console.log(`Cliente encontrado: Nome ${cliente.nome}, CPF ${cliente.cpf}`);
    } else {
        console.log("Cliente não encontrado.");
    }
}

function associarCliente(): void {
    let numeroConta = input('Digite o número da conta: ');
    let cpf = input('Digite o CPF do cliente: ');
    banco.associar_cliente_conta(numeroConta, cpf);
}
