import express from "express";
import noticiasController from "../controller/noticias-controller.js"

const router = express.Router();

router
    .get("/noticias", noticiasController.listarNoticias)
    .get("/noticias/:id", noticiasController.listarNoticia)
    .post("/noticias", noticiasController.cadastrarNoticia)
    .put("/noticias/:id", noticiasController.atualizaNoticia)
    .delete("/noticias/:id", noticiasController.deletarNoticia)


    export default router