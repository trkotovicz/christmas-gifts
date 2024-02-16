# Christmas Gifts 🎄

Este projeto incrível foi desenvolvido para o Papai Noel. 🎅🏻

É um sistema de gerenciamento de lista de presentes e ebooks.
Nesta aplicação, o Papai Noel pode registrar novos ebooks que estarão disponíveis para presentes no Dia de Natal. Além disso, nós podemos fazer pedidos de ebooks que gostaríamos de receber como presente.

Para facilitar a vida do Papai Noel, ele pode consultar todos os pedidos, procurar especificamente por desejos ou por ebooks.

Por fim, quando o Dia de Natal chegar, o sistema irá enviar automaticamente todos os presentes de uma só vez.

Alguns links úteis:
- [Caixa de email Ethereal - para verificar o envio dos ebooks](https://ethereal.email/)


## API KEY

Para acessar rotas protegidas, você precisará inserir uma **_api-key_**.

Para fazer isso, acesse o arquivo `.env.example` na pasta raiz do repositório. Neste arquivo, você terá duas chaves disponíveis que funcionarão, uma exclusiva para o Papai Noel e a outra para seus ajudantes (administradores do sistema).

Se você quiser enviar os emails com todos os ebooks, tenha em mente que apenas o Papai Noel está autorizado a fazê-lo, por isso você precisará fornecer _api-key_ dele.

## Ferramentas utilizadas

A aplicação segue os princípios do SOLID e foi desenvolvida no modelo de camadas MSC (Model-Service-Conntroller) em Node.js, utilizando Typescript, Express.js, banco de dados PostgreSQL, TypeORM, e Swagger para a documentação. Para o disparo de emails, foi utilizado o Nodemailer e o serviço de SMTP Ethereal. Além disso, é possível rodar a aplicação pelo Docker.</br>


## Variáveis de Ambiente

Para utilizar a aplicação, você precisará configurar as variáveis de ambiente.

Renomeie o arquivo `.env.example` da raiz do projeto para `.env`. Esse arquivo contém todas as variáveis necessárias para colocar o sistema no ar.

⚠️ **Importante** ⚠️

Você deverá substituir as informações do arquivo pelas suas credenciais do banco de dados. Além disso, na variável `HOST` você precisará informar `localhost` para rodar o projeto **localmente**, ou `db` para rodar a aplicação via **Docker**.

Aqui você também poderá informar os dados da sua [caixa de email Ethereal](https://ethereal.email/messages).


## Inicialização da Aplicação

### Inicialização via Docker 🐳

1. Clone o repositório `git@github.com:trkotovicz/christmas-gifts.git`.\
2. Configure o arquivo `.env` e informe o host `HOST=db`
3. Na raiz do repositório, abra o terminal e rode o comando `npm run compose:up` e aguarde a aplicação subir (esse passo pode demorar um pouco).
4. Para encerrar a aplicação, rode o comando `npm run compose:down`.

O comando subirá o container com o terminal `--detach`, portanto, se quiser acompanhar os logs da aplicação, você poderá acompanhar através do *Docker Desktop*. 

⚠️ **Atenção** ⚠️ Não esqueça de configurar o HOST, caso contrário o contêiner não subirá e gerará um erro.


### Inicialização local 🖥

1. Clone o repositório `git@github.com:trkotovicz/christmas-gifts.git`.
2. Configure o arquivo `.env` com suas informações e informe o host `HOST=localhost`
3. Na raiz do repositório instale as dependências com `npm install`.
4. Você precisará criar manualmente um banco de dados chamado `christmas-gifts` no seu PostgreSQL.
5. Com o DB criado, rode o comando `npm run populateDB` para alimentar o banco com as *seeds*.
6. Agora você já pode inicializar o projeto com `npm start`.
7. Abra o navegador no endereço `http://localhost:3001/docs/` ou utilize um cliente de requisições HTTP (como Insomnia ou Postman) para testar a API.

## API

Com a aplicação rodando acesse a [documentação da API](http://localhost:3001/docs/) (`http://localhost:3001/docs/`) para ver as rotas disponíveis e os dados esperados em cada requisição. </br>

 
 ---

Projeto desenvolvido por [Thais R Kotovicz](https://www.linkedin.com/in/thaiskotovicz/).
</br>
