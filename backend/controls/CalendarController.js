var db=require("../pages/index");

module.exports.findAll=(request,response)=>{
    db.appointments.findAll().then((appointment)=>{
        response.status(200).send(appointment);
}
).catch((err)=>{
    response.status(400).send(err);
    })
};

module.exports.findById=(request,response)=>{
    db.appointments.findById(request.params.id).then((appointment)=>{
        if(appointment){
            response.status(200).send(appointment)
        }
        else{
            response.status(404).send("nu s-a putut selecta appointment-ul. Introduceti id-ul corect")
        }
    })
};




       
   
