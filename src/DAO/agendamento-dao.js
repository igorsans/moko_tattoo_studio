import db from "../database/database.js";
import ErrorModel from "../model/erros-model.js";

const dao = {
  verExistencia: (id) => {
    const pegaTattoo = `SELECT * FROM AGENDAMENTO WHERE id = ?`;
    return new Promise((resolve, reject) => {
      db.all(pegaTattoo, id, (error, row) => {
        if (error) {
          reject(ErrorModel("Server internal Error", true, 500));
        } else if (row.length == 0) {
          reject(ErrorModel("Agendamento não encontrado", true, 404));
        } else {
          resolve({
            dados: {
              resultado: row,
              error: false,
            },
            status: 200,
          });
        }
      });
    });
  },
  listarAgendamentos: () => {
    const query = "SELECT * FROM AGENDAMENTO";
    return new Promise((resolve, reject) => {
      db.all(query, (error, row) => {
        if (error) {
          reject(ErrorModel("Server internal Error", true, 500));
        } else if (row.length == 0) {
          reject(ErrorModel("Banco de dados vazio", true, 404));
        } else {
          resolve({
            dados: {
              resultado: row,
              error: false,
            },
            status: 200,
          });
        }
      });
    });
  },
  listarAgendamentoCliente: (id) => {
    const pegaTattoo = `SELECT * FROM AGENDAMENTO WHERE idCliente = ?`;
    return new Promise((resolve, reject) => {
      db.all(pegaTattoo, id, (error, row) => {
        if (error) {
          reject(ErrorModel("Server internal Error", true, 500));
        } else if (row.length == 0) {
          reject(ErrorModel("Agendamento não encontrado", true, 404));
        } else {
          resolve({
            dados: {
              resultado: row,
              error: false,
            },
            status: 200,
          });
        }
      });
    });
  },
  listarAgendamentoTatto: (id) => {
    const pegaTattoo = `SELECT * FROM AGENDAMENTO WHERE tattoId = ?`;
    return new Promise((resolve, reject) => {
      db.all(pegaTattoo, id, (error, row) => {
        if (error) {
          reject(ErrorModel("Server internal Error", true, 500));
        } else if (row.length == 0) {
          reject(ErrorModel("Agendamento não encontrado", true, 404));
        } else {
          resolve({
            dados: {
              resultado: row,
              error: false,
            },
            status: 200,
          });
        }
      });
    });
  },
  listarAgendamentoHorario: (id) => {
    const pegaTattoo = `SELECT * FROM AGENDAMENTO WHERE horario = ?`;
    return new Promise((resolve, reject) => {
      db.all(pegaTattoo, id, (error, row) => {
        if (error) {
          reject(ErrorModel("Server internal Error", true, 500));
        } else if (row.length == 0) {
          reject(ErrorModel("Agendamento não encontrado", true, 404));
        } else {
          resolve({
            dados: {
              resultado: row,
              error: false,
            },
            status: 200,
          });
        }
      });
    });
  },
  cadastrarAgendamento: (obj) => {
    const criaTattoo = `INSERT INTO AGENDAMENTO (idCliente, tattoId, horario) VALUES (?, ?, ?)`;

    return new Promise((resolve, reject) => {
      db.run(criaTattoo, ...Object.values(obj), (error) => {
        if (error) {
          reject(ErrorModel("Server internal Error", true, 500));
        } else {
          resolve({
            dados: {
              mensagem: "Agendamento inserido com sucesso!",
              error: false,
            },
            status: 200,
          });
        }
      });
    });
  },
  atualizarAgendamento: (id, body) => {
    const ajustaTattoo = `UPDATE AGENDAMENTO SET idCliente  = ?, tattoId = ?, horario = ? WHERE id= ?`;
    return new Promise((resolve, reject) => {
      db.run(ajustaTattoo, ...Object.values(body), id, (error) => {
        if (error) {
          reject(ErrorModel("Server internal Error", true, 500));
        } else {
          resolve({
            dados: {
              mensagem: "Agendamento atualizado com sucesso!",
              error: false,
            },
            status: 200,
          });
        }
      });
    });
  },
  deletarAgendamento: (id) => {
    const deletaTattoo = `DELETE FROM AGENDAMENTO WHERE id = ?`;
    return new Promise((resolve, reject) => {
      db.run(deletaTattoo, id, (error) => {
        if (error) {
          reject(ErrorModel("Server internal Error", true, 500));
        } else {
          resolve({
            dados: {
              mensagem: "Agendamento deletado com sucesso!",
              error: false,
            },
            status: 200,
          });
        }
      });
    });
  },
};
export default dao;
