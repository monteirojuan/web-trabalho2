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
        let destino = await db.Destino.findOne({
            where: { id: req.params.id }
        })
        res.json(destino)
    } catch {
        res.status(500)
        res.send('Internal Server Error')
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
