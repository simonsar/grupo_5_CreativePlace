 
module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('Classroom', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        linkMeeting: {
            type: dataTypes.STRING
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