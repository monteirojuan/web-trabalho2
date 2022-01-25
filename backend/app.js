require("sucrase/register");

import express from 'express'
import db from './models'

const app = express()
const port = 3000


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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
