function fact(n){
  fact=1;
  for(i=0;i<n;i++){
  fact=fact+fact*i;
  }
  console.log(fact);
}
fact(5);
