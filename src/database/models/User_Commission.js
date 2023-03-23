module.exports = (sequelize, dataTypes) => {
    const User_Commission = sequelize.define('User_Commission', {
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

    return User_Commission;

}