var pg_conn = require('./database');

async function updateProduct(id, name, quantity, price) {
    const query = {
        text: `UPDATE product SET id = $1, name = $2, quantity = $3, price = $4 WHERE id = $5`,
        values: [id, name, quantity, price, id]
    }
    var getEntitiesQueries = pg_conn.query(query);
    return getEntitiesQueries;
}

module.exports = updateProduct;


