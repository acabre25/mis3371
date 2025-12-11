
/*
Name:Ashley Cabrera
Date last edited: 1
Date created:
version:1
Description Homework 1 JS
*/


//dynamic date js code
const d= new Date () ;
let text= d.toLocaleDateString();
document.getElementById("today").innerHTML = text;


// name slider js code
let slider = document.getElementById("ranger");
let output = document.getElementById("ranger-slider");
output.innerHTML= slider.value;
slider .oninput = function (){
   output.innerHTML = this.value;
};
