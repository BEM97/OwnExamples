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





 //this keyword
const person = {
    firstName: "mamd",
    lastName: "reza",
    id      : 112,
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}


//person.fullName()


// this Alone
// When used alone, the owner is the Global object, so this refers to the Global object.

// In a browser window the Global object is [object Window]:
//  let XX =this;







//classes 


class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date =new Date();
        return date.getFullYear()-this.year;
    }
}

let mycar = new Car("Ford",2010);

//mycar.age();
// mycar.name;





//JSON

let teXT = '{"employees":['+
    '{"firstName":"mamd","lastName":"reza"},'+
    '{"firstName":"ali","lastName":"reza"},'+
    '{"firstName":"amir","lastName":"hosen"}]}';

const obj = JSON.parse(teXT);


//obj.employees[0].firstName // mmad




// debugger;
// create breakpoint for debugging in brwoser





// js function call  
//With the call() method, you can write a method that can be used on different objects.

const Person = {
    fullName: function(city,country){
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1={
    firstName:"mmad",
    lastName:"reza"
}

// person.fullName.call(person1,"tehran","iran");










// js function apply  
// The apply() method is similar to the call() method  but with array argoman


// Math.max(1,2,3); //return 3 

// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.


// Math,max.apply(null,[1,2,3,]); // will return 3 null can replace " " or 0 or Math






// js function closure


const add = (function (){
let counter = 0;
return function(){counter +=1;return counter}
})();

// (); end of function is selfinvoking //function call by self  








// Class Inheritance

class Car1 {
    constructor(brand){
      this.carname = brand;
    }
    present(){
        return 'I have a ' + this.carname;
    }
}


class Model extends Car1 {
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}


let myCar = new Model ("saipa","pride");


//myCar.show();





//getter & setter

class Car2 {
    constructor(brand){
        this.carname = brand;
    }
    get getCnam(){
      return this.carname;
    }
    set setCnam(x){
        this.carname = x;
    }
}

let mmadCar = new Car2("irankhodro");


// mmadCar.getCnam;


 // getter notbe used with ();  
//Note: even if the getter is a method, you do not use parentheses 
// when you want to get the property value.


// mmadCar.setCnam("saipa"); // incorrect
 
mmadCar.setCnam="saipa";   // not use ()







//js callback


// function myDisplayer(some){
// document.getElementById("b").innerHTML =some;

// }


// function myCalculator(num1, num2, myCallback){
//     let = sum = num1 + num2;
//     myCallback(sum);
// }


// myCalculator(5, 6, myDisplayer); 


//When you pass a function as an argument, remember not to use parenthesis.
// Right: myCalculator(5, 5, myDisplayer);
// Wrong: myCalculator(5, 5, myDisplayer());








//Asynchronous JavaScript
setTimeout(myfunction10,3000);
function myfunction10(){
    // document.getElementById("b").innerHTML="hi iam mmad!";
}


// In the example above, myFunction is used as a callback.
// myFunction is passed to setTimeout() as an argument.
// 3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.
// When you pass a function as an argument, remember not to use parenthesis.
// Right: setTimeout(myFunction, 3000);
// Wrong: setTimeout(myFunction(), 3000);








// using setInterval fo display time every seconds


setInterval(myFunction11,1000);

function myFunction11(){
    let d = new Date();
//   document.getElementById("b").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();

}



//use callback for waitting for files











//js Promise

// function myDisplayer1(some){
//     // document.getElementById("b").innerHTML=some;
// }


// let myPromise = new Promise(function(myResolve, myReject){
  
//     let x = 0;

//     if (x==0){
//         myResolve("ok");
//     }else{
//         myReject("Error");
//     }

// });


// myPromise.then(
//     function(value){myDisplayer(value);},
//     function(error) {myDisplayer(error);}
// );




//set a timout with promise

// let myPromise = new Promise(function(myResolve, myReject){

//     setTimeout(function(){myResolve("I am mmad");},3000);


// });



// myPromise.then(function(value){
//     document.getElementById("b").innerHTML=value;
// });











//js Async & await

//setTimeout wit Async & await


// async function myDisplay(){
  
//     let myPromise =new Promise (function(resolve){
//         setTimeout(function(){resolve("i am mmad");},3000);
//     });

//     document.getElementById("b").innerHTML = await myPromise;
// }

// myDisplay();










//js validation


// (function inputValidate(){
    
//     // let x =document.getElementById("num").value;
//     let x = 2;
    
//     let text;
//     if(isNaN(x) || x<1 || x>10 ){
//         text = "Input not valid";
//     }else{
//         text = "input ok";
//     }
//     document.getElementById("b").innerHTML=text;
// })();









//js web api 
// geolcation api

// const myElement = document.getElementById("c");

// (function geoLocation(){
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }else{
//         myElement.innerHTML = "geolocation is not supported by browser";
//     }
// })();

// function showPosition(position){
//     myElement.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
// }












// fetch Api

// getText("a.txt");

// async function getText(file){
//     let myObject = await fetch(file);
//     let myText = await myObject.text();
//     document.getElementById("c").innerHTML = myText;
// }





// fetch(file)
// .then(x => x.text())
// .then(y => myDisplay(y));






    // fetch ('https://33ed6528-6a3f-4e2c-b95a-a38f65fa379e.mock.pstmn.io/b.txt')
    // .then(res => res.text())
    // // .then(res => console.log(res))    
    // .then(text => document.getElementById("c").innerHTML= text);







    // fetch ('https://9b7cf01d-4c23-4c3a-b888-a5cb1c15923c.mock.pstmn.io/c')
    // .then(res => res.json())
    // // .then(res => console.log(res))    
    // .then(text => document.getElementById("c").innerHTML= JSON.stringify(text));





   

     

    // fetch('https://api.freerealapi.com/comments')
    // .then(res => res.json())
    // .then(json => console.log(json))

 

//    ( async function getdata(){
//         let myObj = await fetch('https://api.freerealapi.com/comments');
//         let myText = await myObj.text();
//         // let z = JSON.parse(myText);
//         document.getElementById("c").innerHTML=myText;
//     })();

   









   

    // .then(json =>document.getElementById("c").innerHTML="")
    
    // .then(json => document.getElementById("c").innerHTML=JSON.stringify(json));










//AJAX XMLHttpRequest

function getText(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("c").innerHTML = this.responseText;
    }
    xhttp.open("GET","a.txt",true);
    xhttp.send();
}

// getText();







function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
         document.getElementById("c").innerHTML = this.responseText;   
        //  console.log(this.status);
        //  console.log(this.readyState);
        }
    }
    xhttp.open("GET","https://33ed6528-6a3f-4e2c-b95a-a38f65fa379e.mock.pstmn.io/b.txt",true); 

    // in url a.txt = http://127.0.0.1:5500/js-examples/a.txt =  http://localhost:5500/js-examples/a.txt
  
    xhttp.send();
}
//https://fc7a4b2b-3b09-4962-8e59-234aa9479f01.mock.pstmn.io

// loadDoc();

// By sending asynchronously, the JavaScript does not have to wait for
//  the server response, but can instead:

// execute other scripts while waiting for server response
// deal with the response after the response is ready
// The default value for the async parameter is async = true.

// You can safely remove the third parameter from your code.

// Synchronous XMLHttpRequest (async = false) is not recommended because 
// the JavaScript will stop executing until the server response is ready.
// If the server is busy or slow, 
// the application will hang or stop.










document.getElementById("a").innerHTML = fruits.join(" * ");
// document.getElementById("b").innerHTML =mmadCar.getCnam;
