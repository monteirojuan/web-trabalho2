require("sucrase/register");

import express from 'express'
import cors from 'cors'
import db from './models'

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())


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
        let reservas = await db.Reserva.findAll(
            {
                attributes: { exclude: ['DestinoId', 'PassageiroId', 'createdAt', 'updatedAt'] },
                include: [
                    {
                        model: db.Destino, as: 'destino',
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    },
                    {
                        model: db.Passageiro, as: 'passageiro',
                        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
                    }

                ],
            }
        )
        res.json({ reservas: reservas })
    } catch (e) {
        console.log(e)
        res.status(500)
        res.send('Internal Server Error')
    }
})

app.get('/reserva/:id', async (req, res) => {
    try {
        let reserva = await db.Reserva.findByPk(
            parseInt(req.params.id),
            {
                attributes: { exclude: ['DestinoId', 'PassageiroId', 'createdAt', 'updatedAt'] },
                include: [
                    {
                        model: db.Destino, as: 'destino',
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    },
                    {
                        model: db.Passageiro, as: 'passageiro',
                        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
                    }

                ],
            }
        )
        res.json(reserva)
    } catch (e) {
        console.log(e)
        res.status(500)
        res.send('Internal Server Error')
    }
})

app.put('/reserva/:id', async (req, res) => {
    try {
        let reserva = await db.Reserva.findByPk(parseInt(req.params.id))
        let novaReserva = {
            destinoId: req.body.id_destino,
            partida: req.body.partida,
            retorno: req.body.retorno
        }
        if (novaReserva.DestinoId != reserva.DestinoId) {
            let destino = await db.Destino.findByPk(parseInt(novaReserva.DestinoId))
            novaReserva.preco = destino.preco
        }
        await db.Reserva.update(novaReserva, { where: { id: parseInt(req.params.id) } })

        // recarrega com relacionamentos
        reserva = await db.Reserva.findByPk(
            parseInt(req.params.id),
            {
                attributes: { exclude: ['DestinoId', 'PassageiroId', 'createdAt', 'updatedAt'] },
                include: [
                    {
                        model: db.Destino, as: 'destino',
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    },
                    {
                        model: db.Passageiro, as: 'passageiro',
                        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
                    }

                ],
            }
        )

        res.status(200)
        res.json(reserva)
    } catch (e) {
        console.log(e)
        res.status(500)
        res.send('Internal Server Error')
    }
})

app.delete('/reserva/:id', async (req, res) => {
    let apagados = await db.Reserva.destroy({ where: { id: parseInt(req.params.id) } })
    if (apagados > 0) {
        res.status(200)
        res.send('Sucesso')
    } else {
        res.status(500)
        res.send('Erro ao remover.')
    }
    console.log(req.params.id)
})

app.post('/reserva', async (req, res) => {
    try {
        let partida = new Date(req.body.partida),
            retorno = new Date(req.body.retorno)
        if (partida.getTime() >= retorno.getTime()) {
            throw new Error('Partida tem que ser menor que retorno.')
        }

        // busca passageiro
        let passageiro = await db.Passageiro.findOne(
            { where: { cpf: req.body.passageiro.cpf } }
        )
        // cria passageiro se não existir
        if (passageiro === null) {
            passageiro = await db.Passageiro.create({
                nome: req.body.passageiro.nome,
                cpf: req.body.passageiro.cpf
            })
        }

        // carrega destino
        let destino = await db.Destino.findByPk(parseInt(req.body.id_destino))

        // salva reserva
        let reserva = await db.Reserva.create({
            destinoId: destino.id,
            preco: destino.preco,
            partida: partida,
            retorno: retorno,
            passageiroId: passageiro.id
        })

        // busca reserva, para carregar associações
        reserva = await db.Reserva.findByPk(
            parseInt(reserva.id),
            {
                attributes: { exclude: ['DestinoId', 'PassageiroId', 'createdAt', 'updatedAt'] },
                include: [
                    {
                        model: db.Destino,
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    },
                    {
                        model: db.Passageiro,
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    }

                ],
            }
        )
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
