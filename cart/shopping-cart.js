import cart from '../data/cart.js';
import flowers from '../data/flowers.js';
import { findById, calcLineTotal } from '../common/utils.js';


const tbody = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++){
    const cartItem = cart[i];
    const flower = findById(flowers, cartItem.id);
    const dom = calcLineTotal(cartItem, flower);

    tbody.appendChild(dom);
}