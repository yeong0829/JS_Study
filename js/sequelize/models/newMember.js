module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define("users", {
        name: {
            type: DataTypes.STRING(10),
            allowNull: false
        }, 
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(25),
            allowNull: false
        }, 
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false
        }, 
        reason: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },{
            timestamps:false
    });
    return Member;
};
/*  name VARCHAR(10) NOT NULL,
  id int NOT NULL,
  email VARCHAR(25) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  reason TEXT NOT NULL,
  PRIMARY KEY (id)); */