 
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
            type: dataTypes.INTEGER
        }    
    }, 
    {
        timestamps: false
    });

    /*Classroom.associate = () => {
        Classroom.belongsTo(models.Commission, {
            as: "classroom",
            foreignKey: "commissionID"
        })
    }*/

    return Usuario;

}