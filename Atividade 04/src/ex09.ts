class Jogador {
    forca: number;
    nivel: number;
    pontos: number;
  
    constructor(forca: number, nivel: number, pontos: number) {
      this.forca = forca;
      this.nivel = nivel;
      this.pontos = pontos;
    }
  
    calcularAtaque(): number {
      return this.forca * this.nivel;
    }
  

    atacar(atacado: Jogador): void {
      if (atacado.estaVivo()) {
        const dano = this.calcularAtaque();
        atacado.pontos -= dano;
        console.log(`${this.toString()} atacou ${atacado.toString()} causando ${dano} de dano.`);
      } else {
        console.log(`${atacado.toString()} já está morto e não pode ser atacado.`);
      }
    }
  

    estaVivo(): boolean {
      return this.pontos > 0;
    }
  

    toString(): string {
      return `Jogador [Força: ${this.forca}, Nível: ${this.nivel}, Pontos: ${this.pontos}]`;
    }
  }
  
  let jogador1 = new Jogador(10, 5, 100);  // Força: 10, Nível: 5, Pontos: 100
  let jogador2 = new Jogador(8, 6, 120);   // Força: 8, Nível: 6, Pontos: 120
  

  console.log(jogador1.toString());  // Jogador [Força: 10, Nível: 5, Pontos: 100]
  console.log(jogador2.toString());  // Jogador [Força: 8, Nível: 6, Pontos: 120]
  

  jogador1.atacar(jogador2);
  

  console.log(jogador1.toString());  // Jogador [Força: 10, Nível: 5, Pontos: 100]
  console.log(jogador2.toString());  // Jogador [Força: 8, Nível: 6, Pontos: 120] (será alterado após o ataque)

  jogador2.atacar(jogador1);
  

  console.log(jogador1.toString());
  console.log(jogador2.toString());
  

  if (jogador1.pontos > jogador2.pontos) {
    console.log("Jogador 1 tem mais pontos.");
  } else if (jogador2.pontos > jogador1.pontos) {
    console.log("Jogador 2 tem mais pontos.");
  } else {
    console.log("Ambos têm o mesmo número de pontos.");
  }
  