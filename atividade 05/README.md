### Respostas

### 6º
#### a. 
Concordo que a classe **Banco** está concentrando muitas responsabilidades, como cadastro de clientes e contas, além de implementar regras de negócio. Isso pode dificultar a manutenção e extensão do código, pois viola o princípio da responsabilidade única (SRP).

#### b. 
Seria mais adequado criar classes separadas, como **CadastroDeClientes** e **CadastroDeContas**, para gerenciar respectivamente os clientes e as contas, deixando a classe **Banco** apenas para orquestrar ações de alto nível. Isso tornaria o código mais organizado, modular e fácil de manter.

#### c. 
O método **associar cliente a uma conta** deveria estar na classe **CadastroDeContas**, pois essa funcionalidade está diretamente relacionada ao gerenciamento de contas. A classe **Banco** poderia atuar como uma interface de alto nível, delegando essa responsabilidade para **CadastroDeContas**. Essa separação facilita a manutenção e melhora a clareza do código.

