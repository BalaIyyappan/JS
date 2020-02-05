//Passing Function as parameter to another function
var f=function(){
    console.log("Hello");

}
var g=function(a){
    a();
}
g(f);
