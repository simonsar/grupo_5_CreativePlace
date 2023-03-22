module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('Role', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING
        }   
    }, 
    {
        timestamps: false
    });

    return Usuario;

}