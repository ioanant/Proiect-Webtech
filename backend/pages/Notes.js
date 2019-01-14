module.exports = function(sequelize, DataTypes) {
    var Notes = sequelize.define('notes',{
    id:{type:DataTypes.INTEGER,primaryKey:true},
    name_note: DataTypes.STRING,
    text: DataTypes.TEXT,
    deleted: {type:DataTypes.BOOLEAN, defaultValue:false},
    done: {type:DataTypes.BOOLEAN, defaultValue:false}
    })
    return Notes;
}