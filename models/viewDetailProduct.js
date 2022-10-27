var pg_conn = require('./database');
async function displayProductDetails(idProduct) {

    const getEntitiesQueries = {
        text: 'SELECT * FROM product WHERE id = $1',
        values: [idProduct]
    }
    var queryProducts = await pg_conn.query(getEntitiesQueries)
    console.log(queryProducts.rows);
    return queryProducts.rows[0];
}

module.exports = displayProductDetails;