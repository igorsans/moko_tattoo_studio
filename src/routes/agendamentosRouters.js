import express from "express";
import agendamentoController from '../controller/agendamento-controller.js'

const router = express.Router();

router
    .get("/agendamentos", agendamentoController.listarAgendamentos)
    .get("/agendamentos/cliente/:id", agendamentoController.listarAgendamentoCliente)
    .get("/agendamentos/tatto/:id", agendamentoController.listarAgendamentoTatto)
    .get("/agendamentos/horario/:id", agendamentoController.listarAgendamentoHorario)
    .post("/agendamentos", agendamentoController.cadastrarAgendamento)
    .put("/agendamentos/:id", agendamentoController.atualizarAgendamento)
    .delete("/agendamentos/:id", agendamentoController.deletarAgendamento)


export default router;