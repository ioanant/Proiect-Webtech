module.exports = function(sequelize, DataTypes) {
    var Appointments = sequelize.define('appointments',{
     id:{type:DataTypes.INTEGER,primaryKey:true},
    name: DataTypes.STRING,
    data: DataTypes.DATE,
    location:DataTypes.STRING,
    domain: DataTypes.STRING
})
    return Appointments;
}