/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

/*********************************************** */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code Block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log (sum); 

/*********************************************** */

// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
    // Code Block
    return a + b;
}
let sum2 = addTwoNumbers2(3, 5);
console.log (sum); 

/*********************************************** */

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); using brackets is also valid
const addTwoNumbers3 = (a, b) => a + b;
let sum3 = addTwoNumbers3 (3, 5)
console.log (sum3)

/*********************************************** */

// Implicit Returns
const saySomething = message => console.log(message)
saySomething("3,500 arrows and 137 whole longbows came from the Mary Rose, Henry VIII's ship that sank at Portsmouth in 1545")

const sayRobinHood = () => console.log('Steal from the Rich, empower the poor');
sayRobinHood();

/*********************************************** */

// Returning Multiple Lines
const returnMultipleStrings = () => (
    `<p>
    This is a Multiline String
    </p>`
)
console.log (returnMultipleStrings());

/*********************************************** */
