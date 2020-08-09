const database = require('./db')

const createProffy = require('./createProffy')



database.then(async(db) => {
//inserir dados

    proffyValue = {
        name:"Lucas Montano",
        avatar: "https://avatars2.githubusercontent.com/u/7559318?s=460&u=9b45fc98ab22e71efa4951eee14cf349a73411ec&v=4",
        whatsapp: "19348554567",
        bio: "Muita experiencia com busca binária com kotlin no android",
        
    }

    classValue = {
        subject: 1,
        cost: '40',
        //o id vai vir pelo banco de dados
    }

    classScheduleValues = [
        //class_id vai vir pelo banco de dados
        {
            weekday: 1,
            time_from: 720,
            time_to:1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to:1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})


//consultar os dados

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)

    //consultar as classes de um determinado proffy e trazer os dados tbm
    const selectedClassesAllProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id == proffy_id)
        WHERE classes.proffy_id == 1;
    `)

    //console.log(selectedClassesAllProffys)

    //pegar pelo horario

    const selectedClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id == 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1330"
        AND class_schedule.time_to > "1330"
    `)

    //console.log(selectedClassesSchedule)
})


