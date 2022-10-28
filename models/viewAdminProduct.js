const { name } = require('ejs');
var pg_conn = require('./database');
async function viewAdminProduct(nameShop) {
    let queryProducts;
    var getEntitiesQueries;
    if (nameShop == 'all') queryProducts = {
        text: `SELECT PRODUCT.ID, PRODUCT.NAME, PRODUCT.QUANTITY, PRODUCT.PRICE, PRODUCT.SHOP
        FROM product INNER JOIN shop ON product.shop = shop.id`,
    }
    else queryProducts = {
        text: `SELECT PRODUCT.ID, PRODUCT.NAME, PRODUCT.QUANTITY, PRODUCT.PRICE, PRODUCT.SHOP
        FROM product INNER JOIN shop ON product.shop = shop.id WHERE shop.name = $1`,
        values: [nameShop]
    }
    let tableProductDisplay = `
    <table class="table_form">
    <tr> 
`
    var getEntitiesQueries = await pg_conn.query(queryProducts);
    let numOfCols = getEntitiesQueries.fields.length;
    for (let i = 0; i < numOfCols; i++) {
        tableProductDisplay += `<th> ${getEntitiesQueries.fields[i].name} </th>`;
    }
    // tableProductDisplay += `</tr>`;
    getEntitiesQueries.rows.forEach(product => {
        tableProductDisplay += `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.shop}</td>
        </tr>
        `
    });
    tableProductDisplay += `</table>`;
    return tableProductDisplay;
}
module.exports = viewAdminProduct;