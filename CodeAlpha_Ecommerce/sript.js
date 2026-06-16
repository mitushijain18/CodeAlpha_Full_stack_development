let cart = [];

function addToCart(name, price){

cart.push({
name:name,
price:price
});

updateCartCount();

alert(name + " added to cart");
}

function updateCartCount(){
document.getElementById("cart-count").innerText = cart.length;
}

function viewCart(){

let cartItems = document.getElementById("cart-items");

cartItems.innerHTML = "";

let total = 0;

cart.forEach(item=>{

let li = document.createElement("li");

li.innerHTML = item.name + " - ₹" + item.price;

cartItems.appendChild(li);

total += item.price;

});

document.getElementById("total").innerText = total;

document.getElementById("cart-modal").style.display="block";
}

function closeCart(){
document.getElementById("cart-modal").style.display="none";
}

function placeOrder(){

if(cart.length===0){
alert("Cart is empty!");
return;
}

alert("Order Placed Successfully!");

cart=[];

updateCartCount();

closeCart();
}