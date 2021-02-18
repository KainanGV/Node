const Sequelize = require('sequelize');

//Connection 
const sequelize = new Sequelize('postapp', 'root', 'realmadrid.co123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}