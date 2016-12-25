'use strict'
class verhicle {

constructor(name,type) {
	this.name = name;
	this.type = type;
}

getname(){
	return this.name;
}

gettype() {
	return this.type;
}

};

class car extends verhicle{
	constructor(name,type){
		super(name,type);
	}
}


class jeep extends verhicle{
	constructor(name,type){
		super(name,type);
	}
}


class bike extends verhicle{
	constructor(name,type){
		super(name,type);
	}
}

let carobj = new car("Swift","4wheeler");

let jeepobj = new car("mahindra","4wheeler");

let bikeobj = new car("pulsar","2wheeler");

console.log("car model = " +carobj.name);

console.log("jeep model = " +jeepobj.name);

console.log("bike model = " +bikeobj.name);