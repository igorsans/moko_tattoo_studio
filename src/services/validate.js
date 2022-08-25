import ErrorModel from "../model/erros-model.js";

const validacao = {
    validaUser : (nome, sobrenome, tel, dataNascimento, email) => {
      if (
        nome.length == 0 ||
        sobrenome.length==0 ||
        tel.length == 0 ||
        dataNascimento.length == 0 ||
        email.length == 0 

      ) {
        throw ErrorModel("Preencha todos os campos", true, 400);
      }
    },
    validaId : (id) => {if (isNaN(id)) ErrorModel("id não é um numero", true, 400) }
  };
  export default validacao;
  

    
