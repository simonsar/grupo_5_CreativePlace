module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('Course', {
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

    return Usuario;

}