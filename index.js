const express = require('express')
const consign = require("consign")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

consign({ cwd: 'src' })
    .include("db")
    .then("controllers")
    .then("routes")
    .into(app)

app.listen(8000, function() {
    console.log("Servidor rodando na porta 8000");
})