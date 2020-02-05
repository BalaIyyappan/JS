var car=['BMW','AUDI','BENZ','RR','JAGUAR'];
/*To insert at the end
car[car.length]=prompt("Enter any car");
console.log(car);

//To add any value in an array at any posotion
car.splice(1,0,"FORD");
console.log(car);
*/
//without using splice
/* To Know the index of any element
var p=car.indexOf("AUDI");
console.log(p);
*/
for(var i=car.length-1;i>=0;i--){
    car[i+1]=car[i];
    
    if(car[i]=="AUDI"){
        car[i]="LEXUS";
        break;
    }

}
console.log(car);
