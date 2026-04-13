//Arrow functions
//Arrow functions are a more concise way to write functions in javascript.
//often used for short simple functions, and they do not have their own 'this' context.

//Traditional function expresssion
const traditionalFunction = function() {
    console.log("This is a traditional function");
}

function traditionalFunction2() {
    console.log("This is another traditional function");
}

traditionalFunction();
traditionalFunction2();

const arrowFunction = (a, b) => {
    console.log(a + b);
    console.log("This is an arrow function");
}

arrowFunction(12, 13);

//JSON - JavaScript Object Notation
//JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. 
// It is often used to transmit data between a server and a web application as an alternative to XML.
const task = {
    id: 1,
    title: "Learn JavaScript",
    completed: false
}
console.log(task);

//JSON string
const taskJSON = JSON.stringify(task);
console.log(taskJSON);

//Converting JSON string back to JavaScript object / parsing JSON string back to JavaScript object
const parsedTask = JSON.parse(taskJSON);
console.log(parsedTask);

//Local storage
//Local storage is a web storage API that allows you to store data in the browser. 
// It is a key-value store that can be used to store data on the client side. 
// The data stored in local storage is persistent, meaning it will remain even after the browser is closed.
//Storing data in local storage
//                                 localStorage.setItem("task", taskJSON);
//Retrieving data from local storage
//                                 const storedTaskJSON = localStorage.getItem("task");
//                                 const storedTask = JSON.parse(storedTaskJSON);
//                                 console.log(storedTask);

localStorage.setItem("username", "Visionary");
localStorage.setItem("email", "visionary@example.com");
localStorage.setItem("task", taskJSON);
localStorage.setItem("taskObject",(task)); //this will show [object Object] in the local storage because it is not a string, it is an object. We need to convert it to a string using JSON.stringify() before storing it in local storage.
localStorage.setItem("taskObject1", JSON.stringify(task));

//Retrieving data from local storage
const retrievedUsername = localStorage.getItem("username");
const retrievedEmail = localStorage.getItem("email");
const retrievedTaskJSON = localStorage.getItem("task");
const retrievedTask1 = JSON.parse(retrievedTaskJSON);  //changing the json file to a javascript object
const retrievedTask = localStorage.getItem("taskObject");

console.log("Retrieved username: ", retrievedUsername);
console.log("Retrieved email: ", retrievedEmail);
console.log("Retrieved task: ", retrievedTask1);
console.log("Retrieved task object: ", retrievedTask);//this will show [object Object] because it is not a string, it is an object. We need to convert it to a string using JSON.stringify() before storing it in local storage.