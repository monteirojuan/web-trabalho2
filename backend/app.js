require("sucrase/register");

import express from 'express'
import db from './models'

const app = express()
const port = 3000


app.get('/', async (req, res) => {
    let u = await db.User.findOne()
    res.json({ message: "hello world", user: u })
})

app.listen(port, () => {
    console.log(`Example app listening at http:/localhost:${port}`)
})
