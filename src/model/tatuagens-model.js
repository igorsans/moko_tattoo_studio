import validaCampo from "../services/validacaoTatto.js";
import tatuagensDAO from "../DAO/tatuagens-dao.js";

const tatuagensModel = {
    model: (obj) => {
        return {
            preco: obj.preco,
            imagemUrl: obj.imagemUrl,
            nomeTatuador: obj.nomeTatuador,
            disponivel: obj.disponivel
        }
    },

    modelar: async (obj) => {
        try {
            const criaTattoo = tatuagensModel.model(obj);
            validaCampo.valida(...Object.values(criaTattoo));
            return criaTattoo
        } catch (error) {
            throw error
        }
    },

    atualizaImagem: async (id, alteraImagem) => {
        try {
            await tatuagensDAO.verTatuagem(id);
            validaCampo.valida(...Object.values(alteraImagem));
            return
        } catch (error) {
            throw error
        }
    },

    deletaImagem: async (id) => {
        try {
            const mensagem = await tatuagensDAO.deletarTatuagem(id);
            return mensagem
        } catch (error) {
            throw error
        }
    },


};

export default tatuagensModel;
