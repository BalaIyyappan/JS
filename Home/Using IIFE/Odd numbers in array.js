(function(){
    var array=[];
    var n=parseInt(prompt("Enter the range"));
    for(var i=1;i<=n;i++){
        if(i%2!=0){
            array.push(i);
        }
    }
    console.log(array);
})
();
