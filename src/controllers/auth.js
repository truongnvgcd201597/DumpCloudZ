const db = require('../db');
const bodyParser = require('body-parser');
exports.getUsers = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM USERS');
        console.log(rows);
        // res.status(200).json({
        //     status: 'success',
        //     results: users.rows.length,
        //     data: {
        //         users: users.rows,
        //     },
        // });
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
exports.register = async (req, res) => {
    try {
        console.log('Passed validation');
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}