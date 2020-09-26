module.exports = function(app) {
    let produtosModel = app.db.mongoose.model("Produtos")

    return {
        listarProdutos: function(req, res) {
            let search = req.body.search
            produtosModel.find({
                nome: new RegExp(search)
            })
            .then((produtos) => {
                res.json(produtos)
            })
            .catch((err) => res.status(500).send(err))
        },
        adicionar: (req, res) => {
            try {
                let produto = new produtosModel(req.body)
                produto.save((err) => {
                    if(err)
                        res.status(500).send(`Erro ao inserir: ${err}`)
                    else
                        res.send(`Produto adicionado com sucesso - Id: ${produto.id}`);
                });
            } catch (error) {
                res.send("Eror ao adicionar produto: " + error);
            }
        },
        consultarPorId: async (req, res) => {
            try {
                let id = req.params.id
                let produto = await produtosModel.findById(id)
                if(produto)
                    res.json(produto)
                else
                    res.status(404).end();
            } catch (error) {
                res.status(404).send();
            }
        },
        atualizar: (req, res) => {
            let id = req.params.id
            let produto = req.body
            produtosModel.findByIdAndUpdate(id, { $set: produto } , (err) => {
                if(err)
                    res.status(500).send(`Erro ao atualizar produto: ${err}`)
                else
                    res.send("Produto atualizado com sucesso")
            })
        },
        excluir: (req, res) => {
            let id = req.params.id
            produtosModel.findByIdAndRemove(id, (err) => {
                if(err)
                    res.status(500).send(`Erro ao excluir produto: ${err}`)
                else
                    res.send("Produto excluído com sucesso")
            })
        }
    }
}