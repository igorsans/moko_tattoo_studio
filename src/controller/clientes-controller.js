import clienteM from "../model/clientes-model.js"
import dao from "../DAO/clientes-dao.js";

const clienteController = {

  listarClientes: async (req, res) => {
    try {
      const response = await dao.listarClientes()
      res.status(response.status).json(response.resposta);
    } catch (e) {
      res.status(e.status).json(e.dados)
    }
  },

  listarCliente: async (req, res) => {
    const id = req.params.id
    try {
      const response = await dao.listarCliente(id)
      res.status(response.status).json(response.dados);
    } catch (e) {
      res.status(e.status).json(e.dados)
    }
  },

  cadastrarCliente: async (req, res) => {
    const body = req.body;
    try {
      const dados = await clienteM.modelar(body)
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
