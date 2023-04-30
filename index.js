const express = require('express')
const app = express()
const port = 5000;
const cors = require("cors");

app.use(cors());

const datas = require("./datas/hotaildata.json")

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/hotaildata", (req, res) => {
    res.send(datas)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})