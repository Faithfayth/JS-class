//when using the query selector, have to specify whether a class. or id# or tag name.

const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const paragraph1 = document.querySelector(".p1");
console.log(paragraph1);

const allParagraphs = document.querySelectorAll("p");   //can access all these eleents using the p tag
console.log(allParagraphs);

const allParagraphs1 = document.querySelector(".intro-paragraph")
console.log(allParagraphs1); // this only gives the first element with this class name, not all the elements with this class name   

const allParagraphs2 = document.querySelectorAll(".intro-paragraph");       //can access all these elements using the common class name
console.log(allParagraphs2); // this created as an array (a node list) and we can access the elements using the index number
console.log(allParagraphs2[0]); //this will return the first element with this class name

//consider checking for children in an element.
//content editable- allows the content of an element to be edited by the user. It can be set to true or false. By default, it is set to false.

//selecting the second paragraph options
const secondParagraph = allParagraphs2[1];
console.log(secondParagraph);
//secondParagraph.contentEditable = true; // this will allow the user to edit the content of the second paragraph
const secondParagraphByNthChild = document.querySelector(".intro-paragraph:nth-child(2)"); // this will select the second paragraph with the class name intro-paragraph
console.log(secondParagraphByNthChild);
//54:11

//using getElementById
const mainHeadingById = document.getElementById("main-heading");
console.log(mainHeadingById); 

//using getElementsByClassName, there is an s
const introParagraphsByClassName = document.getElementsByClassName("intro-paragraph"); //this returns an array
console.log(introParagraphsByClassName); // this will return an HTML collection of all the elements with the class name intro-paragraph


//Manipulating the DOM
//can manipulate the text or anything about the element using JavaScript. We can change the text content, the HTML content, the style, etc.

mainHeadingById.textContent = "Welcome to the DOM Manipulation"; // this will change the text content of the main heading
mainHeadingById.style.color = "blue"; // this will change the color of the main heading to blue
mainHeadingById.style.fontSize = "100px"; // this will change the font size of the main heading to 100px

//Event Hn=andling
//Event listeners
//can add event listeners to elements to make them interactive. An event listener is a function that will be called when a specific event occurs on an element. For example, we can add a click event listener to a button that will change the text of a paragraph when the button is clicked.

const changeButton = document.querySelector("#change-paragraph"); //querySelector is regarded the mordern way to access elements
changeButton.addEventListener("click", function () {
    secondParagraph.textContent = "Well, the button was pressed, not so?";
    secondParagraph.style.color = "brown";
    secondParagraph.style.fontSize = "50px";
    secondParagraph.style.border = "2px solid orange";
})










//RESEARCH : 
//Why is the nth-child(1) returening null
//DOM manipulation in javascript. w3schools, mozilla developer network