var rot=function(){
    var n=parseInt(prompt("Enter the number of Rotations"));
    var arr=[1,2,3,4,5,6];
    var temp=[];
    var l=arr.length;
    
    for(var i=l-n;i<l;i++){
        temp.push(arr[i]);
    }
    for(var j=0;j<l-n;j++){
        temp.push(arr[j]);
    }
    console.log(temp);
}
rot();
