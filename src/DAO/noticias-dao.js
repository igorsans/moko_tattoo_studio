import db from "../database/database.js";
import ErrorModel from "../model/erros-model.js";
const dao = {

    listarNoticia : (id) => {
        const query = `SELECT * FROM NOTICIAS WHERE id = ?`
        return new Promise((resolve, reject) => {
            db.get(query, id, (error, row) => {
                if (error) {
                    reject( 
                        ErrorModel('Server internal Error', true, 500)
                    );
                } else if (!row) {
                    reject(
                        ErrorModel('Noticia não encontrado!', true, 404)
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
            })
        })
    },

    listarNoticias: () =>{
        const query = `SELECT * FROM NOTICIAS`
        return new Promise((resolve, reject) => {
            db.all(query, (error, row) => {
                if(error)
                reject (ErrorModel(error, true, 500))
                    else if(!row) ErrorModel("Banco de dados vazio", true, 404)
                else
                    resolve({
                        resposta: {
                            resultado: row, 
                            error: false
                        },
                        status: 200
                    })
            })
        })
    },

    cadastrarNoticia: (noticia) =>{
        const query = `INSERT INTO NOTICIAS (URLIMAGEM, DESCRICAO, TITULO)
        VALUES (?, ?, ?)`

        return new Promise((resolve, reject) => {
            db.run(query, ...Object.values(noticia), (error) => {
                if(error)
                    reject (ErrorModel(error, true, 500))
                else
                    resolve({
                        resposta: {
                            resultado: "Noticia cadastrada com sucesso", 
                            error: false
                        },
                        status: 200
                    })
            })
        })
    },

    atualizaNoticia: (id, novo) => {
        const query = `UPDATE NOTICIAS SET urlImagem = ?, descricao = ?, titulo = ? WHERE id = ?`
    
        return new Promise((resolve, reject) => {
                db.run(query, ...Object.values(novo), id, (error) => {
                    if(error)
                    reject (ErrorModel(error, true, 500))
                    else
                        resolve({
                            resposta: {
                                resultado: "Noticia atualizada com sucesso", 
                                error: false
                            },
                            status: 200
                        })
                }
            )
        })
    },

    deletarNoticia: (id) =>{
        const query = `DELETE FROM NOTICIAS WHERE id = ?`

        return new Promise((resolve, reject) => {
            db.run(query, id, (error, row) => {
                if(error)
                reject (ErrorModel(error, true, 500))
                    else
                        resolve({
                            resposta: {
                                resultado: "Noticia deletadA com sucesso", 
                                error: false
                            },
                            status: 200
                        })
                })
        })
    }

}


export default dao