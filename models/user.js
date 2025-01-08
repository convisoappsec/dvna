"use strict";

module.exports = function (sequelize, DataTypes) {
    // This is a test retrieved from
    // https://docs.aws.amazon.com/cli/v1/userguide/cli-configure-files.html 
    // to validate Github Advanced Security
    var aws_access_key_id='ASIAIOSF4DNN1EXAMPLE'
    var aws_secret_access_key='wJalrXUtnFEMI/K1MDENG/bPxRfiCYEXAMPLEKEY'
    var aws_session_token = 'IQoJb3JpZ2luX2IQoJb3JpZ2luX5IQoJb3JpZ2luX2IQoJb3JpZ2luX2IQoJb1JpZVERYLONGSTRINGEXAMPLE'
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return User;
};
