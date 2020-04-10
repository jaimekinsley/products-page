export function findById(items, id){
// create a loop
    for (let i = 0; i < items.length; i++){
        const item = items[i];
// check the id against the item.id
        if (item.id === id) {
            return item;
        }
    }
// return null if the loop doesn't find any matches
    return null;
}

export function calcLineTotal(quantity, price){
    const lineTotal = quantity * price;
    return roundCurrency(lineTotal);
}

function roundCurrency(lineTotal) {
    return Math.round(lineTotal * 100) / 100;
}

export function calcOrderTotal(cart, flowers){
    let orderTotal = 0;

    for (let j = 0; j < cart.length; j++){
        const lineItem = cart[j];
        const flower = findById(flowers, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, flower.price);
        orderTotal += lineTotal;
    }
    return (orderTotal);
}

export function addProduct(object){
    // retrieve existing array
    // should add a product
    // retrieve all the products
    // assert deep Equal the last item in the array and the supplied new product
}