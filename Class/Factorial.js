function fact(n){
  fact=1;
  for(i=0;i<n;i++){
  fact=fact+fact*i;
  }
  console.log(fact);
}
fact(5);

// Using User Input
/*
function fact(num){
    fact=1;
    for(i=1;i<num;i++){
        fact=fact+fact*i;
    }
    alert(fact);
}
var num=parseInt(prompt("Enter any number"));
fact(num);
*/
