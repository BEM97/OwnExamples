// const backpack ={
//     name:"evryday Backpack",
//     volume:30,
//     color:"gray",
//     lidopen:false,
//     toggleLid:function(lidStatus){
//         this.lidOpen=lidStatus;
//     }
// };

// old
// function mmad(){
//     return 'hi every body';
// }

//es6
// const mmad = function(){
// return"hi hi hi";
// };

//new es6 arrowfunction
// const mmad =()=>"hi hi hi"

// const mmad=(name="mmad")=>"hi "+name;


//call anynmuos function
// (function(name="mmad"){
//     console.log("hi "+name);
// })("ali")

  


// 

// console.log(backpack);

// console.log(mmad())



//class in js & react
//decleration
class backpack {
    constructor(
        name,
        volume,
        color,
        lidOpen
    ){
        this.name=name;
        this.volume=volume;
        this.color=color;
        this.lidOpen=lidOpen;

    }
    toggleLid(lidStatus){
        this.lidOpen=lidStatus;
    }

}

//insetition نمونه سازی 
// const backpack =new backpack();


export default backpack;

