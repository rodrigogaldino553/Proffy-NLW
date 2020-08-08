const proffys = [
    {
        name:"Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "2299123456", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost:"20", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1200]
    },
    {
        name:"Mayk Brito",
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQG66c6aTczvdQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=tysiyG6vO2UclM1tIBlStqH_xpzw7G61431Uyo2omXY", 
        whatsapp: "2299123456", 
        bio: "Entusiasta das melhores tecnologias de Matemática avançada.<br><br>Apaixonado por fazer inumeros e complexos calculos de matemática", 
        subject: "Matemática", 
        cost:"30", 
        weekday:[1, 4], 
        time_from:[720], 
        time_to:[1200]
    },
    {
        name:"Felipe Dechamps",
        avatar: "data:image/png;base64,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", 
        whatsapp: "2299123456", 
        bio: "Entusiasta das melhores teorias da física avançada.<br><br>Apaixonado por fazer inumeros e complexos calculos e trabalhar na teoria das cordas, além de buscar por matéria escura", 
        subject: "Física", 
        cost:"15", 
        weekday:[0, 2, 3, 4], 
        time_from:[720], 
        time_to:[1200]
    }/*,
    {
        name:'Felipe Montano',
        avatar: 'https://avatars2.githubusercontent.com/u/7559318?s=460&u=9b45fc98ab22e71efa4951eee14cf349a73411ec&v=4',
        whatsapp: '19348554567',
        bio: 'Muita experiencia com busca binária com kotlin no android',
        subject: 'Artes',
        cost: '40',
        weekday: [0],
        time_from:[720],
        time_to: [1220]
    }*/

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]


function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0

    if(isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()
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






