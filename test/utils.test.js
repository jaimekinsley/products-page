// IMPORT MODULES under test here:
// import example from '../src/example.js';
import flowers from '../data/flowers.js';
import cart from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';

const test = QUnit.test;

test('finding a product by id', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const id = 'stargazer';
    const expected = 'Stargazer Lily';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const foundFlower = findById(flowers, id);
    //Assert
    // Make assertions about what is expected valid result
    assert.ok(foundFlower);
    assert.equal(foundFlower.name, expected);
});


test('getting the line total', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 2;
    const price = 5;
    const expected = 10;
    //Act 
    // Call the function you're testing and set the result to a const
    const lineTotal = calcLineTotal(quantity, price);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(lineTotal, expected);
});

test('calculating the order total', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 35.5;
    //Act 
    // Call the function you're testing and set the result to a const
    const orderTotal = calcOrderTotal(cart, flowers);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(orderTotal, expected);
});