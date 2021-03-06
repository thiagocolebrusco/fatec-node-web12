module.exports = (app) => {
    app.get("/produtos", app.controllers.produtosController.listarProdutos)
    app.get("/produtos/:id", app.controllers.produtosController.consultarPorId)
    app.post("/produtos", app.utils.uploader.single("imagem"), app.controllers.produtosController.adicionar)
    app.put('/produtos/:id', app.utils.uploader.single("imagem"), app.controllers.produtosController.atualizar)
    app.delete('/produtos/:id', app.controllers.produtosController.excluir)
}