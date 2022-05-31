class Person{
	constructor(number){
		this.number = number;
		Person.instance = this;
	}
	static instance = null;
	static getInstance(){
		if(this.instance!=null){
			return this.instance;
		}
		else{
			this.instance = new Person(0);
			return this.instance;
		}
	}

	
	getNumber(){
		return this.number;
	}
	setNumber(){
		this.number = Date.now();
	}
}

const a = Person.getInstance()
a.setNumber()
const b = Person.getInstance()
const c = Person.getInstance()
console.log(a.getNumber())
console.log(b.getNumber())
console.log(a==c)