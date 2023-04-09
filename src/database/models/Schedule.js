module.exports = (sequelize, dataTypes) => {
    const Schedule = sequelize.define('Schedule', {
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
        tableName: "schedule",
        timestamps: false
    });

    Schedule.associate = (models) => {
        Schedule.hasMany(models.Commission, {
            as: "commission",
            foreignKey: "scheduleID"
        })
    }
    return Schedule;

}