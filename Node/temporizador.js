const schedule = require('node-schedule')


// segundo minuto hora dia mes (1 = segunda, 2 = terca, 3 = quarta, 4 = quinta, 5 = sexta, 6 = sabado, 0 = domingo)
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Executando tarefa1', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tarefa')
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // de segunda a sexta
regra.hour = 9
regra.second = 28

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})