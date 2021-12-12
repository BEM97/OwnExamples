import name from "./Name.js";
import backpack from "./backpack.js";
 
const firstperson =new name(
    "mmad",
    "reza"
);

const everydaybackpack = new backpack(
    "mybackpack",
    45,
    "blue",
    false
);

// console.log(everydaybackpack);
// console.log(firstperson);


//arrays
// const collection =["mmad",5,6,true];
// console.log(collection);

//conditional loop
 const arr=[1,2,3,4,5,6,7,8,9];
 const obj={one:1,two:2,three:3,four:4,five:5};

//  arr.forEach((item,i)=>{
//     console.log(item*2)
//  })


//  for(var i=0;i<arr.length;i++){
//      console.log(arr[i]*2)
//  }


// arr.map((item,index)=>{
// return console.log(item*4)
// })

// for(const item of arr){
//     console.log(item*6)
// }


// for(const [index,item] of arr.entries()){
//     console.log(item*6,index)
// }


// object2arr
// const obj2Arr=Object.entries(obj);
// console.log(obj2Arr)


// const obj2Arr=Object.values(obj);
// console.log(obj2Arr)

// const obj2Arr=Object.keys(obj);
// console.log(obj2Arr)


//loop in objects  
// for(const property in obj){// for loop arr keywords is of
//     console.log(property)
//     console.log(obj[property ])
// }


//Events
 const button=document.querySelector(".cta-button");
 button.addEventListener("click",(event)=>{
     alert("hi");
     console.log("button clicked",event)

 })


 //es6 

 /**
  ghrarday  var estefadeh nakonim
hamesh az lest estefadeh konim
agar khastem  tagher napazer bashd az const 
  */


//  const names=['mmad','ali']; // const mesle var dar js 
// //  names=['amir','masuod'];//can not assigment to constanat varibale
// names.push('hasan') ;//chon names arry hast meshe push kard val nmesh assign kard


// console.log(names);

// //taghernapzer kardan 
// const mounth=Object.freeze(['mehr','aban','azar']);
// mounth.push('day');// object frezz shode gher ghabel tagher



// //default parameter

// const applayDiscount= (price,discount=.1)=>{

//     return price-(price*discount);
// }

// console.log(applayDiscount(100));




//arrow function
// let f= function(args){
//     this.a();// this referr to args

// }
// let arg=args;
// const f=(args)=>{
//     // this.a();// in arrow function this not reffer to args 
//     arg.a();
// }





//spread &  Rest in es6  usefull for doing on meany prameters

//rest
// let sum=(...numbers)=>{
//    return numbers.reduce((prev,current)=>prev+current);
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12));

//speard  bad goft nafhamedam 
// let sum=(x,y)=>{
// return x+y;
// }
// let numbs=[1,2,3]
// console.log(sum(...numbs));


//Template String  harchi bean back cot `` bashe moshkeli ndareh
// let template=`
// <div class="alert"><p></p></div>

// `;
// console.log(template);




//improvment for object in es6

// //object shorthand
// function getperson(){
//     let name="mamd";
//     let age=24;
    
//     // return{//es5(js)
//     //     name:name,
//     //     age:age
//     // };

//     return{//es6
//         name,
//         age
//     };

// }

// console.log(getperson().name)


//method

// function getperson(){
//         let name="mamd";
//         let age=24;
        
//         // return{//es5
//         //     name:name,
//         //     age:age,
//         //     greet:function(){
//         //         return'salam '+this.name;
//         //     }
//         // };

//         return{//es6
//             name,
//             age,
//             greet(){
//                 // return 'salam '+this.name;//es5
//                 return `salam ${this.name}`//es6
//             }
//         };
    
//     }

//     console.log(getperson().greet())





//object distructoring

// let person={
//     NAme:"mmad",
//     age:24
// }

// let {NAme,age}=person;
// console.log(NAme);



