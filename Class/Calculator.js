// The calculator runs until the sum of maximum of 10 numbers. If negative number is entered, loops terminates and sum is displayed.
function calculator(){
    sum=0;
    for(i=0;i<10;i++){
        var a=parseInt(prompt("Enter the number"));
        if (a>=0){
        sum=sum+a;
    }
    else{
        break;
    }
    }
alert("Sum is "+sum);
}
calculator();
