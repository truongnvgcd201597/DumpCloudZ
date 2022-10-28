const Pool = require('pg').Pool

const pg_conn = new Pool({
    user: 'dkwrasoqhomdwz',
    host: 'ec2-44-199-22-207.compute-1.amazonaws.com',
    database: 'd4riq448gijrkk',
    password: 'd9787747afdad6c43bb6088d0a853cdbc18e88b08aae78887d07571204ae8265',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
})


module.exports = pg_conn;