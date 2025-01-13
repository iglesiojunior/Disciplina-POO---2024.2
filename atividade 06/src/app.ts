import prompt from "prompt-sync";
import { Banco, Conta, Cliente, Poupanca } from "./banco";

let input = prompt();

class App {
    private banco: Banco = new Banco();

    public executar(): void {
        let opcao: string = '';

        do {
            console.log(`
                =======================================
                |           BANCO DIGITAL             |
                =======================================
                Bem vindo!
                Digite uma opção:
                Contas:
                1 - Inserir  2 - Consultar  3 - Sacar
                4 - Depositar  5 - Excluir  6 - Transferir
                7 - Totalizações
                Clientes:
                8 - Inserir 9 - Consultar  10 - Associar
                11 - Mudar titularidade    12 - Excluir Clientes
                13 - Contas sem clientes
                14 - Render Juros
                0 - Sair
            `);

            opcao = input("\tOpção: ");

            switch (opcao) {
                case "1":
                    this.inserirConta();
                    break;
                case "2":
                    this.consultarConta();
                    break;
                case "3":
                    this.sacar();
                    break;
                case "4":
                    this.depositar();
                    break;
                case "5":
                    this.excluirConta();
                    break;
                case "6":
                    this.transferir();
                    break;
                case "8":
                    this.inserirCliente();
                    break;
                case "9":
                    this.consultarCliente();
                    break;
                case "10":
                    this.associarCliente();
                    break;
                case "11":
                    this.mudarTitularidade();
                    break;
                case "12":
                    this.excluirClientes();
                    break;
                case "13":
                    this.contasSemClientes();
                    break;
                case "14":
                    this.renderJuros();
                    break;
                default:
                    if (opcao !== "0") console.log("Opção inválida.");
            }

            input("Operação finalizada. Pressione <Enter> para continuar.");
        } while (opcao !== "0");

        console.log("Aplicação encerrada.");
    }

    private inserirConta(): void {
        console.log("\nCadastrar conta");
        let tipoConta = input("Digite o tipo de conta (1 - Conta Comum, 2 - Poupança): ");
        let numero = input('Digite o número da conta: ');
        let saldo = parseFloat(input('Digite o saldo inicial: '));
        let id = parseInt(input('Digite o ID do cliente: '));

        if (tipoConta === "2") {
            let taxaDeJuros = parseFloat(input("Digite a taxa de juros da poupança (em decimal, ex: 0.01 para 1%): "));
            let poupanca = new Poupanca(numero, saldo, taxaDeJuros, id);
            this.banco.inserirConta(poupanca);
            console.log("Poupança inserida com sucesso!");
        } else {
            let conta = new Conta(numero, saldo, id);
            this.banco.inserirConta(conta);
            console.log("Conta inserida com sucesso!");
        }
    }

    private consultarConta(): void {
        let numero = input('Digite o número da conta: ');
        let conta = this.banco.consultar(numero);
        if (conta) {
            console.log(`Conta encontrada: Número ${conta.getNumero()}, Saldo ${conta.getSaldo()}, Titular: ${conta.getCliente() != undefined ? conta.getCliente()?.getNome() : "Sem cliente"}`);
        }
    }

    private sacar(): void {
        let numero = input('Digite o número da conta: ');
        let valor = parseFloat(input('Digite o valor para sacar: '));
        this.banco.sacar(numero, valor);
        console.log("Saque realizado.");
    }

    private depositar(): void {
        let numero = input('Digite o número da conta: ');
        let valor = parseFloat(input('Digite o valor para depositar: '));
        this.banco.depositar(numero, valor);
        console.log("Depósito realizado.");
    }

    private excluirConta(): void {
        let numero = input('Digite o número da conta para excluir: ');
        this.banco.excluir_conta(numero);
    }

    private transferir(): void {
        let origem = input('Digite o número da conta de origem: ');
        let destino = input('Digite o número da conta de destino: ');
        let valor = parseFloat(input('Digite o valor a ser transferido: '));
        this.banco.tranferir(origem, destino, valor);
        console.log("Transferência realizada.");
    }

    private inserirCliente(): void {
        console.log("\nCadastrar cliente");
        let nome = input('Digite o nome do cliente: ');
        let cpf = input('Digite o CPF do cliente: ');
        let cliente = new Cliente(nome, cpf);
        this.banco.inserir_clientes(cliente);
        console.log("Cliente inserido com sucesso!");
    }

    private consultarCliente(): void {
        let cpf = input('Digite o CPF do cliente: ');
        let cliente = this.banco.consultar_por_cpf(cpf);
        if (cliente) {
            console.log(`Cliente encontrado: Nome ${cliente.getNome()}, CPF ${cliente.getCpf()}`);
        } else {
            console.log("Cliente não encontrado.");
        }
    }

    private associarCliente(): void {
        let numeroConta = input('Digite o número da conta: ');
        let cpf = input('Digite o CPF do cliente: ');
        this.banco.associar_cliente_conta(numeroConta, cpf);
    }

    private mudarTitularidade(): void {
        let numeroConta = input('Digite o número da conta: ');
        let cpf = input('Digite o CPF do novo titular: ');
        this.banco.mudarTitularidade(numeroConta, cpf);
    }

    private excluirClientes(): void {
        let cpf = input('Digite o CPF do cliente para excluir: ');
        this.banco.excluirClientes(cpf);
    }

    private contasSemClientes(): void {
        this.banco.contasSemClientes();
    }

    private renderJuros(): void {
        let numero = input("Digite o número da conta poupança: ");
        this.banco.renderJuros(numero);
    }
}

const app = new App();
app.executar();
