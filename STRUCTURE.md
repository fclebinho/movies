# Entendendo decisões arquiteturais e a estrutura do projeto

## Requisitos para rodar o projeto

### Setup de ambiente:

- [Node LTS](https://nodejs.org/en)
  - Usando [`nvm`](https://github.com/nvm-sh/nvm)
    - `nvm install`
    - `nvm use`
- [NPM 10.x](https://www.npmjs.com)

### Como rodar na minha máquina?

- Clone o projeto `git clone https://github.com/fclebinho/movies.git`
- Configure o arquivo .env com endereço do serviço API e a quantidade de registros por páginas em caso de listagem.
- Rode `npm i`
- Rode `npm run dev`
- Pronto 🎉

### Como rodar os testes?

Abaixo estão listado as formas de executar os testes:

- Rode `npm run test` para executar os testes de forma simples no console com watch ativo.
- Rode `npm run test-ui` para executar com a interface gráfica, recurso esse provido pela ferramenta [Vitest](https://vitest.dev)
- Rode `npm run coverage` para obter dados sobre a cobertura de testes.

## Site

### Estrutura do projeto

- `./src/pages`: Toda página representa uma tela do projeto, uma tela caso tenha componentes específicos inicialmente deve ter os mesmos guardados na sua própria pasta, repetindo a estrutura anterior do projeto e evitando o reuso antes do uso de fato.
- `./src/components`: São todos os pedaços primordiais de interface como componentes de formulário entre outros.
- `./src/hooks`: São adicionadas as funções que nos permitirão conectar (anexar ou anexar uma funcionalidade ao componente) ao estado e ao ciclo de vida da aplicação (entre outras funcionalidades).
- `./src/services`: Contém recursos essenciais para acesso a dados de várias fontes, como APIs da web e bancos de dados.
- `./src/tests`: Contém recursos essenciais utilizado para auxilio aos testes **sempre utilize o método render disponibilizado por este pacote** para renderizar componentes para testes unitário.

### Como me localizar no projeto?

- Todas as páginas do projeto estão listadas em `./src/pages`
  - Todos os `componentes` que representam as páginas estão em `./src/pages/**/components`
    - Uma vez dentro de uma página você pode ir navegando pelos componentes para ir se encontrando e fazer a alteração que deseja
