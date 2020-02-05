(function(){
    var arr=[1,2,3,4,5,6,7,8,9,10];
    var primearr=[];
    for(var i=0;i<arr.length;i++){
        var count=0;
        for (var j=1;j<=arr[i];j++){
            if(arr[i]%j==0){
                count+=1;
            }
        }
        if(count==2){
            primearr.push(arr[i]);
        }
    }
    console.log(primearr);
})
();
