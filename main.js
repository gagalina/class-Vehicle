class Vehicle{
	
	constructor(name, price){
		this.name = name;
		this.price = price;
		
	}
	
	go(move){
		this.move = move;
		console.log(this.name + " " + this.move + "`s");
	}

	toString(){
		return "This is "+ this.name + " it costs " + this.price + " thousand dollars";
	}
}

class Car extends Vehicle{
	constructor(brand, price, country, model, engine){
		super(brand, price);
		this.model = model;
		this.country = country;
		this.engine = engine;
	}
	
	toString(){
		return super.toString() + ' it is from ' + this.country + "; engine: " + this.engine + "; model: " + this.model;
	}
}

class Plane extends Vehicle{
	constructor(brand, model, country, type){
		super(brand);
		this.model = model;
		this.country = country;
		this.type = type;
	}
	toString(){
		return super.toString() + ' it is from ' + this.country + "; type: " + this.type + "; model: " + this.model;
	}
}

class Cycle extends Vehicle{
		constructor(brand, country, type, counOfWheels){
		super(brand);
		this.country = country;
		this.type = type;
		this.counOfWheels = counOfWheels;	
	}
	toString(){
		return super.toString() + ' it is from ' + this.country + "; type: " + this.type + "; count of wheels: " + this.counOfWheels;
	}
}

let tesla = new Car("Tesla", 90, "USA", "S", "Electrical");
let teslaStr = tesla.toString();
console.log(teslaStr);
tesla.go("ride");

let boeing = new Plane("Boeing", "737", "USA", "Passenger");
boeing.go("fly");


let trek = new Cycle("Trek", "USA", "mountain", 2);
trek.go("ride");



