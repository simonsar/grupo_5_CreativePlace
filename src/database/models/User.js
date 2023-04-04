module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        first_Name:{
            type: dataTypes.STRING
        },
        last_Name:{
            allowNull: false,
            type: dataTypes.STRING
        },
        country:{
            allowNull: false,
            type: dataTypes.STRING
        },
        email:{
            allowNull: false,
            type: dataTypes.STRING
        },
        password:{
            allowNull: false,
            type: dataTypes.STRING
        },
        roleID:{
            foreignKey: true,
            type: dataTypes.INTEGER
        }    
    }, 
    {
        tableName: "user",
        timestamps: false
    });

    User.associate = (models) => {
        User.belongsTo(models.Role, {
            as: "role",
            foreignKey: "roleID"
        })
        User.belongsToMany(models.Commission, {
            as: "Commission",
            through: "User_Commission",
            foreignKey: "UserID",
            otherKey: "CommissionID",
            timestamps: false
        });
    }

    return User;

}