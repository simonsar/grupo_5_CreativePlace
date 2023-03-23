module.exports = (sequelize, dataTypes) => {
    const Course = sequelize.define('Course', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DECIMAL
        },
        description: {
            type: dataTypes.STRING
        }       
    }, 
    {
        tableName: "course",
        timestamps: false
    });

    Course.associate = (models) => {
        Course.hasMany(models.Commission, {
            as: "commission",
            foreignKey: "courseID"
        })
        Course.hasMany(models.Module, {
            as: "module",
            foreignKey: "courseID"
        })
    }


    return Course;

}