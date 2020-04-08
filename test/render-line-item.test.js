
// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { renderLineItem } from '../cart/render-line-items.js';
const test = QUnit.test;

test('renders a line item', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const cartItem = {
        id: 'stargazer',
        quantity: 3
    };
    
    const flower = {
        id: 'stargazer',
        name: 'Stargazer Lily',
        image: '../assets/stargazer.jpg',
        description: 'Expressive both in beauty and size, lilies redefine elegance and purity. The Stargazer Lily is a large-bloomed bicolor variety with a dark pink strawberry blending into a soft vanilla exterior.  It is perfect for everything from formal events to arrangements for someone special.',
        category: 'scented flowers',
        price: 4.50
    };

    const expected = '<tr><td>Stargazer Lily</td><td>$4.50</td><td>3</td><td>$13.50</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const

    const dom = renderLineItem(cartItem, flower);
    const html = dom.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
