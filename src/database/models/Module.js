module.exports = (sequelize, dataTypes) => {
    const Module = sequelize.define('Module', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        classes: {
            type: dataTypes.INTEGER 
        },
        courseID:{
            type: dataTypes.INTEGER
        }    
    }, 
    {
        timestamps: false
    });

    Module.associate = (models) => {
        Module.belongsTo(models.Course, {
            as: "course",
            foreignKey: "courseID"
        })
    }

    return Module;

}