 
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
        tableName: "classroom",
        timestamps: false
    });
    
    Classroom.associate = (models) => {
        Classroom.hasMany(models.Commission, {
            as: "Classroom",
            foreignKey: "classroomID"
        })
    }

    return Classroom;

}