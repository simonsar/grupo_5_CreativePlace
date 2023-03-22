module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('Commission', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING
        },
        courseID:{
            foreignKey: true,
            type: dataTypes.INTEGER
        },
        scheduleID:{
            foreignKey: true,
            type: dataTypes.INTEGER
        }    
    }, 
    {
        timestamps: false
    });

    return Usuario;

}