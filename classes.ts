class Earphone{
    price=5000;
    image="images/earphone";
    color="white";

    // member functions knowns as methods
    playmusic(){
        console.log("Playing music")
    }

    switchMode(){
        console.log(
        "change the mode to ANC"
        )
    }
}

//other example class
class Remote{
    color="white";
    category="AC";
    company="Voltas";

    turnOn(){
        console.log("turning on...")
        console.log("turned on successfully")
    }
    turnOff(){
        console.log("turning off...")
        console.log("turned off successfully")
    }
    raiseTemp(){
        console.log("Temp Raised")
    }
}

//another example

type Data=string|null
type Big_numbers=number|null;

class Pendrive{
    company="hp";
    price=1200;
    data:Data=null

    putData(data:Data){
        console.log(`putting some data ${data}`);
        this.data=data
    }

    getData(){
        console.log(this.data)
    }
}

let pendrive = new Pendrive();
pendrive.putData("Hello this is the data pushed")
pendrive.getData()

//Inheritance just like Interfaces
class Equi extends Remote{

}

// ------------------CONSTRUCTORS-----------------

class Speaker {
    
    company:Data=null;
    price:Big_numbers=null;
    capacity:Big_numbers=null;

    //Paramaterized constructors
    constructor(company:Data,price:Big_numbers,capacity:Big_numbers) {
        this.company=company;
        this.capacity=capacity;
        this.price=price
    }

}

//------------------READ ONLY PROPERTIES----------------
class AA{
    //read-only property does not allow you to change the value of that variable
    constructor (public readonly name:string){
        this.name=name;
    }
}