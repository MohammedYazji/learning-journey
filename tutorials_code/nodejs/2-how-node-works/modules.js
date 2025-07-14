// will show the module arguments
// wo we warped the module into function
// console.log(arguments);

// to see the warper function itself, that wrap our module code
// console.log(require("module").wrapper);

////////////////////
// MODULE.EXPORTS //
// import calculator, we can call it anything
const C = require("./test-module-1");
// make instance of Calculator class
const calc1 = new C();
console.log(calc1.add(2, 5));

////////////////////
// EXPORTS //
// calc2 is the export object itself, and has many properties
const calc2 = require("./test-module-2");
console.log(calc2.multiply(2, 5));

// so we can use destructuring objects like props in react
const { add, multiply } = require("./test-module-2");
console.log(add(10, 10));

////////////////////
// CACHING //
// here i wont store it just call it immediately
// because we have caching in nodejs => so this module just load one and the code inside it implement once
// this store in the node processor cache and next time we call the function the module already saved and loaded
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
