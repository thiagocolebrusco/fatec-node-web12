module.exports = app => {
    let ProdutosSchema = app.db.mongoose.Schema({
        nome: String,
        preco: Number,
        imagem: String
    })

    app.db.mongoose.model("Produtos", ProdutosSchema);
}