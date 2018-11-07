const config = require('config.json');
const jwt = require('jsonwebtoken');

//users hardcoded for simplicity, store in db for production applications for firebase
const users = [{id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User'}];


module.exports = {
    authenticate,
    getAll
};


async function authenticate({username, password}) {
    const user = users.find( u => u.username === && u.password === password);
    if(user) {
        const token = jwt.sign({})
    }
}