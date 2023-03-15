module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DECIMAL
        },
        description: {
            type: dataTypes.STRING
        }       
    }, 
    {
        timestamps: false
    });

    return Usuario;

}