var object1={
    name:'ISRO',age:35,role:"Scientist"
};

function convertObjectToList(obj1){
    var l=Object.entries(obj1);
    console.log(l);
}
convertObjectToList(object1);
