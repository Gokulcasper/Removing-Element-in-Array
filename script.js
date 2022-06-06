// Removing Elements In Array        // Adding Elements In Array

// pop()                                // push()
// shift()                              // unshift()
// splice()                             // splice()

const item = [1, 2, 3, 4, 5, 6];
item.pop(); // Removing Last Elements[1,2,3,4,5]
item.shift(); //Removing Starting Elements[2,3,4,5]
item.splice(2, 2); // Removing specific Elements using IndexPosition and value[2,3]
console.log(item);
