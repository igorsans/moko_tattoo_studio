import express from 'express';
import clientes from './clientesRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send({titulo: "Moko Tattoo Studio"})
    })
  
    app.use(
      express.json(),
      clientes
    )
  }
  
  export default routes