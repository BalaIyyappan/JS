//Remove duplicates in an array
var dup=function(){
    var arr=[1,2,3,4,5,1,3,2];
    var dup=[];
    var count=0;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<dup.length;j++){
            if(arr[i]==dup[j]){
                count+=1;               
            }
        }
        if(count==0){
        dup.push(arr[i]);}
    }console.log(dup);
}
dup();
