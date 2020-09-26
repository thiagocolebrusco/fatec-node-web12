module.exports = app => {
    app.use((req, res, next) => {
        if(req.originalUrl == "/usuarios/login"){
            next()
        } else {
            let token = req.headers.token
            if(!token)
                res.status(401).end()
            else
                next();
        }
    })
}