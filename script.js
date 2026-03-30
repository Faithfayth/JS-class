//Conditional statements, maeks gradding system following ABC... structure
// marks variables
//student input marks
//process grades
//output the grade
console.log("Hello, here are your marks.")

let maths = 80;   //declaring the variables
let phy = 100;
let bio = 90;
let geo = 99;
let chem = 90;
let grade;
let finalMark;

finalMark = (maths+phy+bio+geo+chem)/5;  //calculate the final mark

if (finalMark>=0 && finalMark<40) {      //logical expressions
    grade  = "O";
} else if (finalMark>=40 && finalMark<60) {
    grade  = "E";
} else if (finalMark>=60 && finalMark<70) {
    grade  = "D";
} else if (finalMark>=70 && finalMark<80) {
    grade  = "C";
} else if (finalMark>=80 && finalMark<90) {
    grade  = "B";
} else if (finalMark>=90 && finalMark<=100) {
    grade  = "A";
} else {
    grade = "INVALID MARKS!";
}

console.log(grade);

//concatenation







