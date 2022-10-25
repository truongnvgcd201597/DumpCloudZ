var pg_conn = require('./database');
async function viewShop() {
    const shop_query = {
        text: `SELECT shop.name from shop inner join users on users.shop = shop.id where users.role = 'shop';`
    }
    var query_data = await pg_conn.query(shop_query)
    var select_box_string = `
     <div class="select">
    <select name="shop">
    <option value="all" class="option_filter">All Shop</option>`;
    for (let i = 0; i < query_data.rows.length; i++) {
        select_box_string += `<option value="${query_data.rows[i].name}">${query_data.rows[i].name}</option>`;
    }
    select_box_string += `</select>
    </div>`;
    var form_select_box = `
    <form method="POST" action="/findShop" class="search_form"> 
    ${select_box_string}
    <button type="submit" class="search_btn">Search</button>
    </form>`

    return form_select_box;
}
module.exports = viewShop;