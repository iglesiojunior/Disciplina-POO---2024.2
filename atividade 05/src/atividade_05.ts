class Banco {
    contas: Conta[] = [];
    clientes: Cliente[] = [];

    consultar(numero: string): Conta | undefined {
        for (let conta of this.contas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        console.log(`Conta com número ${numero} não encontrada.`);
        return undefined;
    }

    consultar_por_cpf(cpf: string): Cliente | undefined {
        for (let cliente of this.clientes) {
            if (cliente.cpf === cpf) {
                return cliente;
            }
        }
        console.log(`Cliente com CPF ${cpf} não encontrado.`);
        return undefined;
    }

    inserirConta(conta: Conta): void {
        this.contas.push(conta);
    }

    inserir_clientes(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    listas_contas_cliente(cpf: string): Conta[] {
        let contas_selecionadas: Conta[] = [];
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

    totalizar_saldo_cliente(cpf: string): number {
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

    associar_cliente_conta(numeroConta: string, cpfCliente: string): void {
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
}

class Conta {
    numero: string;
    saldo: number;
    id: number;
    cliente?: Cliente;

    constructor(numero: string, saldo: number, id: number, cliente?: Cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.id = id;
        this.cliente = cliente;
    }
}

class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(id: number, nome: string, cpf: string, dataNascimento: Date, contas: Conta[]) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = contas;
    }
}

function main() {
    let banco = new Banco();

    // Criar clientes
    let cliente1 = new Cliente(1, "Iglésio Júnior", "12345678900", new Date(1990, 1, 1), []);
    let cliente2 = new Cliente(2, "Metallica Megadeph da Silva", "98765432100", new Date(1985, 5, 10), []);
    banco.inserir_clientes(cliente1);
    banco.inserir_clientes(cliente2);

    // Criar contas
    let conta1 = new Conta("111-1", 100, 1, cliente1);
    let conta2 = new Conta("222-2", 200, 2);
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
