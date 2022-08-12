import tatuadoresModel from "../model/tatuadores-model.js";

const tatuadoresController = {

  listarTatuadores: async (req, res) => {
    try {
      const resposta = await tatuadoresModel.listarTatuadores()
      res.status(200).json({"Pessoas tatuadoras": resposta});
    } catch (e) {
      res.status(500).json({
        "mensagem": e.message,
        "erro": true
      });
    }
  },

  listarTatuador: async (req, res) => {
    try {
      const id = req.params.id
      const resposta = await tatuadoresModel.listarTatuador(id)
      res.status(200).json(resposta);
    } catch (e) {
      res.status(404).json({
        "mensagem": e.message,
        "erro": true
      })
    }
  },

  criarTatuador: async (req, res) => {
    const body = req.body;
    try {
      const insereTatuador = tatuadoresModel(body.nome, body.telefone)
      // colocar a validação aqui
      const novoTatuador = await tatuadoresDAO.criarTatuador(insereTatuador)
      res.status(201).json({
        "msg": `Pessoa tatuadora ${body.nome} inserida com sucesso`,
        "Pessoa tatuadora": novoTatuador
      })

    } catch (e) {
      res.status(404).json(e.message);
    }
  },

  atualizarTatuador: async (req, res) => {
    const body = req.body
    const id = req.params.id
    try {
      const criaTatuador = tatuadoresModel(body.nome, body.telefone)
      // valida.validaUser(...Object.values(criaUsuario))
      const novoTatuador = await tatuadoresDAO.atualizarTatuador(id, criaTatuador)
      res.json({
        "msg": `Pessoa tatuadora ${body.nome}, com id ${id}, atualizada com sucesso`,
        "Pessoa tatuadora": novoTatuador
      })

    } catch (e) {
      res.json(e.message)
    }
  },

  deletarTatuador : async (req, res) => {
    const id = req.params.id
    try {
      await tatuadoresDAO.deletarTatuador(id)
      res.json({
        "msg": `Pessoa tatuadora com ${id} deletada com sucesso!`
      })
    } catch (e) {
      res.json({
        "msg": e.message
      })
    }
  }

}
export default tatuadoresController