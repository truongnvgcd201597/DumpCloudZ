const db = require('../db');
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