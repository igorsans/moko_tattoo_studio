import tatuagensModel from "../model/tatuagens-model.js";
import tatuagensDAO from "../DAO/tatuagens-dao.js";

const tatuagensController = {
  imagensTattoo: async (req, res) => {
    try {
      const resposta = await tatuagensDAO.verTatuagens();
      res.status(resposta.status).json(resposta.dados);
    } catch (error) {
      res.status(error.status).json(error.dados);
    }
  },

  imagemTattoo: async (req, res) => {
    try {
      const resposta = await tatuagensDAO.verTatuagem(req.params.id)
      res.status(resposta.status).json(resposta.dados);
    } catch (error) {
      res.status(error.status).json(error.dados);
    }
  },

  historicoCliente: async (req, res) => {
    try {
      const resposta = await tatuagensDAO.verHistoricoCliente(req.params.id)
      res.status(resposta.status).json(resposta.dados)
    } catch (error) {
      res.status(error.status).json(error.dados)
    }
  },


  guardarImagens: async (req, res) => {
    const body = req.body;
    try {
      const dados = await tatuagensModel.modelar(body);
      const resposta = await tatuagensDAO.criarTatuagem(dados)
      res.status(resposta.status).json(resposta.dados);
    } catch (error) {
      res.status(error.status).json(error.dados);
    }
  },

  alterarImagens: async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    try {
      await tatuagensDAO.verTatuagem(id);
      const dados = await tatuagensModel.modelar(body);
      const resposta = await tatuagensDAO.ajustaTatuagem(id, dados);
      res.status(resposta.status).json(resposta.dados);
    } catch (error) {
      res.status(error.status).json(error.dados);
    }
  },

  ajustarComprador: async (req,res) => {
    const body = req.body;
    const id = req.params.id
    try {
      await tatuagensDAO.verTatuagem(id);
      const resposta = await tatuagensDAO.ajustaTatuagemDisponivel(id, body);
      res.status(resposta.status).json(resposta.dados);
    } catch (error) {
      res.status(error.status).json(error.dados);
    }
  },

  deletarImagens: async (req, res) => {
    const id = req.params.id;
    try {
      await tatuagensDAO.verTatuagem(id);
      const resposta = await tatuagensDAO.deletarTatuagem(id);
      res.status(resposta.status).json(resposta.dados);
    } catch (error) {
      res.status(error.status).json(error.dados);
    }
  },
};

export default tatuagensController;
