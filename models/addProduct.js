var pg_conn = require('./database');
async function addProduct(name, price, quantity, shop) {
    const query = {
        text: `INSERT INTO product (name, price, quantity, shop) VALUES ($1, $2, $3, $4)`,
        values: [name, price, quantity, shop]
    }
    var query_data = await pg_conn.query(query);
    console.log(query_data);
}
module.exports = addProduct;

