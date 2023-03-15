module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        classes: {
            type: dataTypes.INTEGER 
        },
        courseID:{
            foreignKey: true,
            type: dataTypes.INTEGER
        }    
    }, 
    {
        timestamps: false
    });

    return Usuario;

}