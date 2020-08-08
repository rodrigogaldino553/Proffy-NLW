const database = require('sqlite-async')
//criando o arquivo/iniciando-o

function execute(db){
    //criar tabelas do bd
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}
//exporta os dados para fora do arquivo q vai ser pego em outro arquivo com require
module.exports = database.open(__dirname + '/database.sqlite').then(execute)

