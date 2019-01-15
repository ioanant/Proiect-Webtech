const express=require('express')
const app=express()
const api = require('./backend/route/api')
//const cors = require("cors")
const Sequelize=require('sequelize')

const sequelize=new Sequelize('proiect_webtech','root','',{
    dialect:"mysql",
    host:"localhost"
})

// sequelize.authenticate().then(()=>{
//     console.log("Connected to database")
// }).catch(()=>{
//     console.log("Can't connect database")
// })
app.use('/',express.static('frontend/build'))
//app.use(cors())
app.use('/api', api);

const Appointment=sequelize.define('appointment',{
     id:{type:Sequelize.INTEGER,primaryKey:true},
    name: Sequelize.STRING,
    data: Sequelize.DATE,
    location:Sequelize.STRING,
    domain: Sequelize.STRING
})

const Notes=sequelize.define('notes',{
    id:{type:Sequelize.INTEGER,primaryKey:true},
    name_note: Sequelize.STRING,
    text: Sequelize.TEXT,
    deleted: {type:Sequelize.BOOLEAN, defaultValue:false},
    done: {type:Sequelize.BOOLEAN, defaultValue:false}

})



app.get('/createdatabase',(request,response)=>{
    sequelize.sync({force:true}).then(()=>{
        response.status(200).send('tabele create')
    }).catch((err) => {
        console.log(err)
        response.status(200).send('nu s-au creat tabelele')
    })
})



// app.use(express.json());     
// app.use(express.urlencoded())

// // app.get('/appointments',(request,response)=>{
// //     Appointment.findAll().then((appointment)=>{
// //         response.status(200).json(appointment)
// //     })
// // })

// app.post('/notes',(request,response)=>{
//     Notes.create(request.body).then((notes)=>{
//         response.status(200).json(notes)
//     }).catch((err)=>{
//         response.status(404).send("nu a fost creata notita")
//     })
// })


// app.get('/appointments/:id',(request,response)=>{
//     Appointment.findById(request.params.id).then((appointment)=>{
//         if(appointment){
//             response.status(200).send(appointment)
//         }
//         else{
//             response.status(404).send("nu s-a putut selecta appointment-ul. Introduceti id-ul corect")
//         }
//     })
// })

// app.get('/notes',(request,response)=>{
//     Notes.findAll().then((notes)=>{
//         response.status(200).json(notes)
//     })
// })

// app.get('/notes/:id',(request,response)=>{
//   Notes.findById(request.params.id).then((notes)=>{
//         if(notes){
//             response.status(200).send(notes)
//         }
//         else{
//             response.status(404).send("nu s-a putut selecta notita. Introduceti id-ul corect")
//         }
//     })
// })

// app.delete('/notes/:id',(request,response)=>{
//     Notes.findById(request.params.id).then((notes)=>{
//         if(notes){
//             notes.destroy().then(()=>{
//                 response.status(200).send("stergere completa")
//             })
//         }else{
//           response.status(404).send("nu s-a gasit notita")
//         }
//     })
// })

// app.put('/appointments/:id',(request,response)=>{
//     Appointment.findById(request.params.id).then((appointment)=>{
//         if(appointment){
//             appointment.update(request.body).then((appointment)=>{
//                 response.status(200).send(appointment)
//             }).catch((err)=>{
//                 response.status(404).send("nu s-a updatat")
//             })
//         }
//         else{
//             response.status(500).send("nu s-a gasit appointment-ul")
//         }
//     })
// })



app.listen(8080)

