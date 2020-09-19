module.exports = (app) => {
    const usuariosController = {}

    usuariosController.listarUsuarios = (req, res) => {
        res.json(app.db.usuariosDB)
    }

    usuariosController.adicionar = (req, res) => {
        try {
            let usuario = req.body

            app.db.usuariosDB.push(usuario);

            res.send(`Usuário adicionado com sucesso - Id: ${usuario.id}`);
        } catch (error) {
            res.send("Eror ao adicionar usuário: " + error);
            
        }
    }
    usuariosController.consultarPorId = (req, res) => {
        let id = req.params.id
        let usuario = app.db.usuariosDB.find((item) => id == item.id);
        if(usuario)
            res.json(usuario);
        else
            res.status(404).end()
    }

    return usuariosController;
}