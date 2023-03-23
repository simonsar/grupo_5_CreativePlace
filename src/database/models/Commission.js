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
        commissionID:{
            type: dataTypes.INTEGER
        }        
    }, 
    {
        timestamps: false
    });

    Commission.associate = (models) => {
        Commission.belongsTo(models.Classroom, {
            as: "Commission",
            foreignKey: "commissionID"
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
            foreignKey: "CommissionID",
            otherKey: "UserID",
            timestamps: false
        });
    }
    return Commission;

}