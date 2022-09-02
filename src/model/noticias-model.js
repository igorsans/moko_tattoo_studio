import validacao from "../services/ValidacaoNoticia.js"

const noticiasM = {
    model: (obj)=>{
        return{
            urlImagem: obj.urlImagem,
            descricao: obj.descricao,
            titulo: obj.titulo
        }
    },
    modelar: async (obj)=> {
        try{
            const criaNoticia = noticiasM.model(obj)
            validacao.validaNoticia(...Object.values(criaNoticia))

            return criaNoticia
        }catch (error){
            throw error
        }
    }
}

export default noticiasM