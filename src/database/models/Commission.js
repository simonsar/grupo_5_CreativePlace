module.exports = (sequelize, dataTypes) => {
    const Commission = sequelize.define('Commission', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }
    }, 
    {
        tableName: "commission",
        timestamps: false
    });

    Commission.associate = (models) => {
        Commission.belongsTo(models.Course, {
            as: "course",
            foreignKey: "courseID"
        })
        Commission.belongsTo(models.Classroom, {
            as: "classroom",
            foreignKey: "classroomID"
        })
        Commission.belongsTo(models.Schedule, {
            as: "schedule",
            foreignKey: "scheduleID"
        })
        Commission.belongsToMany(models.User, {
            through: "user_commission",
            foreignKey: "commissionID",
            otherKey: "userID",
            timestamps: false
        });
    }


    return Commission;

}