//All palindromes in an array
var pali=function(){
    var arr=[11,12,33,56,77,121,100,111];
    var pali=[];
    for(var i=0;i<arr.length;i++){
        var temp=arr[i];
        var r=0; var p=0; var val=arr[i];
        while(val>0){
            r=val%10;
            val=parseInt(val/10);
            p=p*10+r;
        }
        if(temp==p){
            pali.push(temp);
        }
    }
    console.log(pali);
}
pali();
