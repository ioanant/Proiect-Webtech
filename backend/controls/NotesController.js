var db = require('../pages/index');

module.exports.findAll = (req, res,next) => {
    db.notes.findAll().then(
           (results) => {
               res.status(200).send({
                   status: "success",
                   results: results
               });
           }
       ).catch(() => {
           res.status(500).send({
               status: "error"
           })
       })
};

 
module.exports.findById = (req, res,next) => {
    console.log(request);
    db.notes.findById(req.params.id).then(
        (result) => {
            console.log(result);
            if(result) {
                res.status(200).send(result)
            } else {
                res.status(404).send()
            }
        }
    )
}