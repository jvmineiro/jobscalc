const express = require("express")
const server = express()
const routes = require("./routes")

// esta usando agora o template engine 
server.set('view engine', 'ejs')

//habilitar arquivos statics 
server.use(express.static("public"))

//usar o req.body 
server.use(express.urlencoded({ extended: true }))

//routes
server.use(routes)

//seridor ouvindo a porta 3000
server.listen(3000, () => console.log('rodando'))