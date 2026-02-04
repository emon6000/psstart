const {v4: uuidv4 } = require('uuid');
const users = [
    { id: uuidv4(), username: 'John Doe', email: 'john@example.com' },
    { id: uuidv4(), username: 'Jane Smith', email: 'jane@example.com' },
    { id: uuidv4(), username: 'Bob Johnson', email: 'bob@example.com' },
];
module.exports = users;