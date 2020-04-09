import { findById } from '../common/utils.js';

function renderFlowers(flowers){
    const li = document.createElement('li');
    const h3 = document.createElement('h3');    
    h3.textContent = flowers.name;
    li.append(h3);

    const img = document.createElement('img');
    img.src = flowers.image;
    li.append(img);

    const pDescription = document.createElement('p');
    pDescription.textContent = flowers.description;
    li.append(pDescription);

    const pCategory = document.createElement('p');
    pCategory.textContent = `Category: ${flowers.category}`;
    li.append(pCategory);

    const pPrice = document.createElement('p');
    const flowerPrice = flowers.price;
    const fixedPrice = `Price: $${flowerPrice.toFixed(2)}`;
    pPrice.textContent = fixedPrice; 
    li.append(pPrice);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = flowers.id;
    li.append(button);
    
    // add event listener to button
    button.addEventListener('click', () => {
        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }

        let lineItem = findById(cart, flowers.id);

        if (!lineItem) {
            lineItem = {
                id: flowers.id,
                quantity: 1
            };

            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        alert('1 ' + flowers.name + ' added to cart');
    });

    
    return li;
}

export default renderFlowers;