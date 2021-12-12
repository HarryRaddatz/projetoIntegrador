const database = require('./bd'),
User = require('./models/Users'),

bdCRUD = {
    create: async(x) => {
        await database.sync();
        const newUser = User.create(x)
    }
}

module.exports = bdCRUD