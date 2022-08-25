import validacao from '../services/validate.js'
import dao from "../DAO/clientes-dao.js";

const clientesM = {
    model: (obj)=>{
        return {
            nome: obj.nome,
            sobrenome: obj.sobrenome,
	        telefone: obj.telefone,
	        dataNascimento: obj.dataNascimento,
	        email: obj.email
        }
    },
    modelar: async (obj)=>{
        try {
            const criaCliente = clientesM.model(obj)
            validacao.validaUser(...Object.values(criaCliente))

            return criaCliente
        } catch (error) {
            throw error
        }
    },




    getClienteById: async (id) => {
        try {
            validacao.validaId(id)
                        
            if (!dados) throw new Error("Não foi possível encontrar o Cliente")
            return dados
        } catch (error) {
            throw error
        }
    },
    
    insereCliente: async (usuario) => {
        try {
            validacao.validaUser(...Object.values(usuario))
            
            return response
        } catch (error) {
            throw error
        }
    },

    updateCliente: async (id, usuario) => {
        try {

            validacao.validaUser(...Object.values(usuario))
            const mensagem = await dao.atualizarCliente(id, usuario)
            return mensagem
        } catch (error) {
            throw error
        }
    },

    deleteCliente: async (id) => {
        try {
            await dao.listarCliente(id)
            const dados = await dao.deletarCliente(id)
            if (!dados) throw new Error("Não foi possível encontrar o Cliente")
            return dados
        } catch (error) {
            throw error
        }
    }


} 


export default clientesM