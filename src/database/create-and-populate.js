import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const DATABASE_SCHEMA = [
  {
    entidade: "Tabela Clientes Criada",
    query: `CREATE TABLE IF NOT EXISTS "CLIENTES" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "nome" varchar(64),
            "sobrenome" varchar(64),
            "telefone" varchar(12),
            "dataNascimento" varchar(15),
            "email" varchar(50)
            )`,
  },
  {
    entidade: "Tabela Tatuagens Criada",
    query: `CREATE TABLE IF NOT EXISTS "TATUAGENS" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "preco" INT,
            "imagemUrl" varchar(255),
            "nomeTatuador" varchar(64),
            "disponivel" boolean,
            "idComprador" int
            )`,
  },
  {
    entidade: "Tabela Agendamento Criada",
    query: `CREATE TABLE IF NOT EXISTS "AGENDAMENTO" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "idCliente" int,
            "tattoId" int,
            "horario" int
            )`,
  }
];

const Population = [
  {
    entidade: "Tabela Clientes Populada",
    query: `INSERT INTO CLIENTES (nome, sobrenome, telefone, dataNascimento, email)
    VALUES 
        ("Eugênio","Silva", "21-994785122", "25/02/1999", "Eugênio@gmail.com"),
        ("Olívia","pedro", "21-988796335", "29/08/2000", "Olivia@gmail.com"),
        ("Mirtes","silva", "21-974659987", "05/12/2006", "Mirtes@gmail.com");`,
  },
  {
    entidade: "Tabela Tatuagens Populada",
    query: `INSERT INTO TATUAGENS (preco, imagemUrl, nomeTatuador, disponivel, idComprador)
    VALUES 
        (200, 'https://i.pinimg.com/236x/44/c2/33/44c2338923adcd9d6d9b1276bb56ee70.jpg', "Guilherme Cordeiro", true, 0),
        (250, 'https://i.pinimg.com/550x/c4/bd/0a/c4bd0a0fa9a9c8265a6ae68a28d5bcd6.jpg', "Pedro Garrido", true, 0),
        (680, 'https://assets.theyou.com/public/thumbs/work_elements/51256/jpg/w1330/h1330/q80/51256/work_elements/September2021/blackgrey-anubis-tattoo-sketch-water.jpg', "Igor Santos", false, 0),
        (170, 'https://thypix.com/wp-content/uploads/2021/12/tatoo-drawings-for-sketching-thypix-158235106-700x700.jpg', "Igor Santos" , true, 1),
        (400, 'https://assets.theyou.com/public/thumbs/work_elements/7564/jpg/w1330/h1330/q80/7564/work_elements/November2020/tattoo-sketches-7564-water.jpg', "Guilherme Cordeiro", true , 0),
        (500, 'https://assets.theyou.com/public/thumbs/work_elements/7564/jpg/w1330/h1330/q80/7564/work_elements/November2020/tattoo-sketches-7564-water.jpg', "Edson Vieira", true , 0),
        (150, 'https://img.freepik.com/vetores-premium/cobra-de-arte-de-tatuagem-e-desenho-de-flores-e-esbocos-em-preto-e-branco_41532-988.jpg', "Pedro Garrido", true, 0),
        (300, 'https://img.freepik.com/vetores-premium/armas-de-arte-de-tatuagem-e-desenho-de-mao-de-flor-e-esboco_41532-415.jpg', "Guilherme Cordeiro", true, 0),
        (400, 'https://static.vecteezy.com/ti/vetor-gratis/p1/6006441-tatuagem-arte-coruja-e-flor-desenho-a-mao-esboco-preto-e-branco-vetor.jpg', "Pedro Garrido" ,true, 0),
        (150, 'https://i.pinimg.com/564x/d5/b5/4f/d5b54f3422bc0fd00f9a61ff7627ac53.jpg', "Pedro Garrido", false, 0),
        (300, 'https://assets.theyou.com/public/thumbs/work_elements/51554/jpg/w1330/h1330/q80/51554/work_elements/September2021/chicano-money-tattoo-sketch-water.jpg', "Igor Santos", false, 0),
        (250, 'https://i.pinimg.com/736x/8b/db/f5/8bdbf5784a1f12514aba9b06d3983cc5.jpg', "Guilherme Cordeiro", false, 0),
        (700, 'https://static.vecteezy.com/ti/vetor-gratis/p1/6006378-tatuagem-arte-dargao-mosca-desenho-a-mao-esboco-preto-e-branco-vetor.jpg', "Igor Santos", true, 0),
        (650, 'https://assets.theyou.com/public/thumbs/work_elements/51326/jpg/w1330/h1330/q80/51326/work_elements/September2021/tattoo-sketches-51326-water.jpg', "Edson Vieira", false , 0),
        (400, 'https://img3.stockfresh.com/files/f/fosin/m/78/6184205_stock-vector-zentangle-stylized-eagle-owl-sketch-for-tattoo-or-t-shirt.jpg', "Pedro Garrido", false, 0),
        (350, 'https://static.vecteezy.com/ti/vetor-gratis/p1/344476-tatuagem-de-sinal-de-campanha-a-mao-com-rock-and-roll-esboco-legal-gesto-fonte-da-velha-escola-moderna-e-illusstration-vetor.jpg', "Guilherme Cordeiro", false, 0),
        (150, 'https://cdn.shopify.com/s/files/1/0618/9642/5662/products/sketch-feather-fake-tattoo_1000x.jpg?v=1656002861' , "Edson Vieira", true, 0),
        (400, 'https://thumbs.dreamstime.com/b/desenho-e-esboço-da-mão-sereia-arte-tatuagem-preto-branco-com-linha-ilustração-isolada-no-fundo-141579717.jpg', "Igor Santos", false, 0),
        (500, 'https://assets.theyou.com/public/thumbs/work_elements/51273/jpg/w1330/h1330/q80/51273/work_elements/September2021/graphic-machine-gun-tattoo-sketch-water.jpg', "Edson Vieira", false, 0)
        `
  },
  {
    entidade: "Tabela Agendamento Populada",
    query: `INSERT INTO AGENDAMENTO (idCliente, tattoId, horario)
    VALUES 
        (0,1,12),
        (0,2,15),
        (0,3,10);`,
  }
  
];

function criaTabelas(...query) {
  query.forEach((query) => {
    db.all(query.query, (error) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log(query.entidade);
      }
    });
  });
}

db.serialize(() => {
  criaTabelas(...DATABASE_SCHEMA);
  criaTabelas(...Population);
});
