import validaCampo from "../services/validacaoTatto.js";

const tatuagensModel = {
    model: (obj) => {
        return {
            preco: obj.preco,
            imagemUrl: obj.imagemUrl,
            nomeTatuador: obj.nomeTatuador,
            disponivel: obj.disponivel,
            idComprador: obj.idComprador
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
    }

};

export default tatuagensModel;
