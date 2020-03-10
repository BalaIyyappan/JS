function bgcolor(){
	let cArray=['red','yellow','green','lime','blue','purple']
	let randomColor=Math.floor(Math.random()*cArray.length);
	// console.log(randomColor);
	document.body.style.backgroundColor=cArray[randomColor];
}
