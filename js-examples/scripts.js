function biggerText(){
    document.getElementById("myP").style.fontSize = "55px";
}

// let text1 ="mamd";
// let text2 = "reza";
// let text3 = text1 + " " + text2;
// document.getElementById("a").innerHTML=text3;

const fruits = ["Banana","Orange","Apple","Mango"];

// let fruit = fruits.pop(); 
// let lenght = fruits.push("Kiwi");
// let fruit = fruits.shift();
// fruits.unshift("Lemon");
// fruits[0]="melon";
// fruits [fruits.length] = "chery";

// delete fruits [0]; // deleted item changed to  undefined

// document.getElementById("a").innerHTML = fruits.toString();

const myGirls = ["Cecilie","Lone"];
const myBoys = ["Email","Tobias","Linus"];
const myChildern = myGirls.concat(myBoys);
myChildern.concat("mmad");
 //The concat() method does not change the existing arrays. It always returns a new array.

// const citrus = fruits.slice(1);
//The slice() method creates a new array. It does not remove any elements from the source array


const citrus = fruits.slice(1, 3);
// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, 
// and up to (but not including) the end argument.


fruits.sort(); 
//The sort() method sorts an array alphabetically.



fruits.reverse();
// The reverse() method reverses the elements in an array.
// You can use it to sort an array in descending order




const points = [40, 60, 2 ,20,10,1];
// const a = points.sort(); //By default, the sort() function sorts values as strings.

 const a =points.sort(function(a, b){return a - b});

//  points.sort(function(a, b){return b - a}); //descending


const numbers = [45,20,40,2,8,40,62];
let txt ="";
numbers.forEach(myfunction);

function myfunction(value, index, array){
    txt += value + "<br>";
}


const numbers2 = numbers.map(myfunction1);
function myfunction1(value, index, array){
    return value * 2;
}

const over30 = numbers.filter(myfunction3);
function myfunction3(value, index, array){
    return value > 30 ;
}


// let sum = numbers.reduce(myfunction4,20);
let sum = numbers.reduceRight(myfunction4);

function myfunction4(total,value, index, array){
    return total + value;
}

let allOver20 = numbers.every(myfunction5);
let someOver20 = numbers.some(myfunction5);
function myfunction5(value, index, array){
    return value > 20;
}


// let position = numbers.indexOf(40)+1;
// let position = numbers.lastIndexOf(40)+1;
// let position = fruits.includes("Mango");

// let first = numbers.find(myfunction6);
let first = numbers.findIndex(myfunction6);
function myfunction6(value, index, array){
    return value>20;
}

const myarray = Array.from("mohammadreza");


const keys = fruits.keys();
let text = "";

for (let x of keys){
    text += x + "<br>";
}


//js date



const d = new Date();

const d1 = new Date(1997,2,6,15,30,20,0);

const d2 = d.toUTCString();
const d3 = d.toDateString();
const d4 = d.toISOString();



const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const d = new Date();
let day = days[d.getDay()];



function getRandInteger(min,max){
    return Math.floor(Math.random() * (max - min +1 )) + min;
}

const rand = getRandInteger(5,20)





//bollean

let x = false;
let y = new Boolean(false);
// x.typeof(); //is return boolean
// y.typeof(); //is return object

// When using the == operator, x and y are equal
// When using the === operator, x and y are not equal


// (x == y) true of false?

// let x = new Boolean(false);
// let y = new Boolean(false);
// (x === y) true of false?

// let x = new Boolean(false);
// let y = new Boolean(false);
// Comparing two JavaScript objects always return false.





// ternary operator

// let voteable = (age > 18) ? "Too young":"old enough"





//sets

// const letters =  new set(["a","b","c"]);

const letters = new Set();

// letters.add("a");
// letters.add("b");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c"); //If you add equal elements, only the first will be saved



const A = "a";
const b = "b";
const c = "c";

letters.add(A);
letters.add(b);
letters.add(c);






//maps

// const Fruits = new Map ([
// ["apples",500],
// ["bananas",300],
// ["oranges",200]
// ]);

const Fruits = new Map();

Fruits.set("apples",500);
Fruits.set("bananas",300);
Fruits.set("oranges",200);

Fruits.set("apples",700); //he set() method can also be used to change existing Map values

const key = Fruits.get("apples");  //The get() method gets the value of a key in a Map

// Fruits.size; //The size property returns the number of elements in a Map



let TExt ="";

Fruits.forEach(function(value, key){
    TExt += key + ' = ' + value;
})


let texT ="";
for (const x of Fruits.entries()){
    texT += x;
}



//JavaScript Type Conversion

// const AA = Number("3.14"); // return 3.14
// const AA = Number("3 14"); // return NaN
// const AA = Number(" "); // return 0 


// let Y1 = "5"; // y is a string 
// let X1 = + Y1; // X1 is a number


// converting numbers to strings

// const AA = String(12+3);
// const AA = (12+3).toString();





//JavaScript Regular Expressions


let text1 = "Visit W3Schools!";
// let n = text1.search("W3Schools");
let n = text1.search(/w3schooLs/i); // i modefire means incaseseseive

// let result = text1.replace("W3Schools","mmad");
let result = text1.replace(/w3schools/i,"mmad");


// Modifiers can be used to perform case-insensitive more global searches:
// 
// Modifier	Description	Try it
// i	Perform case-insensitive matching	
// g	Perform a global match (find all matches rather than stopping after the first match)	
// m	Perform multiline matching




//test()


// const pattern =/e/;

//  const a2=pattern.test("hi iam e");

//  for shortended   /e/.test("The best things in life are free!");



//exec()

 const a2=/e/.exec("hi iam even");





document.getElementById("a").innerHTML = fruits.join(" * ");
document.getElementById("b").innerHTML = a2;

