 
module.exports = (sequelize, dataTypes) => {
    const Classroom = sequelize.define('Classroom', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        linkMeeting: {
            type: dataTypes.STRING
        }   
    }, 
    {
        timestamps: false
    });
    
    Classroom.associate = (models) => {
        Classroom.hasMany(models.Commission, {
            as: "Classroom",
            foreignKey: "commissionID"
        })
    }

    return Classroom;

}