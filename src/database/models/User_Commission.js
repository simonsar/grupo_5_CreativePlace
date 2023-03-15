module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        userID:{
            foreignKey: true,
            type: dataTypes.INTEGER
        },
        commissionID:{
            foreignKey: true,
            type: dataTypes.INTEGER
        }
    }, 
    {
        timestamps: false
    });

    return Usuario;

}