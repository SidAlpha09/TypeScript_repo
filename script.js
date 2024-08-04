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
var a; //defining types in TS
var arr;
var str; //isme future me jaake string aayega
var tup; // isme array me pehle number aayega and string aayega [1,2,'hello']
var variable; // you are unknown ki variable ki type kya hogi
//function func():never{} -> this will never return anything and it will keep in moving showing code unreachable
function func() {
    return 0;
}
function abc() {
    //this does not return anything and console.log things
}
var Direction;
(function (Direction) {
    //grouping variables
    Direction["top"] = "TOP";
    Direction["left"] = "LEFT";
    Direction["right"] = "RIGHT";
    Direction["bottom"] = "BOTTOM";
})(Direction || (Direction = {}));
console.log(Direction.bottom); //accessing the variables
var Human;
(function (Human) {
    Human["name"] = "Coach";
    Human[Human["age"] = 25] = "age";
})(Human || (Human = {}));
console.log(Human.age);
//TYPE INFERENCE
/**
 * apne aap types infer kar leta hai matlb guess kar leta hai implicitly
 * for example let a=12;--> a is number
 */
//Union Intersection Types
/**
 * let variable:string | null -> this variable can be string or null
 */
var var1;
function saw(variable) {
    if (typeof variable === 'number') {
        variable.toFixed(2);
    }
    else if (typeof variable === 'string') {
        variable.toUpperCase();
    }
}
var new_var = {
    name: "siddharth",
    section: "A"
};
