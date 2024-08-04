//any js code is a valid ts code
//but in TS defining variables without any datatype raises warnings as TS compiler does not understands the type of variable

//TS just complains to make the code more clear


//TS FILE TO JS FILE -> tsc script.ts

// types
// primitives and references

//Basic types
// Numbers, String, Boolean
// Arrays, Tuples
// Any, Unknown, Never, Void (Avoid using ANY type in most of the cases)
// Enums

let a:number; //defining types in TS
let arr: [];
let str:string; //isme future me jaake string aayega

let tup:[number,string]// isme array me pehle number aayega and string aayega [1,2,'hello']


let variable:unknown; // you are unknown ki variable ki type kya hogi
//function func():never{} -> this will never return anything and it will keep in moving showing code unreachable
function func():number{ //-> this will return an number
    return 0
}
function abc():void{
    //this does not return anything and console.log things
}

enum Direction{
    //grouping variables
    top="TOP",
    left="LEFT",
    right="RIGHT",
    bottom="BOTTOM"
}
console.log(Direction.bottom)//accessing the variables

enum Human{
    name="Coach",
    age=25
}
console.log(Human.age)

//TYPE INFERENCE
/**
 * apne aap types infer kar leta hai matlb guess kar leta hai implicitly
 * for example let a=12;--> a is number
 */

//Union Intersection Types
/**
 * let variable:string | null -> this variable can be string or null
 */
let var1:string |null;
function saw(variable:number | string){//you are not sure that we you call the fucntion what will be the type of the variable
    if(typeof variable==='number'){
        variable.toFixed(2)
    }
    else if(typeof variable==='string'){
        variable.toUpperCase()
    }
}

//intersection and creating your own types
//this type keyword is used to define new data types
type Classmates={
    section:string
}
type Students={
    name:string
}

//ClassmatesInStudents-> intersection of upper two types
type ClassmatesInStudents=Classmates & Students;
let new_var:ClassmatesInStudents={
    name:"siddharth",
    section:"A"
}