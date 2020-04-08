import flowers from '../data/flowers.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import { renderLineItem } from '../cart/render-line-items.js';


const tbody = document.getElementById('checkout-table');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');


const json = localStorage.getItem('CART');
let cart;
if (json) {
    cart = JSON.parse(json);
}
else {
    cart = [];
}


for (let i = 0; i < cart.length; i++){
    const cartItem = cart[i];
    const flower = findById(flowers, cartItem.id);
    const dom = renderLineItem(cartItem, flower);
    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, flowers);
orderTotalCell.textContent = `$${orderTotal.toFixed(2)}`;

if (cart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert ('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}
