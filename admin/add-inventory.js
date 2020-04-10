// GET the form from the HTML
const myForm = document.getElementById('new-products');

// add an event listener so the form doesn't refresh on submit (default)
myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // makes a variable for form data and parses it
    const myFormData = new FormData(myForm);

    // gets all of the inputs from the data form
    const product = {
        id: myFormData.get('id'),
        name: myFormData.get('name'),
        image: myFormData.get('image'),
        description: myFormData.get('description'),
        category: myFormData.get('category'),
        price: myFormData.get('price'),
    };

// makes a variable and sets it to the local storage
    let updatedFlowers = localStorage.getItem('PRODUCTS');
    // initialize an empty array
    if (!updatedFlowers){
        updatedFlowers = [];
    } else { 
        // Parses the local storage string 

        updatedFlowers = JSON.parse(updatedFlowers);
    }
 // push the parsed data to product
    updatedFlowers.push(product);

// stringify the info you pulled from local storage 
    const stringyNewProducts = JSON.stringify(updatedFlowers);
// set the local storage to the new string
    localStorage.setItem('PRODUCTS', stringyNewProducts);   
});