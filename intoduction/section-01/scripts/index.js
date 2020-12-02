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
let revenue_USD = [123, 45, 100, 45, 78];

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

if (day === "Monday") {
    console.log("if-day is Monday....");
} else if (day !== Monday) {
    console.log("else-if-day !== Monday....");
} else {
    console.log("Else block");
}

console.log("=================================================================");
console.log("Functions# func multiply(a,b)");

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 2));
console.log(multiply(2, 4));
console.log(multiply(2, 6));
console.log(multiply(2, 8));
console.log(multiply(2, 10));

console.log("=================================================================");
console.log("Events#OnClick");

let refreshButton = document.getElementById("refresh_btn");

refreshButton.onclick = function() {
    alert("Confirm refresh!");
}

let productImage = document.getElementById("product-img");

productImage.onclick = function() {
    let imgSrc = productImage.getAttribute('src');
    console.log("onclick imageSrc = " + imgSrc);
    if (imgSrc === "images/img-a.png") {
        console.log("Setting property b");
        productImage.setAttribute('src', 'images/img-b.jpg');
    } else {
        console.log("Setting property a");
        productImage.setAttribute('src', 'images/img-a.png');
    }
}

console.log("=================================================================");
console.log("ConvertNumbers");

let number = "254";

let actualNumber = parseInt(number);

console.log("Parsed Number " + actualNumber);

console.log("=================================================================");
console.log("Javascript Objects");

let user = { name: 'Joel', age: 21, location: 'Kazabuni', Password: 'pass***wd', email: 'user***@gmail.com' };

console.log(user);

user.name = 'Joel Osero';

console.log(user);


console.log("=================================================================");
console.log("Switch-Case Statements");

let ageInput = document.getElementById('age');
let submitAgeBtn = document.getElementById('submit_age');
let messageLabel = document.getElementById('age_check_msg');

messageLabel.textContent = "Enter age to get elvaluation report.";

submitAgeBtn.onclick = function() {

    let enteredAge = parseInt(ageInput.value);

    switch (enteredAge) {
        case 18:
            console.log("Age is exactly 18");
            messageLabel.textContent = 'Age is exactly 18';
            break;
        case 21:
            console.log("Age is exactly 21");
            messageLabel.textContent = 'Age is exactly 21';
        default:
            messageLabel.textContent = 'Variable age entered as ' + enteredAge;
            console.log("Variable age entered as " + enteredAge);
            break;

    }
}

console.log("=================================================================");
console.log("Arrays#IndexedCollections");
let uuids = ['uuid1', 'uuid2', 'uuid3', 'uuid4', 'uuid5'];

uuids.forEach(function(uuid) {
    console.log('individual uuid ' + uuid);
    let ul = document.getElementById('uuids');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(uuid));
    ul.appendChild(li);
});

console.log("=================================================================");
console.log("Maps#KeyedCollections");

let iphoneReleases = new Map();

iphoneReleases.set('2007', 'iPhone 1 ');
iphoneReleases.set('2008', 'iPhone 2');
iphoneReleases.set('2009', 'iPhone 3');
iphoneReleases.set('2010', 'iPhone 4');
iphoneReleases.set('2011', 'iPhone 5');
iphoneReleases.set('2012', 'iPhone 6');
iphoneReleases.set('2013', 'iPhone 7');
iphoneReleases.set('2014', 'iPhone 8');
iphoneReleases.set('2015', 'iPhone 9');
iphoneReleases.set('2016', 'iPhone 10');

let _2016Release = iphoneReleases.get('2015');

console.log('2016 release ' + _2016Release);


console.log('|  Year |  Version   | ');
for (let [key, value] of iphoneReleases) {
    console.log('|  ' + key + ' |   ' + value + '   |');
}
console.log("=================================================================");
console.log("Exception Handling");

console.log("Throw Exception");

throw 'Too much traffic Error';
throw 'Too much traffic Error';