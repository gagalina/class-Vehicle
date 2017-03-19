class Vehicle{
	
	constructor(name, price, move){
		this.name = name;
		this.price = price;
		this.move = move;
		
	}
	
	go(){
		console.log(this.name + " " + this.move + "`s");
	}

	toString(){
		return "This is "+ this.name + " it costs " + this.price + " thousand dollars";
	}
}

class Car extends Vehicle{
	constructor(brand, move, price, country, model, engine){
		super(brand, price, move);
		this.model = model;
		this.country = country;
		this.engine = engine;
	}
	
	toString(){
		return super.toString() + ' it is from ' + this.country + "; engine: " + this.engine + "; model: " + this.model;
	}
}

class Plane extends Vehicle{
	constructor(brand, move, model, country, type){
		super(brand, move);
		this.model = model;
		this.country = country;
		this.type = type;
	}
	toString(){
		return super.toString() + ' it is from ' + this.country + "; type: " + this.type + "; model: " + this.model;
	}
}

class Cycle extends Vehicle{
		constructor(brand, move, country, type, counOfWheels){
		super(brand, move);
		this.country = country;
		this.type = type;
		this.counOfWheels = counOfWheels;	
	}
	toString(){
		return super.toString() + ' it is from ' + this.country + "; type: " + this.type + "; count of wheels: " + this.counOfWheels;
	}
}

let tesla = new Car("Tesla", "ride", 90, "USA", "S", "Electrical");
let teslaStr = tesla.toString();
console.log(teslaStr);
tesla.go();



