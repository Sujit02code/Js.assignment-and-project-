
console.log("---Initilization Inventory Iystem---");

// 1 data and inpunt Initialization

const products =[
    {name : "laptop" , price: 800},
    {name : "mouse" , price : 25}
];

//input from user
let productName = prompt("enter new product name :");
let productPrice = Number(prompt("enter product price :"));

  // valid input using if - else
if(
    productName ===null || productName.trim() ==="" || !Number.isFinite(productPrice) ||productPrice <= 0
){
    console.log("Invalid input plese enter valid product new name  and price");
}else {
    products.push({
        name : productName.trim(),
        price : productPrice
    });
    console.log(`[ prompt executed : user aads "${productName}" at "$${productPrice}"]`);

    //2.control flow and conditional evalution

    function getCategory(price){
        if (price <50){
            return "budget";
        }else if (price <200){
            return "standard";
        }else{
            return "premium";
        }
    }

   // switch statement
   function getCategoryBadge(category){
    switch(category){
        case "budget":
            return "[BUDGET]";
        case "standard ":
            return "[STANDARD]";
        case "premium" :
            return "[PREMIUM]";
        default:
            return "[UNKOWN]";
       }
   }


  // loop and control flow
  console.log("\n--- Processing Inventory Roster (forEach)---");
  products.forEach(function(product){
    if (!Number.isFinite(product.price)||product.price <= 0){
        console.log("invalid product skipped ");
        return;
    }
    const category = getCategory(product.price);
    console.log(`* Item : ${product.name}($${product.price}) -> category: ${category}`);

    console.log("badge",getCategoryBadge(category));
  });
  
  //4. function and scope

  //simple function
  function calculateTotal(items){
    let total = 0;

    for (const item of items){
        if (Number.isFinite(item.price)){
            total += item.price; 
        }
    }
    return total;
  }

  // Arrow function for discount calculation
  const calculateDiscount = (total,discountPercent = 0) =>total - (total*discountPercent / 100);

  // calculate total inventory value
   const totalValue = calculateTotal(products);

   console.log("\n ---Financial Analytics--- ");

   console.log(" total iventory value : $",+totalValue);

   // Ex. apply 10 % discount to total ijventory value

   console.log("Inventory value after 10% discount :$",+ calculateDiscount(totalValue,10).toFixed(2));

   // 5. Array methods and interation 

   // filter products costing < $200
    const affordableProducts = products.filter(product => product.price < 200);

    console.log("filtered affordable item (under 200) :");

//create formate report using map()
const report = products.map(product => `${product.name.toUpperCase()}: $${product.price}`);

console.log(" formatted report list : , report");

console.log(" \n Inventory system completed. ");

}