# Atividade 02 - 08/11/2024

1. **Tipagem Estática vs Tipagem Dinâmica**:
   - A **tipagem estática** define no código a referência dos tipos das variáveis, argumentos, entre outras estruturas. Ou seja, os tipos são definidos e verificados antes da execução do programa, geralmente durante o processo de compilação.
   - Já a **tipagem dinâmica** define a tipagem das variáveis em tempo de execução, ou seja, os tipos são determinados durante a execução do código, o que permite maior flexibilidade, mas também pode gerar erros que só são detectados enquanto o código roda.

2. **Desvantagens da Tipagem Dinâmica**:
   - O ponto negativo da tipagem dinâmica é a **perda de desempenho**, já que o código precisa ser verificado constantemente durante a execução para garantir a tipagem de cada variável à medida que é inicializada. Isso difere da tipagem estática, onde a verificação já ocorre em tempo de compilação, permitindo um código mais rápido e otimizado.

3. **Exemplo de Problema em Linguagens de Tipagem Dinâmica**:
   - Em linguagens com tipagem dinâmica, é fácil passar um tipo de dado incorreto para uma operação matemática sem perceber. Por exemplo, em **Python**:

     ```python
     def soma(a, b):
         return a + b

     resultado = soma(5, "10")
     ```
     Neste exemplo, a tentativa de somar um número (`5`) com uma string (`"10"`) pode resultar em um erro, ou o comportamento pode ser inesperado, dependendo da linguagem.

4. **Tipagem Fraca em C**:
   - Embora a **linguagem C** tenha **tipagem estática** (com verificação de tipos feita em tempo de compilação), ela é considerada uma linguagem de **tipagem fraca**. Isso porque C permite operações que ignoram a compatibilidade rígida entre tipos. Essa flexibilidade permite manipular variáveis de tipos diferentes, o que pode ser perigoso e levar a erros se não for gerido com cuidado.

5. **TypeScript e Tipagem Forte e Estática**:
   - Em **TypeScript**, operações entre tipos incompatíveis são restringidas, e o compilador emitirá erros caso haja tentativas de misturar tipos sem uma conversão adequada. Por exemplo, embora o tipo `number` aceite tanto inteiros quanto valores de ponto flutuante, o TypeScript ainda aplica **verificações rigorosas de tipo**, o que caracteriza a linguagem como **fortemente tipada** e **estática**.

