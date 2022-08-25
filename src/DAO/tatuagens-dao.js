import db from "../database/database.js";
import ErrorModel from "../model/erros-model.js";
const dao = {
    verTatuagens: () => {
        const pegaTattoo = "SELECT * FROM TATUAGENS";
        return new Promise((resolve, reject) => {
            db.all(pegaTattoo, (error, row) => {
                if (error) {
                    reject( 
                        ErrorModel('Server internal Error', true, 500)
                    );
                } else if (!row) {
                    reject(
                        ErrorModel('Banco de dados vazio', true, 404)
                    );
                } else {
                    resolve({
                        dados: {
                            resultado: row,
                            error: false
                        },
                        status: 200
                    });
                }
            });
        });
    },

    verTatuagem: (id) => {
        const pegaTattoo = `SELECT * FROM TATUAGENS WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.get(pegaTattoo, id, (error, row) => {
                if (error) {
                    reject(
                        ErrorModel('Server internal Error', true, 500)
                        );
                } else if (!row) {
                    reject(
                        ErrorModel('Tattuagem não encontrada', true, 404)
                    );
                } else {
                    resolve({
                        dados: {
                            resultado: row,
                            error: false
                        },
                        status: 200
                    });
                }
            });
        });
    },
    
    verHistoricoCliente: (id) => {
        const pegaTattoo = `SELECT * FROM TATUAGENS WHERE idComprador = ?`;
        return new Promise((resolve, reject) => {
            db.all(pegaTattoo, id, (error, row) => {
                if (error) {
                    reject(
                        ErrorModel('Server internal Error', true, 500)
                        );
                } else if (!row) {
                    reject(
                        ErrorModel('Tattuagem não encontrada', true, 404)
                    );
                } else {
                    resolve({
                        dados: {
                            resultado: row,
                            error: false
                        },
                        status: 200
                    });
                }
            });
        });
    },

    criarTatuagem: (obj) => {
        const criaTattoo = `INSERT INTO TATUAGENS (preco, imagemUrl, nomeTatuador, disponivel, idComprador) VALUES (?, ?, ?, ?, ?)`;

        return new Promise((resolve, reject) => {
            db.run(criaTattoo, ...Object.values(obj), (error) => {
                if (error) {
                    reject(
                        ErrorModel('Server internal Error', true, 500)
                    );
                } else {
                    resolve({
                        dados: {
                            mensagem: "Tatuagem inserida com sucesso!",
                            error: false
                        },
                        status: 200,
                    });
                }
            });
        });
    },


    ajustaTatuagem: (id, body) => {
        const ajustaTattoo = `UPDATE TATUAGENS SET preco = ?, imagemUrl = ?, nomeTatuador = ?, disponivel  = ?, idComprador= ? WHERE id= ?`;
        return new Promise((resolve, reject) => {
            db.run(ajustaTattoo, ...Object.values(body), id, (error) => {
                if (error) {
                    console.log(error)
                    reject(
                        ErrorModel('Server internal Error', true, 500)
                    );
                } else {
                    resolve({
                        dados: {
                            mensagem: "Tatuagem atualizada com sucesso!",
                            error: false
                        },
                        status: 200,
                    });
                }
            });
        });
    },

    ajustaTatuagemDisponivel: (id, body) => {
        const ajustaTattoo = `UPDATE TATUAGENS SET disponivel  = ?, idComprador = ? WHERE id= ?`;
        return new Promise((resolve, reject) => {
            db.run(ajustaTattoo, ...Object.values(body), id, (error) => {
                if (error) {
                    console.log(error)
                    reject(
                        ErrorModel('Server internal Error', true, 500)
                    );
                } else {
                    resolve({
                        dados: {
                            mensagem: `Tatuagem de id ${id} atualizada com sucesso!`,
                            error: false
                        },
                        status: 200,
                    });
                }
            });
        });
    },



    deletarTatuagem: (id) => {
        const deletaTattoo = `DELETE FROM TATUAGENS WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.run(deletaTattoo, id, (error) => {
                if (error) {
                    reject(
                        ErrorModel('Server internal Error', true, 500)
                    );
                } else {
                    resolve({
                        dados: {
                            mensagem: "Tatuagem deletada com sucesso!",
                            error: false
                        },
                        status: 200,
                    });
                }
            });
        });
    },
};

export default dao;
