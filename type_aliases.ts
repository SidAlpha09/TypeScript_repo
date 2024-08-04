let another_a:number;
let another_b:string;

//primitive type aliases
type Name=string;

let c:Name;//here c is of type Name which is of type string
//defining our own type
type Human1={
    name:string,
    age:number,
    email:string
}
//making a reference variable of human type
let human1:Human1={
    name:"Siddharth",
    age:23,
    email:"sid@sid.com"
}