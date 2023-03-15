module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        days: {
            type: dataTypes.INTEGER
        },
        time: {
            type: dataTypes.INTEGER
        }    
    }, 
    {
        timestamps: false
    });

    return Usuario;

}