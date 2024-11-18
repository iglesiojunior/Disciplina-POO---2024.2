# Questões Resolvidas

### 1º) Verdadeiro ou Falso
**Resposta:**  
F - F - V - F - V - V - V  

---

### 2º) Sobre a inicialização de variáveis
**Enunciado:**  
A afirmativa está falsa. Não haverá um problema de compilação devido à variável `quantReservas` não ter sido explicitamente inicializada previamente na classe.

---

### 3º) Código da classe `Hotel`

    class Hotel { 
    quantReservas: number; 
    
    // Construtor que aceita um parâmetro inteiro
    constructor(quantReservasInicial: number) { 
        this.quantReservas = quantReservasInicial; 
    } 
    
    adicionarReserva(): void { 
        this.quantReservas++; 
    } 
}

---

### 4º) Identificação e solução do erro
**Erro:**
O erro acontece na passagem do parâmetro na instanciação do objeto, já que o construtor pede obrigatoriamente um número.

**Solução:**

Definir um valor padrão para o parâmetro no construtor.
Passar um número como parâmetro durante a instanciação do objeto.

---

### 5º) Sobre o compartilhamento de referências de objetos
**a)**
Como as contas c1 e c2 no final do código apontam para o mesmo objeto, os seus valores serão de 40 após as transferências. Isso também vale para c3. Assim, as 3 contas terão os mesmos valores no final.

**b)**
O objeto que a referência c1 apontava anteriormente (conta "1") é descartado e sua memória será eventualmente liberada, a menos que ainda haja outras referências para ele.
