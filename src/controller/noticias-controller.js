import noticiasM from "../model/noticias-model.js"
import dao from "../DAO/noticias-dao.js";

const noticiasController = {

    listarNoticias: async (req, res) => {
        try{
            const response = await dao.listarNoticias()
            res.status(response.status).json(response.resposta);
        }catch (e){
            res.status(e.status).json(e.dados)
        }
    },

    listarNoticia: async (req, res) => {
        const id = req.params.id
        try{
            const response = await dao.listarNoticia(id)
            res.status(response.status).json(response.dados)
        } catch (e){
            res.status(e.status).json(e.dados)
        }
    },

    cadastrarNoticia: async (req, res) => {
        const body = req.body;
        try{
            const dados = await noticiasM.modelar(body)
            const response = await dao.cadastrarNoticia(dados)
            res.status(response.status).json(response.resposta)
        }catch (e){
            res.status(e.status).json(e.dados)
        }
    },

    atualizaNoticia: async (req, res)=>{
        const body = req.body
        const id = req.params.id
        try{
            await dao.listarNoticias(id)
            const dados = await noticiasM.modelar(body)
            const response = await dao.atualizaNoticia(id, dados)
            res.status(response.status).json(response.resposta)
        }catch (e){
            res.status(e.status).json(e.dados)
        }
    },

    deletarNoticia: async (req, res) =>{
        const id = req.params.id
        try{
            await dao.listarNoticias(id)
            const response = await dao.deletarNoticia(id)
            res.status(response.status).json(response.resposta)
        } catch(e){
            res.status(e.status).json(e.dados)
        }
    }

};

export default noticiasController;