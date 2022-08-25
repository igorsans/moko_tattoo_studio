import agendamentoModel from "../model/agendamentos-model.js";
import dao from "../DAO/agendamento-dao.js";

const agendamentoController = {
  listarAgendamentos: async (req, res) => {
    try {
      const response = await dao.listarAgendamentos();
      res.status(response.status).json(response.dados);
    } catch (e) {
      res.status(e.status).json(e.dados);
    }
  },
  listarAgendamentoCliente: async (req, res) => {
    const id = req.params.id;
    try {
      const response = await dao.listarAgendamentoCliente(id);
      res.status(response.status).json(response.dados);
    } catch (e) {
      res.status(e.status).json(e.dados);
    }
  },

  listarAgendamentoTatto: async (req, res) => {
    const id = req.params.id;
    try {
      const response = await dao.listarAgendamentoTatto(id);
      res.status(response.status).json(response.dados);
    } catch (e) {
      res.status(e.status).json(e.dados);
    }
  },
  listarAgendamentoHorario: async (req, res) => {
    const id = req.params.id;
    try {
      const response = await dao.listarAgendamentoHorario(id);
      res.status(response.status).json(response.dados);
    } catch (e) {
      res.status(e.status).json(e.dados);
    }
  },

  cadastrarAgendamento: async (req, res) => {
    const body = req.body;
    try {
      const dados = agendamentoModel.modelar(body);
      const response = await dao.cadastrarAgendamento(dados);
      res.status(response.status).json(response.dados);
    } catch (e) {
      res.status(e.status).json(e.dados);
    }
  },

  atualizarAgendamento: async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    try {
      const dados = agendamentoModel.modelar(body);
      const response = await dao.atualizarAgendamento(id, dados);
      res.status(response.status).json(response.dados);
    } catch (e) {
      res.status(e.status).json(e.dados);
    }
  },

  deletarAgendamento: async (req, res) => {
    const id = req.params.id;
    try {
      await dao.verExistencia(id)
      const response = await dao.deletarAgendamento(id);
      res.status(response.status).json(response.dados);
    } catch (e) {
      res.status(e.status).json(e.dados);
    }
  },
};

export default agendamentoController;
