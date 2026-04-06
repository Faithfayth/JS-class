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