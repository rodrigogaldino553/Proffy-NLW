

//sevidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses
} = require('./pages')

const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache:true
})

//configuracao do servidor
server
//configuracao dos arquivos staticos
.use(express.static("public"))
//rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)






