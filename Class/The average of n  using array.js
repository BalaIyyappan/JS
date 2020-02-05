var f=function(){
    var n=parseInt(prompt("Enter number of elements in an array"));
    var sum=0;
    var array1=[];
    for(var i=0;i<n;i++){
        array1.push(parseInt(prompt("Enter the element")));
    }

    for(var j=0;j<n;j++){
        sum=sum+array1[j];
    }
    var avg=sum/n;
    alert(avg);
}
f();
