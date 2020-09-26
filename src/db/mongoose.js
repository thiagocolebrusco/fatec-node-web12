const mongoose = require('mongoose')

module.exports = app => {
    mongoose.connect("mongodb://localhost:27017/nodefatec", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Conexão foi realizada com o MongoDB"))
    .catch((err) => console.log(`Erro ao conectar ao no MongoDB: ${err}`))

    return mongoose;
}