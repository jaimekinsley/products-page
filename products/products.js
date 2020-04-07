// 1. Import your data and your DOM generation function
import flowers from '../data/flowers.js';
import renderFlowers from '../products/render-flowers.js';

// 2. Locate the list element where your products will go
const ul = document.getElementById('flowers');

// 3. Loop through your data
for (let i = 0; i < flowers.length; i++) {
    const flower = flowers[i];
    const li = renderFlowers(flower);
    ul.append(li);
}