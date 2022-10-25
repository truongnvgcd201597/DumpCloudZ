var pg_conn = require('./database');
async function deleteProduct(idProduct) {
    const query = {
        text: `DELETE FROM product WHERE id = $1`,
        values: [idProduct]
    }
    var getEntitiesQueries = await pg_conn.query(query);
}
module.exports = deleteProduct;