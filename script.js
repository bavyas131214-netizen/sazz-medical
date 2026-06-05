


let cart = [];

const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const cartCount = document.getElementById("cart-count");
const whatsappBtn = document.getElementById("whatsapp-order");

function addToCart(name, price){

cart.push({
name: name,
price: price
});

updateCart();

}

function updateCart(){

let total = 0;

cartItems.innerHTML = "";

if(cart.length === 0){

cartItems.innerHTML = `
<div class="empty-cart">
<span class="cart-icon">🛒</span>
<h3>Your Cart is Empty</h3>
<p>Add medicines and healthcare products to get started.</p>
</div>
`;

}else{

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<div class="cart-item">

<div>
<h4>${item.name}</h4>
<p>₹${item.price}</p>
</div>

<button class="remove-btn"
onclick="removeItem(${index})">
❌ Remove
</button>

</div>
`;

});

}

total = cart.reduce((sum,item)=>sum + item.price,0);

totalElement.innerText = total;
cartCount.innerText = cart.length;

let message = "Hello, I want to order:%0A";

cart.forEach(item=>{
message += `${item.name} - ₹${item.price}%0A`;
});

message += `%0ATotal: ₹${total}`;

whatsappBtn.href =
`https://wa.me/916374327069?text=${message}`;

}

function removeItem(index){

cart.splice(index,1);

updateCart();

}

updateCart();