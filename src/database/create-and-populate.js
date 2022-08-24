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
            "telefone" varchar(12)
            )`,
  },
  {
    entidade: "Tabela Tatuagens Criada",
    query: `CREATE TABLE IF NOT EXISTS "TATUAGENS" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "preco" INT,
            "imagemUrl" varchar(255),
            "nomeTatuador" varchar(64),
            "disponivel" boolean
            )`,
  },
];

const Population = [
  {
    entidade: "Tabela Clientes Populada",
    query: `INSERT INTO CLIENTES (NOME, TELEFONE)
    VALUES 
        ('Eugênio Oliveira', '21-994785122'),
        ('Olívia Ribeiro', '21-988796335'),
        ('Mirtes Faria Lima', '21-974659987');`,
  },
  {
    entidade: "Tabela Tatuagens Populada",
    query: `INSERT INTO TATUAGENS (preco, imagemUrl, nomeTatuador, disponivel)
    VALUES 
        (200,'https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/01/tatuagens-realistas-desenhos-impressionantes-para-te-inspirar-960x658.jpg', "GuidoBeck", true),
        (250, 'https://blog.pajaris.com.br/wp-content/uploads/2021/02/tatuagem-maori-26.jpg', "PedroBeck", true),
        (300, 'https://www.minhatatuagem.com/wp-content/uploads/2020/01/tatuagem-oldschool-40.jpg', "IgroBeck", false),
        (400, 'https://i.pinimg.com/736x/2a/68/19/2a6819b4edd68b25de51243e7f8bb5db.jpg', "EdoBeck" , true),
        (150, 'https://i.pinimg.com/736x/29/f3/8f/29f38ff01fea483e5807da7c532e3163.jpg', "BobBeck", true);`,
  },
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
