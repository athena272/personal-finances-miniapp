# Personal Finances Miniapp
## Sobre o projeto 

Ao todo, o projeto foi criado com o objetivo de praticar e aprender testes unitários e testes de integração. Os testes unitários verificam se cada função e classe individualmente funciona corretamente, enquanto os testes de integração verificam se as funções e classes trabalham bem juntas e se produzem os resultados esperados. Com a criação desses testes, é possível garantir a qualidade e a estabilidade do código e reduzir a possibilidade de erros e bugs.

O projeto em questão é um aplicativo de finanças pessoais, desenvolvido em JavaScript, que permite ao usuário adicionar carteiras, efetuar compras e receber dinheiro. O aplicativo é composto por três classes principais: App, Wallet e Transaction. A classe App é responsável por gerenciar o usuário e suas carteiras, bem como processar as transações de compra e recebimento de dinheiro. A classe Wallet é responsável por armazenar as transações de uma determinada carteira e calcular seu saldo atual. Por fim, a classe Transaction representa uma transação, contendo informações como o rótulo da transação (por exemplo, "Compra de Pizza"), o valor e a data.

O projeto já possui testes unitários implementados para as classes Wallet e Transaction, garantindo a funcionalidade correta de suas respectivas funcionalidades. Agora, foi adicionado um teste de integração para a classe App, que testa o comportamento geral do aplicativo em relação à adição de carteiras, compras e recebimento de dinheiro. Este teste garante que o aplicativo está funcionando corretamente de ponta a ponta, integrando todas as funcionalidades e classes do projeto.

Com esta nova informação, é possível observar que o projeto está cada vez mais robusto e bem estruturado, utilizando boas práticas de desenvolvimento e testes para garantir a qualidade do código produzido.


## Tecnologias 
- Jest <img align="center" alt="Gui-NodeJs" height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
- Javascript <img align="center" alt="Gui-Js" height="30" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> 
- NodeJS <img align="center" alt="Gui-NodeJs" height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />

## Como executar
Clone este repositório em sua máquina local.
Abra o terminal na pasta do projeto e execute o seguinte comando para baixar as dependências do projeto
```bash
yarn install
```
Abra o terminal na pasta do projeto e execute o seguinte comando para rodar o projeto
```bash
yarn test
```
![image](https://user-images.githubusercontent.com/58920070/235045252-7b019776-c13a-4519-a6ca-4561da9ebc40.png)

## Expected Result
![image](https://user-images.githubusercontent.com/58920070/235045441-94aea1d9-0b2a-415f-8793-a94b697374d9.png)

