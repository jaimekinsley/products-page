import cart from '../data/cart.js';
import flowers from '../data/flowers.js';
import { findById } from '../common/utils.js';
import { renderLineItem } from '../cart/render-line-items.js';


const tbody = document.getElementById('checkout-table');

for (let i = 0; i < cart.length; i++){
    const cartItem = cart[i];
    const flower = findById(flowers, cartItem.id);
    const dom = renderLineItem(cartItem, flower);
    tbody.appendChild(dom);
}