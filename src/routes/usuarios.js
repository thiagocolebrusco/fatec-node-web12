module.exports = (app) => {
    app.get("/usuarios", app.controllers.usuariosController.listarUsuarios)
    app.get("/usuarios/:id", app.controllers.usuariosController.consultarPorId)
    app.post("/usuarios", app.controllers.usuariosController.adicionar)
}