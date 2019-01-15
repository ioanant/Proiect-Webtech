var db = require("../pages/index");

module.exports.findAll=(request,response)=>{
    db.Notes.findAll().then((notes)=>{
        response.status(200).send(notes)
        console.log('S-au gasit notie')
}
).catch(()=>{
    response.status(400).send("nu s-au gasit notite");
    })
};

module.exports.findById=(request,response)=>{
     db.Notes.findById(request.params.id).then((notes)=>{
        if(notes){
            response.status(200).send(notes)
        }
        else{
            response.status(404).send("nu s-a putut selecta notita. Introduceti id-ul corect")
        }
        })
};
    

