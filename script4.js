//increment while loop
console.log("the while loop");
let id = 0;

while (id < 7) {
    console.log(id);
    id++;
}

let password = "";
while (password !== "1234") {
    password = prompt("Please enter your password: ");
} 

//3. do-while loop
//do {
//   code to be executed
//    }

let i = 0;
do {
    console.log("from the do while loop ", i);
    i++;
} while (i < 7);