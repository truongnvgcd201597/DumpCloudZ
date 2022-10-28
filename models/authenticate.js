var pg_conn = require('./database');

async function authen(user, pass) {
    var userAuthentication = false;
    var arr = [];
    var shopID = 0;
    var userRole = "shop";
    const asc_query = {
        text: "SELECT * FROM users WHERE name = $1 AND password = $2",
        values: [user, pass]
    };
    var accountQuery = await pg_conn.query(asc_query);
    if (accountQuery.rowCount == 1) {
        userAuthentication = true;
        shopID = accountQuery.rows[0].shop;
        userRole = accountQuery.rows[0].role;
    }
    arr.push(userAuthentication);
    arr.push(shopID);
    arr.push(userRole);
    return arr;
}

module.exports = authen;