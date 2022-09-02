import ErrorModel from "../model/erros-model.js"

const validacao = {
    validaNoticia: (urlImagem, descricao, titulo) => {
        if(
            urlImagem.length == 0 ||
            descricao.length == 0 ||
            titulo.length == 0
        ){
            throw ErrorModel("Preencha todos os campos", true, 400);
        }
    },
    validaId : (id)=> {if(isNaN(id)) ErrorModel("id não é um numero", true, 400)}
}; 
export default validacao