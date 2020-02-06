var arr=[["make","Ford"],["model","Mustang"],["year",1964]];

function fromListToObject(arr){
    var newDict={};
    for(var j=0;j<arr.length;j++){
        var a=arr[j];
        key=a.shift();
        val=a.pop();
        newDict[key]=val;
    }
    console.log(newDict);
}
fromListToObject(arr);
