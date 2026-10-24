const products = [
    {name : "laptop",price : 800},
    {name : "mouse",price :25},
    {name : "keyboard",price:45}
];
 // print all product using forEach()
console.log(" all product for each");

products.forEach(function(product){
    console.log(`Item : ${product.name} - price: $${product.price}`);
});
// filter products with price less than $50
console.log("\n filter product (price <$50)");
const filteredproducts = products.filter(function(product){
    return product.price < 50;

});

console.log(filteredproducts);

// create  foematted string using map()
console.log("\n mapped product tags (map)");
const mappedProducts = products.map(function(product){
    return `${product.name.toUpperCase()} costs $${product.price}`;
});

console.log(mappedProducts);