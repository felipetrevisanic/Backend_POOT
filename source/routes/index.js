import express from "express";
import perguntas from './PerguntasRoute.js'


const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "funcionando"})
    })

    app.use(
        express.json(),
        perguntas
    )
}

export default routes