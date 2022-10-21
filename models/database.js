// const { Client } = require('pg');

// const client = new Client({
//     user: 'hqvtgydvlmqqyy',
//     host: 'ec2-54-173-237-110.compute-1.amazonaws.com',
//     database: 'd6v3q2lhfss7ef',
//     password: 'fa503a21d41d8694c87659184f1204c6c6388317b380aff09f12f4d0702ff2b8',
//     port: 5432,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

// client.connect();

// client.query('SELECT * FROM users', (err, res) => {
//     console.log(err, res);
//     client.end();
// });


const { Pool } = require('pg').Pool;
const pool = new Pool({
    user: 'hqvtgydvlmqqyy',
    host: 'ec2-54-173-237-110.compute-1.amazonaws.com',
    database: 'd6v3q2lhfss7ef',
    password: 'fa503a21d41d8694c87659184f1204c6c6388317b380aff09f12f4d0702ff2b8',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}