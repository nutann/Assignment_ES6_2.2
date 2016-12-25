'use strict'
import calculation from 'calculation';
//import myCal from 'myCal';

//import gives error .. please resolve

class calculation {

	add(a,b){
	return a+b;
}
 substract(a,b){
	return a-b;
}
multiply(a,b){
	return a*b;
}

square(a){
	return a*a;
}

};

function display(){

	let cal = new calculation;
	console.log (cal.add(10,20));

	console.log (cal.substract(20,10));
	console.log (cal.multiply(10,20));
	console.log (cal.square(10));
}

