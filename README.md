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
Abra o terminal na pasta do projeto e execute o seguinte comando para rodar todos os testes:
```bash
yarn test
```
![image](https://user-images.githubusercontent.com/58920070/235376276-bb22b63d-a0d6-4fe8-9733-af6f452fc668.png)

## All Tests Result
![image](https://user-images.githubusercontent.com/58920070/235376295-a0aba90d-c09b-470e-a5cf-788110844a99.png)

## Também é possível executar somente os testes unitários do projeto:
Abra o terminal na pasta do projeto e execute o seguinte comando para rodar apenas os testes unitários:
```bash
yarn test:unit
```
![image](https://user-images.githubusercontent.com/58920070/235376443-21f31784-8374-4c99-a020-9958bdc238aa.png)


## Unit Tests Result
![image](https://user-images.githubusercontent.com/58920070/235376372-5a024ee0-40b9-43b5-a1d9-e4eadaa7f0ce.png)

## Também é possível executar somente o teste de integração do projeto:
Abra o terminal na pasta do projeto e execute o seguinte comando para rodar apenas o teste de integração:
```bash
yarn test:integration
```
![image](https://user-images.githubusercontent.com/58920070/235376478-97587df7-7cac-49f7-af5b-7c8546a8530b.png)

## Integration Test Result
![image](https://user-images.githubusercontent.com/58920070/235376519-4e49e6a1-2c5b-4ccb-a112-b6837d9a5ba2.png)


