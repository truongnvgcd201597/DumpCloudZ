var pg_conn = require('./database');
async function viewDetailsProduct() {
    const getEntitiesQueries = {
        text: `SELECT shop.name FROM shop INNER JOIN users ON shop.id = users.shop WHERE users.role = 'shop'`,
    }
    var queryFields = await pg_conn.query(getEntitiesQueries)
    var selectBox = `
     <div class="select">
    <select name="shop">
    <option value="all" class="option_filter">All Shop</option>`;
    for (let i = 0; i < queryFields.rows.length; i++) {
        selectBox += `<option value="${queryFields.rows[i].name}">${queryFields.rows[i].name}</option>`;
    }
    selectBox += `</select>
    </div>`;
    var selectBoxFormField = `
    <form method="POST" action="/findShop" class="search_form"> 
    ${selectBox}
    <button type="submit" class="search_btn">Search</button>
    </form>`

    return selectBoxFormField;
}
module.exports = viewDetailsProduct;

// SELECT shop.name from shop inner join users on users.shop = shop.id where users.role = 'shop'