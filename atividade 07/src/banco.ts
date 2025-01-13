import prompt from "prompt-sync";
import ulid from "ulid";

let input = prompt();

export class Banco {
    private contas: Conta[] = [];
    clientes: Cliente[] = [];

    public consultar(numero: string): Conta | undefined {
        for (let conta of this.contas) {
            if (conta.getNumero() === numero) { 
                return conta;
            }
        }
        console.log(`Conta com número ${numero} não encontrada.`);
        return undefined;
    }

    public consultar_por_cpf(cpf: string): Cliente | undefined {
        for (let cliente of this.clientes) {
            if (cliente.getCpf() === cpf) { 
                return cliente;
            }
        }
        console.log(`Cliente com CPF ${cpf} não encontrado.`);
        return undefined;
    }

    public inserirConta(conta: Conta): void {
        this.contas.push(conta);
    }

    public inserir_clientes(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    public listas_contas_cliente(cpf: string): Conta[] {
        let contas_selecionadas: Conta[] = [];
        for (let conta of this.contas) {
            if (conta.getCliente() && conta.getCliente()!.getCpf() === cpf) { 
                contas_selecionadas.push(conta);
            }
        }

        if (contas_selecionadas.length === 0) {
            console.log(`Nenhuma conta encontrada para o CPF ${cpf}.`);
        }

        return contas_selecionadas;
    }

    public totalizar_saldo_cliente(cpf: string): number {
        let contas_cliente_selecionado = this.listas_contas_cliente(cpf);
        if (!contas_cliente_selecionado || contas_cliente_selecionado.length === 0) {
            console.log(`Nenhuma conta encontrada para o CPF ${cpf}.`);
            return 0;
        }

        let saldo_total_cliente = 0;
        for (let conta of contas_cliente_selecionado) {
            saldo_total_cliente += conta.getSaldo(); 
        }
        return saldo_total_cliente;
    }

    public associar_cliente_conta(numeroConta: string, cpfCliente: string): void {
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

        conta_selecionada.setCliente(cliente_selecionado); 
        console.log(`Cliente ${cliente_selecionado.getNome()} associado à conta ${numeroConta}.`); 
    }

    private consultar_por_indice(indice: number): Conta | undefined {
        if (indice >= 0 && indice < this.contas.length) {
            return this.contas[indice];
        }
        return undefined;
    }

    public excluir_conta(numeroConta: string): void {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero() === numeroConta) { 
                indice = i;
                break;
            }
        }
        if (indice !== -1) {
            this.contas.splice(indice, 1);
            console.log(`Conta ${numeroConta} excluída com sucesso.`);
        } else {
            console.log(`Conta ${numeroConta} não encontrada.`);
        }
    }

    public sacar(numeroConta: string, valor: number): void {
        let conta = this.consultar(numeroConta);
        if (conta) {
            conta.setSaldo(conta.getSaldo() - valor); 
        }
    }

    public depositar(numeroConta: string, valor: number): void {
        let conta = this.consultar(numeroConta);
        if (conta) {
            conta.setSaldo(conta.getSaldo() + valor); 
        }
    }

    public tranferir(numeroConta_deposito: string, numeroConta_destino: string, valor: number): void {
        let conta_depois = this.consultar(numeroConta_deposito);
        let conta_destino = this.consultar(numeroConta_destino);
        if (conta_depois && conta_destino) {
            conta_depois.setSaldo(conta_depois.getSaldo() - valor); 
            conta_destino.setSaldo(conta_destino.getSaldo() + valor); 
        }
    }

    public transferir_contas(numeroConta_deposito: string, numerosContas_destino: string[], valor: number): void {
        let conta_depois = this.consultar(numeroConta_deposito);
        if (conta_depois) {
            for (let numeroConta_destino of numerosContas_destino) {
                let conta_destino = this.consultar(numeroConta_destino);
                if (conta_destino) {
                    conta_depois.setSaldo(conta_depois.getSaldo() - valor); 
                    conta_destino.setSaldo(conta_destino.getSaldo() + valor); 
                }
            }
        }
    }

    public quantidade_contas(): number {
        return this.contas.length;
    }

    public total_dinheiro_banco(): number {
        let total = 0;
        for (let conta of this.contas) {
            total += conta.getSaldo(); 
        }
        return total;
    }

    public media_saldo_contas(): number {
        return this.total_dinheiro_banco() / this.quantidade_contas();
    }

    public mudarTitularidade(numeroConta: string, cpf_novo_titular: string): void {
        let conta = this.consultar(numeroConta);
        let cliente = this.consultar_por_cpf(cpf_novo_titular);
        if (conta && cliente) {
            conta.setCliente(cliente); 
        } else {
            console.log("Conta ou cliente não encontrado");
        }
    }

    public excluirClientes(cpf: string): void {
        let indice = -1;
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getCpf() === cpf) { 
                indice = i;
                break;
            }
        }
        let contas_cliente = this.listas_contas_cliente(cpf);
        for (let conta of contas_cliente) {
            conta.setCliente(undefined); 
        }
        if (indice !== -1) {
            this.clientes.splice(indice, 1);
            console.log(`Cliente com CPF ${cpf} excluído com sucesso.`);
        } else {
            console.log(`Cliente com CPF ${cpf} não encontrado.`);
        }
    }

    public contasSemClientes(): void {
        let contas_vazias: Conta[] = [];
        for (let conta of this.contas) {
            if (!conta.getCliente()) { 
                contas_vazias.push(conta);
            }
        }
        for (let conta of contas_vazias) {
            console.log(`Conta ${conta.getNumero()} sem cliente associado.`); 
            let cpf_novo = input("Digite o CPF do novo titular: ");
            this.associar_cliente_conta(conta.getNumero(), cpf_novo); 
        }
    }

    public renderJuros(numero: string):void{
        const conta = this.consultar(numero);

        if (!conta) {
            console.log("Conta não encontrada.");
            return;
        }

        if (conta instanceof Poupanca) {
            const poupanca = conta as Poupanca; 
            poupanca.renderJuros();
            console.log(`Juros rendidos na conta ${numero}. Novo saldo: ${poupanca.getSaldo()}`);
        } else {
            console.log("A conta informada não é uma poupança. Operação não realizada.");
        }
    }
}

export class Conta {
    private numero: string;
    private saldo: number;
    private id: number;
    private cliente?: Cliente;

    constructor(numero: string, saldo: number, id: number, cliente?: Cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.id = id;
        this.cliente = cliente;
    }

    public getNumero(): string {
        return this.numero;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(valor: number): void {
        this.saldo = valor;
    }

    public getCliente(): Cliente | undefined {
        return this.cliente;
    }

    public setCliente(cliente: Cliente | undefined): void {
        this.cliente = cliente;
    }
}

export class Cliente {
    private id: string;
    private nome: string;
    private cpf: string;

    constructor(nome: string, cpf: string) {
        this.id = ulid.ulid();
        this.nome = nome;
        this.cpf = cpf;
    }

    public getId(): string {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCpf(): string {
        return this.cpf;
    }
}

export class Poupanca extends Conta {
    private taxaDeJuros: number;

    constructor(numero: string, saldo: number, taxaDeJuros: number, id: number) {
        super(numero, saldo, id);
        this.taxaDeJuros = taxaDeJuros;
    }

    public renderJuros(): void {
        const juros = this.getSaldo() * this.taxaDeJuros;
        this.setSaldo(this.getSaldo()+juros);
    }
}
