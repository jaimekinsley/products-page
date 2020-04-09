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
    pCategory.textContent = flowers.category;
    li.append(pCategory);

    const pPrice = document.createElement('p');
    pPrice.textContent = flowers.price;
    li.append(pPrice);

    return li;
}

export default renderFlowers;