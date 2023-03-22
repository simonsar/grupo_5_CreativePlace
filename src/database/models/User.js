module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        first_Name:{
            type: dataTypes.STRING
        } ,
        last_Name:{
            allowNull: false,
            type: dataTypes.STRING
        } ,
        country:{
            allowNull: false,
            type: dataTypes.STRING
        } ,
        email:{
            allowNull: false,
            type: dataTypes.STRING
        } ,
        password:{
            allowNull: false,
            type: dataTypes.STRING
        },
        roleID:{
            foreignKey: true,
            type: dataTypes.INTEGER
        }    
    }, 
    {
        tableName: "Users",
        timestamps: false
    });

    return Usuario;

}