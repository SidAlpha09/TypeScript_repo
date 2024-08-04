// interface creates object and classes ka shape
type sankhya=number;
interface User{
    name:string,
    username:string,
    age:number,
    email:string,
    password:string
}

function getUser(user:User){
    user.name="sohan"
}


//extend

interface Food{
    name:string,
    price:number
}
interface MithaiFood extends Food{
    sweet:boolean
}

function getMithai(mitha:MithaiFood){
    // mitha.name
    // mitha.price
    // mitha.sweet contains all the three variables
}