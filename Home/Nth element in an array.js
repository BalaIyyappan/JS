function getNthElement(array,n){
    if(array.length==0){
        alert("Undefined");
    }
    else if(array.length>0){
        alert(array[n]);
    }
    else{
        alert("No Element Found");
    }
}
getNthElement([1,3,5],1);
