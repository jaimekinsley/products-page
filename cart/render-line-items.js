import { calcLineTotal } from '../common/utils.js';

export function renderLineItem(cartItem, flower){
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = flower.name;
    // nameTd.classList.add('align-left');

    const priceTd = document.createElement('td');
    priceTd.textContent = `$${flower.price.toFixed(2)}`;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;
    
    const subtotalTd = document.createElement('td');
    const subtotalPrice = calcLineTotal(cartItem.quantity, flower.price);
    subtotalTd.textContent = `$${subtotalPrice.toFixed(2)}`;
    // subtotalTd.classList.add('line-item-total');

    tr.appendChild(nameTd);
    tr.appendChild(priceTd);
    tr.appendChild(quantityTd);
    tr.appendChild(subtotalTd);

    return tr;
}