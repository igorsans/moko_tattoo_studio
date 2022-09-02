import validacao from '../services/validate.js'

const clientesM = {
    model: (obj)=>{
        return {
            nome: obj.nome,
            sobrenome: obj.sobrenome,
	        telefone: obj.telefone,
	        dataNascimento: obj.dataNascimento,
	        email: obj.email,
            senha: obj.senha
        }
    },
    modelar: async (obj)=>{
        try {
            const criaCliente = clientesM.model(obj)
            

            return criaCliente
        } catch (error) {
            throw error
        }
    }

} 


export default clientesM