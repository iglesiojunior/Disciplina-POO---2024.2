class Postagem{
    
    id: number;
    texto: string;
    qtd_curtidas: number;

    constructor(id: number, texto: string, qtd_curtidas: number){
        this.id = id;
        this.texto = texto;
        this.qtd_curtidas = qtd_curtidas;
    }

    curtir(): void{
        this.qtd_curtidas++;
    }

    toString(): string{
        return `ID: ${this.id}, Texto: ${this.texto}, Curtidas: ${this.qtd_curtidas}`;
    }
}

class Microblog{
    postagens: Postagem[];
    
    constructor(){
        this.postagens = [];
    }

    puplicar_postagem(postagem: Postagem): void{
        this.postagens.push(postagem);
    }

    excluir_postagem(id: number): void{
        for(let i = 0; i < this.postagens.length; i++){
            if(this.postagens[i].id == id){
                this.postagens.splice(i, 1);
                break;
            }
        }
    }
    
    postagem_mais_curtida(): Postagem{
        let postagem_mais_curtida: Postagem = this.postagens[0];
        for(let i = 0; i < this.postagens.length; i++){
            if(this.postagens[i].qtd_curtidas > postagem_mais_curtida.qtd_curtidas){
                postagem_mais_curtida = this.postagens[i];
            }
            }
            return postagem_mais_curtida;
        }
    
    curtir(id: number): void{
        for(let i = 0; i < this.postagens.length; i++){
            if(this.postagens[i].id == id){
                this.postagens[i].curtir();
                break;
            }
        }
    }
    toString(): string{
        let string = "";
        for(let i = 0; i < this.postagens.length; i++){
            string += this.postagens[i].toString() + "\n";
        }
        return string;
    }
        
}
