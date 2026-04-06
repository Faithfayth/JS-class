//Loops
//1. For loop

for (let i = 0; i<7; i++) {
    console.log(i);
}

const myCars = ["volvo", "benz", "kia", "toyota"];
console.log(myCars);

for (let i=0; i < myCars.length; i++) {
    console.log(myCars[i]);
}

console.log("method two")

// for (let car of myCars) {
//     console.log(car);
// }

for (let car of myCars) {
    console.log(car);
    function printCarPosition (car) {
        const y = myCars.indexOf(car);
        console.log("the position of " + car + "is " + y);
    }
    
}

// printCarPosition(car);
// console.log(car);

//2. while loop- code is executed as long as condition is true

let i = 0;
while (i<7) {
    console.log("\n From the while loop ", i);

}