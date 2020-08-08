module.exports = async function (db, {proffyValue, classValue, classScheduleValues}) {
    //iserir dados na tabela teachers
    
    //com o await no inicio da linha, ele para a execucao e espera ate q aquela linha se complete
    //para usar o await a funcao deve ser assicrona, ela se torna assincrona quando tem o nome async antes da funcao
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
    //INSERT INTO insere dados na tabela

    const proffy_id = insertedProffy.lastID

    //iserir dados na tabela de classes

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES(
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID

    //inserir dados na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"

            );
        `)
    })

    await Promise.all(insertedAllClassScheduleValues)

}