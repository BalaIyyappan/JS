var f=function(){
    var vowel="aeiouAEIOU";
    var count=0;
    var name=prompt("Enter any name");
    for(var i=0;i<name.length;i++){
        if(vowel.indexOf(name[i])!==-1){
            count+=1;
        }
    }
    alert(count);
}
f();
