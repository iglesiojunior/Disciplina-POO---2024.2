class ControleDeAudio{
    volume: number = 2;

    aumentarVolume(){
        if (this.volume <=10){
            this.volume += 2;
        }
        else{
            console.log("Não foi possivel aumentar o volume: Volume máximo!!");
        }
    }
    
    diminuirVolume(){
        if (this.volume > 0){
            this.volume -= 2;
        }
        else{
            console.log("Não foi possivel diminuir o volume: Volume mínimo!!");
        }
    }

    lerVolume(){
        return `Volume atual é de ${this.volume}`;
    }

}

let smartfone: ControleDeAudio = new ControleDeAudio();
smartfone.aumentarVolume();
smartfone.aumentarVolume();
smartfone.aumentarVolume();
console.log(smartfone.lerVolume());

smartfone.diminuirVolume();
smartfone.diminuirVolume();
smartfone.diminuirVolume();
console.log(smartfone.lerVolume());

//volume = 0
smartfone.diminuirVolume();

//teste mensagem de erro:
smartfone.diminuirVolume();