//ajax passing  میتونه مشخص کنی کدام پارمتر های پس شده را استفاده کن 

// function getData({result,count}){
//     console.log(result,count);
// }

// getData({
//     name:'mmad',
//     age:24,
//     result:['foo','bar'],
//     count:25,
// });



//class in es6


// //js es5
// function User(username,email){
//     this.username=username;
//     this.email=email;
// }

// User.prototype.changeEmail=function(newEmail){
//     this.email=newEmail;
// }

// let user =new User('mmad','info@mmad.ir');
// user.changeEmail('mmad@gmail.com');
// console.log(user);


//es6
// class User{
//     constructor(username,email){
//         this.username=username;
//         this.email=email;
//     }
// changeEmail(newEmail){
//     this.email=newEmail;
// }
// static register(username,email){
//     return new User(username,email);
// }

//using rest&sperad
// static register(...args){
//     return new User(...args);
// }
// get username(){//getter
//     return this.username;
// }
// set username(username){//setter
//     return this.username=username;
// }


// }


// // let user =new User('mmad','mmad@gmail.com');
// let user =User.register('mmad','mmad@gmail.com');
// user.changeEmail('info@mmad.ir');
// console.log(user);









//handel error log

// function log(strategy){
//     strategy.handel();
// }

// log(new class{
//     handel(){
//         alert('handeled by alert');// change here but function not changed
            // console.log("handeled by alert");

//     }

// });







//modules in es6
// export and import 



// //promise in es6
// //خیلی بد توضیح داد زیاد نفمهمیدم 

// let thing =new Promise(function(resolve,reject){
//     console.log('Init promise');
//     setTimeout(function(){
//         console.log('Done');
//     },2000)

//     // resolve();
//     reject();
// });

// // thing.then(function(data){
// // console.log('finished')

// // });

// thing.catch(function(err){
//     console.log('error')
// });






//String in es6
//includes
//startsWith('g',8) از کارکتر هشتم به بعد ببین با جی شروع میشه 
//endsWith
//repeat تکرار میکنه 
// let title ='Iran is great';
// if(title.repeat('Iran')){
//     console.log('yes');
// }else{
//     console.log('no');
// }

// console.log(title.repeat(5));








//Arrys in es6

// console.log([2,4,6,8,10].indexOf(2)>-1) //es5

// console.log([2,4,6,8,10].includes(2));

//find خود ایتم رو برمیگردونه
//findIndex  ایندکسشو میده
// console.log([2,4,6,8,10].findIndex(function(item){

//     return item ===8;
// }));




// [].fill();
// [].keys();
// [].values();
// [].entries();


 

// ex for .find

// class User{
//     constructor(name,isAdmin){
//         this.name=name;
//         this.isAdmin=isAdmin;
//     }
// }

// let users=[
//     new User('mmad',true),
//     new User('ali',true),
//     new User('amir',false),
// ];


// console.log(

//     users.find(user=>user.isAdmin).name

// );





// //ex for entries

// let items=[
//     'mmad',
//     'ali',
//     'amir'
// ].entries();

// console.log(items);


// //forof 
// //forin
// for (let name of items){
//     console.log(name)
// }






//Generators in es6

// function* numbers(){} or function *numbers(){}

// function *numbers(){
//     console.log('Begin');
//     // یلد مثل ریترن میومنه ولی وقتی ریترن میکنه از تابع بیرون نمیره میتونه بره یلد بعدی
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let iterator = numbers();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// // console.log(numbers());


//ex for Generators

// function *range(start,end){
//     while(start<=end){
//         yield start;
//         start++;
//     }
// }

// console.log(...range(1,5));






//set in es7
//ست یک کلاس هست که در پارامتر هاش ارایه هست

// let items=new Set(['one','two','three','two']);//ست ها یونیک هستند و تکرار رو قرار نمیدن در خروحی کنسول

// console.log(items);

// items.size
// items.add
// items.delete
// items.has
// items.forEach
// items.clear