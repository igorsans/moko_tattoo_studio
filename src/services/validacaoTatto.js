import ErrorModel from "../model/erros-model.js";

const validacao = {
  valida: (preco, imagemUrl, nomeTatuador, disponivel) => {
    if (
      preco.length == 0 ||
      imagemUrl.length == 0 ||
      nomeTatuador.length == 0 ||
      disponivel.length == 0
    ) {
      throw ErrorModel("Preencha todos os campos", true, 400);
    }
  },
};
export default validacao;
