var nameInput = document.querySelector("#name");
var descriptionInput = document.querySelector("#description");
var priceInput = document.querySelector("#price");
var addProduct = document.querySelector(".add-product");
var products = [];

addProduct.onsubmit = function (e) {
    e.preventDefault();
    var newProduct = {
        name: nameInput.value,
        description: descriptionInput.value,
        price: priceInput.value
    };

    products.push(newProduct);

    var data = ``;
    for (var i = 0; i < products.length; i++) {
        data += `<tr>
                    <td>${products[i].name}</td>
                    <td>${products[i].description}</td>
                    <td>${products[i].price}</td>
                 </tr> `
    }
    document.querySelector('.product-list').innerHTML = data;
    
}
