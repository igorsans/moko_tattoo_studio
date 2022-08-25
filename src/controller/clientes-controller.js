import clienteM from "../model/clientes-model.js"
import dao from "../DAO/clientes-dao.js";

const clienteController = {

  listarClientes: async (req, res) => {
    try {
      const dados = await dao.listarClientes()
      res.status(dados.status).json(dados.resposta);
    } catch (e) {
      res.status(400).json({
        "msg" : e.message,
        "erro" : "true"
      });
    }
  },

  listarCliente: async (req, res) => {
    const id = req.params.id
    try {
      const dados = await dao.listarCliente(id)
      res.status(dados.status).json(dados.retorno);
    } catch (e) {
      res.status(404).json({
        "msg" : e.message,
        "erro" : "true"
      });
    }
  },

  cadastrarCliente: async (req, res) => {
    const body = req.body;
    try {
      const dados = await clienteM.modelar(body)
      console.log("teste");
      const response = await dao.cadastrarCliente(dados)
      res.status(response.status).json(response.resposta)
    } catch (e) {
      res.status(e.status).json(e.dados)
    }
  },

  atualizarCliente: async (req, res) => {
    const body = req.body
    const id = req.params.id
    try {          
      await dao.listarCliente(id)
      const dados = await clienteM.modelar(body)
      const response = await  dao.atualizarCliente(id, dados)
      res.status(response.status).json(response.resposta)
    } catch (e) {
      res.status(e.status).json(e.dados)
    }
  },

  deletarCliente : async (req, res) => {
    const id = req.params.id
    try {
      await dao.listarCliente(id)
      const response = await dao.deletarCliente(id)
      res.status(response.status).json(response.resposta)
    } catch (e) {
      res.status(e.status).json(e.dados)
    }
  }
  
};

export default clienteController;
