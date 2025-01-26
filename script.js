                                           // var global level
var a = 10;
if (true) {
  var a = 20;
  console.log(a);
}
console.log(a);

                                          // let block level
let a = 10;
if (true) {
  let a = 20;
  console.log(a);
}
console.log(a);

let a = 10;
let a = 20;
// it gives error

var a = 15;
var a = 30;
// anser will be 30

// hosting
// if you call variable and declare variable before or after the console it does'nt matter its called hosting
// hosting can't use with let and const

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.warn(i);
  }, 1000);
}

// Prints only 10
// to resolve this issue we use let instead of var because let is block level variable and var is global level variable
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.warn(i);
  }, 1000);
}

// default parameters
function add() {
    return 10 + 20;
  }
  console.log(add);
  
  function  plus(a,b){
      return a+b
  }
  console.log(add(10,20));
  console.log(add(20));
  // it returns NaN not a number to resolve this we use default parameters
  
  
  function sum(a,b=10){
  return a+b
  } console.log(add(10));
  
  // can you pass a function in a default parameter?
  //yes

  function someVal(){
      return 100;
  }
  function sum(a,b=10 ,c=someVal()){
      return a+b+c;
      } console.log(add(10));
  
  // you can pass numbers and string as well
  function someVal(){
      return "first";
  }
  function sum(a,b= "middle" ,c=someVal()){
      return a+ " " +b+ " " +c;
      } console.log(sum("last"));
  
  function main(a,b=main()){
      return a+b;
  }
  main();
  
  // Template literals
  // template literals are used to call string literals as well
  function funName(){
      return "John";
  }
  let quote = "either you run the code or code or code runs you"
  let by = "Maryam"
  let user = "Ellen"
  x = 20;
  y = 15;
  console.log("either you run the code or code or code runs you " + "Maryam");
  console.log(`either you run the code or code or code runs you 
      Maryam` );
      console.log(`either you run the code or code or code runs you 
          ${by} ${user} ${funName()} ${x+y}` );