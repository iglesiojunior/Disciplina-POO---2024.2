class Equipamento{
    ligado: boolean;
    constructor(){
        this.ligado = false;
    }
    liga(): void{
        if(!this.ligado){
            this.ligado = true;
        }
    }
    desliga(): void{
        if(this.ligado){
            this.ligado = false;
        }
    }
    inverte(): void{
        if(this.ligado){
            this.ligado = false;
        }else{
            this.ligado = true;
        }
    }
    estaLigado(): boolean{
        return this.ligado;
    }

}

function main(){
    let equipamento = new Equipamento();
    console.log(equipamento.estaLigado());
    equipamento.liga();
    console.log(equipamento.estaLigado());
    equipamento.desliga();
    console.log(equipamento.estaLigado());
    equipamento.inverte();
    console.log(equipamento.estaLigado());
    equipamento.inverte();
    console.log(equipamento.estaLigado());
}
}