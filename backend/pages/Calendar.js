module.exports = function(sequelize, DataTypes) {
    var Appointment = sequelize.define('appointment',{
     id:{type:DataTypes.INTEGER,primaryKey:true},
    name: DataTypes.STRING,
    data: DataTypes.DATE,
    location:DataTypes.STRING,
    domain: DataTypes.STRING
})
    return Appointment;
}