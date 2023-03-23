module.exports = (sequelize, dataTypes) => {
    const Role = sequelize.define('Role', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING
        }   
    }, 
    {
        timestamps: false
    });
    Role.associate = (models) => {
        Role.hasMany(models.User, {
            as: "user",
            foreignKey: "roleID"
        })
    }

    return Role;

}