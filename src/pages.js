const database = require('./database/db')


const {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMInutes
} = require('./utils/format')



function pageLanding(req, res) {
    return res.render("index.html")
}

async function pageStudy(req, res) {
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", {
            filters,
            subjects,
            weekdays
        })
    }

    //converter as horas em minutos

    const timeToMinutes = convertHoursToMInutes(filters.time)

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id == proffy_id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id == classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes} 
        )
        AND classes.subject = '${filters.subject}'
    `

    try {
        const db = await database
        const proffys = await db.all(query)

        proffys.map((proffy) => {
            proffy.subject = getSubject(proffy.subjects)
        })

        return res.render('study.html', {
            proffys,
            subjects,
            filters,
            weekdays
        })

    } catch (error) {
        console.log(error)
    }

}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html", {
        subjects,
        weekdays
    })
}

async function saveClasses(req, res) {
    const createProffy = require('./database/createProffy')

    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio
    }

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }

    const classScheduleValues = req.body.weekday.map((weekday, index) => {
        return {
            weekday,
            time_from: convertHoursToMInutes(req.body.time_from[index]),
            time_to: convertHoursToMInutes(req.body.time_to[index])
        }
    })
    try {
        const db = await database
        await createProffy(db, {
            proffyValue,
            classValue,
            classScheduleValues
        })

        let queryString = "?subject=" + req.body.subject
        queryString += "&weekday=" + req.body.weekday[0] 
        //queryString += "&time=" + req.body.time[0] 


        return res.redirect("/study"+queryString)
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
}