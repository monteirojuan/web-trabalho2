require("sucrase/register");

import express from 'express'
import db from './models'

const app = express()
const port = 3000

app.use(express.json())


app.get('/destinos', async (req, res) => {
    try {
        let destinos = await db.Destino.findAll()
        res.json({ destinos: destinos })
    } catch {
        res.status(500)
        res.send('Internal Server Error')
    }
})

app.get('/destino/:id', async (req, res) => {
    try {
        let destino = await db.Destino.findByPk(parseInt(req.params.id))
        res.json(destino)
    } catch {
        res.status(500)
        res.send('Internal Server Error')
    }
})

// RESERVAS

app.get('/reservas', async (req, res) => {
    try {
        let reservas = await db.Reserva.findAll()
        res.json({ reservas: reservas })
    } catch (e) {
        console.log(e)
        res.status(500)
        res.send('Internal Server Error')
    }
})

app.get('/reserva/:id', async (req, res) => {
    try {
        let reserva = await db.Reserva.findByPk(parseInt(req.params.id))
        res.json(reserva)
    } catch (e) {
        console.log(e)
        res.status(500)
        res.send('Internal Server Error')
    }
})

app.post('/reserva', async (req, res) => {
    try {
        let partida = new Date(req.body.partida),
            retorno = new Date(req.body.retorno)
        if (partida.getTime() >= retorno.getTime()) {
            throw new Error('Partida tem que ser menor que retorno.')
        }
        let destino = await db.Destino.findByPk(parseInt(req.body.id_destino))
        const reserva = await db.Reserva.create({
            DestinoId: destino.id,
            preco: destino.preco,
            partida: partida,
            retorno: retorno
        })
        res.json(reserva)
    } catch (e) {
        console.log(e)
        res.status(500)
        res.send('Internal Server Error')
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
