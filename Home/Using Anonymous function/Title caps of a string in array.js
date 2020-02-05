var caps=function(){
    var str="this is bala";
    str=str.toLowerCase();
    str=str.split(" ");
    for(var i=0;i<str.length;i++){
        str[i]=str[i][0].toUpperCase()+str[i].slice(1);
        
    }str=str.join(" ");
    console.log(str);    

}
caps();
