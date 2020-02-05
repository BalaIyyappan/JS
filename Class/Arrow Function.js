//Arrow Function
//Used To Do the function in single line
var a=()=>console.log("Hello");
a();

var s=(a,b)=>a*b;
console.log(s(1,2));

var sqr= a =>a*a;
console.log(sqr(5));

//To enter multiple lines within the arrow function
var sum=a=>{
  return a*a;
}
console.log(sum(2));
