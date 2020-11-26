
//variable declaration with let
let studentName = "Sammy Njoroge";
let age = 45;
let height = 175;

//DOM manipulation Element access basics
const headingText = document.querySelector('h1');
const headingTwo = document.querySelector('h2');
const ageSpan = document.getElementById('student_age');
const nameSpan = document.getElementById('student_name');
const heightSpan = document.getElementById('student_height');

console.log("=================================================================")

//Set properties of Elements
headingText.textContent = "Hello javaScript DOM";
headingTwo.textContent = "Hello Heading Two";
ageSpan.textContent = age;
nameSpan.textContent = studentName;
heightSpan.textContent = height + " centimeters";

console.log("=================================================================")

console.log("Arrays");
//Arrays
let revenue_USD = [123,45,100,45,78];

console.log("Revenue IN USE");
console.log(revenue_USD);

console.log("=================================================================")
console.log("Operators");

//Operators
//Additions
console.log("Operators#Additions");

let beans = 150;
let maize = 45;

console.log("Inputs Beans: " + beans + " Maize: " + maize);

let sum = beans + maize;

console.log("Maize + Beans = " + sum);

console.log("Operators#Subtraction");

let subtract = beans - maize;

console.log("Beans = maize = " + subtract);

console.log("Operators#Multiplication");

let mult = beans * maize;

console.log("Maize * Beans = " + mult);

console.log("Operators#Division");

let division = beans / maize;

console.log("Beans / Maize = " + division);

console.log("Operators#Equality ===");

let isEqual = beans === maize;

console.log("beans === maize = " + isEqual);

console.log("1 === 1 = " + (1 === 1));

console.log("Operators#Negate-Equality !==");

isEqual = beans !== maize;

console.log("beans !== maize " + isEqual);

console.log("1 !== 1 = " + (1 !== 1));

console.log("=================================================================");

console.log("Conditionals if...else...elseif");

let day = "Monday";
let year = 2020;
let month = 11;

if(day === "Monday"){
  console.log("if-day is Monday....");
}else if(day !== Monday){
  console.log("else-if-day !== Monday....");
} else {
  console.log("Else block");
}

console.log("=================================================================");
console.log("Functions# func multiply(a,b)");

function multiply(a,b){
  return a * b;
}

console.log(multiply(2,2));
console.log(multiply(2,4));
console.log(multiply(2,6));
console.log(multiply(2,8));
console.log(multiply(2,10));

console.log("=================================================================");
console.log("Events#OnClick");

let refreshButton = document.getElementById("refresh_btn");

refreshButton.onclick = function(){
  alert("Confirm refresh!");
}

let productImage = document.getElementById("product-img");

productImage.onclick = function(){
  let imgSrc = productImage.getAttribute('src');
  console.log("onclick imageSrc = " + imgSrc);
  if(imgSrc === "images/img-a.png"){
    console.log("Setting property b");
    productImage.setAttribute('src', 'images/img-b.jpg');
  } else {
    console.log("Setting property a");
    productImage.setAttribute('src', 'images/img-a.png');
  }
}
