const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:asdF0987@localhost:5432/sps')

async function connect() {
    try {
        await sequelize.authenticate()
        console.log('db connectted');
    }
    catch (error) {
        console.log(`error: {error}`);
    }
}
connect()

module.exports = { sequelize }