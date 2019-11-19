//var age: number = 20

//var age: number="too old"

// function printPerson(name:string, age:number){

//     //console.log(`Name: ${name} age:${age}`)

    

// }

// //printPerson("Billy",8)

// printPerson(8,"Billy")

class Product{
    title: string;
    price: number;
       id: number;

       constructor(id: number){
           this.id = id
       }

printDetails(){
    console.log(`Title: ${this.title}`)
    console.log(`ID: ${this.id}`)
    console.log(`Price: ${this.price}`)
}

}

interface Bookable{

    availableDates: [Date]

}

interface Cancelable{

    cancelationFee: number
}

class Tour extends Product implements Bookable,Cancelable{
    availableDates: [Date];
    cancelationFee: number;
    duration : string;

    constructor(id: number,duration: string){
        super(id);
        this.duration =duration
    }

    printDetails(){

        super.printDetails()

        console.log(`Duration: ${this.duration}`)
    }
}

class Dining extends Product{

    cuisine: string
    childPrice: number

    constructor(id: number,cuisine :string,childPrice: number){
        super(id);
        this.cuisine = cuisine
        this.childPrice = childPrice
    }

    printDetails(){

        super.printDetails()

        console.log(`Cuisine: ${this.cuisine}`)
        console.log(`ChildPrice: ${this.childPrice}`)
    }
}

interface ConfigOption{
    directory: string
    file: string
    maxSize?: number
}


function configSomething(op: ConfigOption){

    op.maxSize = op.maxSize || 1024
    console.log("Directory: %s",op.directory)
    console.log("File: %s",op.file)
    console.log("Max size: %s",op.maxSize)
}

function cancelBooking(c: Cancelable){
    console.log("Cancelling booking. charges: %d", c.cancelationFee)
}

function cancelBooking2<T extends Cancelable & Product>(c: T){

    console.log("Cancelling: %s (%d)", c.title, c.id)
    console.log("Price: %d", c.price)
    console.log("Cancelation fee: %d", c.cancelationFee)
    console.log("Total refund: %d", c.price- c.cancelationFee)
}

function test(p:Product){
    p.printDetails()
}

var t = new Tour(1,"8 hours")
t.title= "Trip to the taj mahal"
t.price= 1200
t.cancelationFee =100

//cancelBooking(t)
//cancelBooking2(t)


test(t)

configSomething({
    directory: "/dir1",
    file: "persons,json"
   // path: "persons,json"
})

var d = new Dining(2," burger",4)
d.title= "Trip to the NY"
d.price= 2000

test(d)