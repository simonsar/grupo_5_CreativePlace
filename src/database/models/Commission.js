module.exports = (sequelize, dataTypes) => {
    const Commission = sequelize.define('Commission', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING
        },
        courseID:{
            type: dataTypes.INTEGER
        },
        scheduleID:{
            type: dataTypes.INTEGER
        },
        classroomID:{
            type: dataTypes.INTEGER
        }        
    }, 
    {   
        tableName: "Commission",
        timestamps: false
    });

    Commission.associate = (models) => {
        Commission.belongsTo(models.Classroom, {
            as: "Classroom",
            foreignKey: "classroomID"
        })
        Commission.belongsTo(models.Course, {
            as: "Course",
            foreignKey: "courseID"
        })
        Commission.belongsTo(models.Schedule, {
            as: "Schedule",
            foreignKey: "scheduleID"
        })
        Commission.belongsToMany(models.User, {
            as: "user",
            through: "User_Commission",
            foreignKey: "commissionID",
            otherKey: "userID",
            timestamps: false
        });
    }
    return Commission;

}