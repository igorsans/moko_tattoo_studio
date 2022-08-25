import express from "express";
import tatuagensController from '../controller/tatuagens-controller.js'

const router = express.Router();

router
    .get("/tatuagens", tatuagensController.imagensTattoo)
    .get("/tatuagens/:id", tatuagensController.imagemTattoo)
    .get("/tatuagens/cliente/:id", tatuagensController.historicoCliente)
    .post("/tatuagens", tatuagensController.guardarImagens)
    .put("/tatuagens/:id", tatuagensController.alterarImagens)
    .put("/tatuagens/cliente/:id" , tatuagensController.ajustarComprador)
    .delete("/tatuagens/:id", tatuagensController.deletarImagens)


export default router;