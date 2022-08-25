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
      const response = await dao.cadastrarCliente(body)
      res.status(201).json(response)
    } catch (e) {
      res.status(400).json({
        "msg" : e.message,
        "erro" : "true"
      })
    }
  },

  atualizarCliente: async (req, res) => {
    const body = req.body
    const id = req.params.id
    try {
      const newUser = await clienteM.updateCliente(id, body)
      res.status(200).json(newUser)
    } catch (e) {
      res.status(500).json({
       "msg" : e.message,
       "erro" : "true"
      })
    }
  },

  deletarCliente : async (req, res) => {
    const id = req.params.id
    try {
      const result = await clienteM.deleteCliente(id)
      res.status(200).json(result)
    } catch (e) {
      res.status(e.status).json({
        "msg": e.message,
        "erro": true
      })
    }
  }
  
};

export default clienteController;
