"use strict";
class Postagem {
    constructor(id, texto, qtd_curtidas) {
        this.id = id;
        this.texto = texto;
        this.qtd_curtidas = qtd_curtidas;
    }
    curtir() {
        this.qtd_curtidas++;
    }
    toString() {
        return `ID: ${this.id}, Texto: ${this.texto}, Curtidas: ${this.qtd_curtidas}`;
    }
}
class Microblog {
    constructor() {
        this.postagens = [];
    }
    puplicar_postagem(postagem) {
        this.postagens.push(postagem);
    }
    excluir_postagem(id) {
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                this.postagens.splice(i, 1);
                break;
            }
        }
    }
    postagem_mais_curtida() {
        let postagem_mais_curtida = this.postagens[0];
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].qtd_curtidas > postagem_mais_curtida.qtd_curtidas) {
                postagem_mais_curtida = this.postagens[i];
            }
        }
        return postagem_mais_curtida;
    }
    curtir(id) {
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                this.postagens[i].curtir();
                break;
            }
        }
    }
    toString() {
        let string = "";
        for (let i = 0; i < this.postagens.length; i++) {
            string += this.postagens[i].toString() + "\n";
        }
        return string;
    }
}
//# sourceMappingURL=mini_blog.js.map