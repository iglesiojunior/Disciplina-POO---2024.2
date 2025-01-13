export class Hora{
    private horas: number;
    private minutos: number;
    private segundos: number;

    constructor(horas: number, minutos: number, segundos: number){
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    public Ler_hora(){
        console.log(`Hora certa: ${this.horas}`);
    }
    
    public Ler_minutos(){
        console.log(`minutos certos: ${this.minutos}`);
    }

    public Ler_segundos(){
        console.log(`segundos certos: ${this.segundos}`);
    }

    public Hora_completa(){
        console.log(`Horas atuais: ${this.horas}:${this.minutos}:${this.segundos}`);
    }
}