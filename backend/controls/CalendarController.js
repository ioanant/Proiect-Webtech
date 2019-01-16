var db=require("../pages/index");

module.exports.findAll=(request,response)=>{
    db.appointments.findAll().then((results)=>{
         {
               response.status(200).send({
                   status: "success",
                   results: results
               });
           }
}
).catch((err)=>{
    response.status(400).send(err);
    })
};

module.exports.findById=(request,response)=>{
    db.appointments.findById(request.params.id).then((results)=>{
        if(results){
            response.status(200).send(results)
        }
        else{
            response.status(404).send("nu s-a putut selecta appointment-ul. Introduceti id-ul corect")
        }
    })
};

module.exports.postAppointment= (request, response) => {
    db.appointments.create(request.body).then((results) => {
   {
               response.status(200).send({
                   status: "success",
                   results: results
               });
           }
    }).catch(() => {
        response.status(500).send("resource not created")
    })
};




       
   
