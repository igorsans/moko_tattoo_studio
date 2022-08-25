import db from "../database/database.js"
import ErrorModel from "../model/erros-model.js";
const dao = {

    listarCliente : (id) => {
        const query = "SELECT * FROM CLIENTES WHERE id = ?"
        return new Promise((resolve, reject) => {
            db.get(query, id, (error,row) =>  {
                if (error) {
                    reject( 
                        ErrorModel('Server internal Error', true, 500)
                    );
                } else if (!row) {
                    reject(
                        ErrorModel('Usuario não encontrado', true, 404)
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

    listarClientes : () => {
        const query = `SELECT * FROM CLIENTES`
        return new Promise((resolve, reject) => {
            db.all(query, (error,row) => {
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

    cadastrarCliente : (usuario) => {
        const query = `INSERT INTO CLIENTES (NOME, SOBRENOME, TELEFONE, DATANASCIMENTO, EMAIL)
        VALUES (?, ?, ?, ?, ?)`

        return new Promise((resolve, reject) => {
            db.run(query, ...Object.values(usuario), (error) => {
                if(error)
                    reject (ErrorModel(error, true, 500))
                else
                    resolve({
                        resposta: {
                            resultado: "usuario cadastrado com sucesso", 
                            error: false
                        },
                        status: 200
                    })
            })
        })
    },

    atualizarCliente : (id, novo) => {
        const query = `UPDATE CLIENTES SET nome = ?, sobrenome = ?, telefone = ?, dataNascimento = ?, email = ? WHERE id = ?`

        return new Promise((resolve, reject)=>{
            db.run(query, ...Object.values(novo), id, (error) => {
                    if(error)
                    reject (ErrorModel(error, true, 500))
                    else
                        resolve({
                            resposta: {
                                resultado: "usuario atualizado com sucesso", 
                                error: false
                            },
                            status: 200
                        })
                }
            )
        })  
    },

    deletarCliente : (id) => {
        const query = `DELETE FROM CLIENTES WHERE id = ?`

        return new Promise((resolve, reject) => {
            db.run(query, id, (error, row) => {
                if(error)
                reject (ErrorModel(error, true, 500))
                    else
                        resolve({
                            resposta: {
                                resultado: "usuario deletado com sucesso", 
                                error: false
                            },
                            status: 200
                        })
                })
        })
    }

}


export default dao