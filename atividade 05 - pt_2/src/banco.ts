export class Banco {
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

    consultar_por_indice(indice: number){
        if(indice >= 0 && indice < this.contas.length){
            return this.contas[indice];
        }
    }

    excluir_conta(numeroConta: string): void {
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
        } else {
            console.log(`Conta ${numeroConta} não encontrada.`);
        }
    }

    sacar(numeroConta: string, valor: number): void {
        let conta = this.consultar(numeroConta);
        if (conta) {
            conta.saldo -= valor;
        }
    }

    depositar(numeroConta: string, valor: number): void {
        let conta = this.consultar(numeroConta);
        if (conta) {
            conta.saldo += valor;
        }
    }

    tranferir(numeroConta_deposito: string, numeroConta_destino: string, valor: number): void {
        let conta_depois = this.consultar(numeroConta_deposito);
        let conta_destino = this.consultar(numeroConta_destino);
        if (conta_depois && conta_destino) {
            conta_depois.saldo -= valor;
            conta_destino.saldo += valor;
        }
    }

    transferir_contas(numeroConta_deposito: string, numerosContas_destino: string[], valor: number): void {
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

    quantidade_contas(): number {
        return this.contas.length;
    }
    
    total_dinheiro_banco(): number {
        let total = 0;
        for (let conta of this.contas) {
            total += conta.saldo;
        }
        return total;
    }

    media_saldo_contas(): number {
        return this.total_dinheiro_banco() / this.quantidade_contas();
    }
}

export class Conta {
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

export class Cliente {
    id: number;
    nome: string;
    cpf: string;

    constructor(id: number, nome: string, cpf: string) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }
}