# 🐉 API - Moko Tattoo Studio

Api criada para ser consumida em React.js
(essa api está sendo recriada para esse proposito e você pode encontrar o repositorio original [aqui](https://github.com/Josirocha/moko_tattoo_studio))

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/). SQLite foi utilizado como banco de dados do projeto.

## :heavy_check_mark: Pré-Requisitos

- [Node.js](https://nodejs.org/en/) - v. 16.15.1
- [NPM](https://www.npmjs.com/package/npm/v/8.11.0) - v. 8.11.0

## :outbox_tray: Packages

- [Express](https://expressjs.com/) - v. 4.18.1
- [Nodemon](https://www.npmjs.com/package/nodemon) - v. 2.0.19
- [SQLite](https://www.npmjs.com/package/sqlite3) - v. 5.0.10
- [Cors](https://www.npmjs.com/package/cors) - v. 2.8.5

## :rocket: Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```
git clone https://github.com/igorsans/moko_tattoo_studio
```

Entrando na pasta:

```
cd moko_tattoo_studio
```

Instalando os pacotes:

```
npm install
```

Criando e populando o banco de dados:

```
npm run database
```

Rodando o projeto:

```
npm start
```

## :pencil: Rotas HTTP implementadas

## 👨‍👩‍👧‍👦 Clientes

- **GET /clientes**

  Retorna todos os dados do banco. Esquema da resposta:

  ```json
  {
    "resultado": [
      {
        "id": 1,
        "nome": "Eugênio",
        "sobrenome": "Silva",
        "telefone": "21-994785122",
        "dataNascimento": "25/02/1999",
        "email": "Eugênio@gmail.com"
      },
      {
        "id": 2,
        "nome": "Olívia",
        "sobrenome": "pedro",
        "telefone": "21-988796335",
        "dataNascimento": "29/08/2000",
        "email": "Olivia@gmail.com"
      },
      {
        "id": 3,
        "nome": "Mirtes",
        "sobrenome": "silva",
        "telefone": "21-974659987",
        "dataNascimento": "05/12/2006",
        "email": "Mirtes@gmail.com"
      }
    ],
    "error": false
  }
  ```

- **GET /clientes/{id}**

  Retorna o cliente correspondente ao id. Esquema da resposta:

  ```json
  {
    "resultado": {
      "id": 1,
      "nome": "Eugênio",
      "sobrenome": "Silva",
      "telefone": "21-994785122",
      "dataNascimento": "25/02/1999",
      "email": "Eugênio@gmail.com"
    },
    "error": false
  }
  ```

- **POST /clientes**

  Insere um cliente na base de dados. Esquema da requisição:

  ```json
  {
    "nome": "Geovaldo",
    "sobrenome": "Silva",
    "telefone": "21-994785122",
    "dataNascimento": "25/02/1999",
    "email": "Eugênio@gmail.com"
  }
  ```

  Esquema da resposta

  ```json
  {
    "resultado": "usuario cadastrado com sucesso",
    "error": false
  }
  ```

- **PUT /clientes/{id}**

  Atualiza um cliente de acordo com o id. Esquema da requisição:

  ```json
  {
    "nome": "Geovaldo",
    "sobrenome": "Silva",
    "telefone": "21-500000",
    "dataNascimento": "25/02/1999",
    "email": "Eugênio@gmail.com"
  }
  ```

  Esquema da resposta:

  ```json
  {
    "resultado": "usuario atualizado com sucesso",
    "error": false
  }
  ```

- **DELETE /clientes/{id}**

  Deleta um cliente de acordo com o id. Esquema da resposta:

  ```json
  {
    "resultado": "usuario deletado com sucesso",
    "error": false
  }
  ```
## 📸 Tatuagens

- **GET/tatuagens**

  <p>Retorna todos os dados do banco.<p>
   Esquema da resposta:

  ```json
  {
    "resultado": [
        {
            "id": 1,
            "preco": 200,
            "imagemUrl": "https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/01/tatuagens-realistas-desenhos-impressionantes-para-te-inspirar-960x658.jpg",
            "nomeTatuador": "Guilherme Cordeiro",
            "disponivel": 1,
            "idComprador": 0
        },
        {
            "id": 2,
            "preco": 250,
            "imagemUrl": "https://blog.pajaris.com.br/wp-content/uploads/2021/02/tatuagem-maori-26.jpg",
            "nomeTatuador": "Pedro Garrido",
            "disponivel": 1,
            "idComprador": 0
        } ...
    ],
    "error": false
  }
  ```

- **GET /tatuagens/{id}**

  <p> Retorna a imagem correspondente ao id.<p> 
  Esquema da resposta:

  ```json
  {
    "resultado": {
      "id": 2,
      "preco": 250,
      "imagemUrl": "https://blog.pajaris.com.br/wp-content/uploads/2021/02/tatuagem-maori-26.jpg",
      "nomeTatuador": "Pedro Garrido",
      "disponivel": 1,
      "idComprador": 0
    },
    "error": false
  }
  ```

- **POST /tatuagens**

  <p>Insere uma tatuagem na base de dados.<p>

  Esquema da requisição:

  ```json
  {
    {
    "preco": 250,
    "imagemUrl": "https://blog.pajaris.com.br/wp-content/uploads/2021/02/tatuagem-maori-26.jpg",
    "nomeTatuador": "Pedro Garrido",
    "disponivel": 1,
    "idComprador": 0
    }
  }
  ```

  Esquema da resposta

  ```json
  {
    "mensagem": "Tatuagem inserida com sucesso!",
    "error": false
  }
  ```

- **PUT /tatuagens/{id}**

  <p>Atualiza uma imagem de acordo com o id.<p>
  Esquema da requisição:

  ```json
  {
    "preco": 400,
    "imagemUrl": "https://blog.pajaris.com.br/wp-content/uploads/2021/02/tatuagem-maori-26.jpg",
    "nomeTatuador": "Guilherme Cordeiro",
    "disponivel": 1,
    "idComprador": 0
  }
  ```

  Esquema da resposta:

  ```json
  {
    "mensagem": "Tatuagem atualizada com sucesso!",
    "error": false
  }
  ```

- **PUT /tatuagens/clientes/{id}**

  <p>Atualiza uma imagem de acordo com o id.<p>
  Esquema da requisição:

  ```json
  {
    "disponivel": 1,
    "idComprador": 0
  }
  ```

  Esquema da resposta:

  ```json
  {
    "mensagem": "Tatuagem de id 1 atualizada com sucesso!",
    "error": false
  }
  ```

- **DELETE /tatuagens/{id}**

    <p>Deleta uma imagem de acordo com o id.<p> 
    Esquema da resposta:

  ```json
  {
    "mensagem": "Tatuagem deletada com sucesso!",
    "error": false
  }
  ```
## :book: Agendamentos

- **GET/agendamentos**

  <p>Retorna todos os agendamentos do banco.<p>
   Esquema da resposta:

  ```json
  {
    "resultado": [
        {
            "id": 3,
            "idCliente": 1,
            "tattoId": 3,
            "horario": 10
        },
        {
            "id": 4,
            "idCliente": 0,
            "tattoId": 15,
            "horario": 12
        }...

    ],
    "error": false
  }
  ```

- **GET /agendamentos/cliente/{id}**

  <p> Retorna o agendamento correspondente ao id do cliente.<p> 
  Esquema da resposta:

  ```json
  {
    "resultado": [
        {
            "id": 3,
            "idCliente": 0,
            "tattoId": 3,
            "horario": 10
        },
        {
            "id": 4,
            "idCliente": 0,
            "tattoId": 15,
            "horario": 12
        }...

    ],
    "error": false
  }
  ```

- **GET /agendamentos/tatto/{id}**

  <p> Retorna o agendamento correspondente ao id da tatto.<p> 
  Esquema da resposta:

  ```json
  {
    "resultado": [
        {
            "id": 3,
            "idCliente": 0,
            "tattoId": 3,
            "horario": 10
        },
        {
            "id": 4,
            "idCliente": 10,
            "tattoId": 3,
            "horario": 12
        }...

    ],
    "error": false
  }
  ```

- **GET /agendamentos/horario/{id}**

  <p> Retorna o agendamento correspondente ao horario de agendamento da tatto.<p> 
  Esquema da resposta:

  ```json
  {
    "resultado": [
      {
        "id": 3,
        "idCliente": 0,
        "tattoId": 3,
        "horario": 10
      }
    ],
    "error": false
  }
  ```

- **POST /agendamentos**

  <p>Insere um agendamento no banco de dados.<p>

  Esquema da requisição:

  ```json
  {
    "idCliente": 0,
    "tattoId": 1,
    "horario": 17
  }
  ```

  Esquema da resposta

  ```json
  {
    "mensagem": "Agendamento inserido com sucesso!",
    "error": false
  }
  ```

- **PUT /agendamentos/{id}**

  <p>Atualiza um agendamento de acordo com o id do agendamento.<p>
  Esquema da requisição:

  ```json
  {
    "idCliente": 0,
    "tattoId": 1,
    "horario": 22
  }
  ```

  Esquema da resposta:

  ```json
  {
    "mensagem": "Agendamento atualizado com sucesso!",
    "error": false
  }
  ```


- **DELETE /agendamentos/{id}**

    <p>Deleta um agendamento de acordo com o id do agendamento.<p> 
    Esquema da resposta:

  ```json
  {
    "mensagem": "Agendamento deletado com sucesso!",
    "error": false
  }
  ```

## Time de desenvolvimento original

  - [Alonso Estevam](https://www.linkedin.com/in/alonso-estevam/)
  - [Beatriz Mioranza](https://www.linkedin.com/in/beatrizmioranza/)
  - [Erika Rodrigues](https://www.linkedin.com/in/erikatav-rodrigues/)
  - [Josiane Rocha](https://www.linkedin.com/in/josiane-r-s-lima-santos/)
  - [Pedro Garrido](https://www.linkedin.com/in/pedro-garrido-1a8482205/)
  - [Rômulo Miranda](https://www.linkedin.com/in/romulo-omiranda/)

  ## Time de desenvolvimento atual

  - [Edson Vieira](https://github.com/Edson-7728)
  - [Guilherme Cordeiro](https://github.com/Dev-DaMata)
  - [Igor Santos](https://github.com/igorsans)
  - [Pedro Garrido](https://www.linkedin.com/in/pedro-garrido-1a8482205/)
