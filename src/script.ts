//Basic Type
// let myString : string = 'Programming Hero'; explicit
// let myNumber : number = 345;
// let myBoolean : boolean = true;
// let mySymbol : symbol = Symbol();
// let myBigInt : bigint = 100n;

// let myName = 'Tisha'; implicit
// myName = 456;

// Type safe function
const add = (a : number, b : number) => {
    return a + b;
}

console.log(add (90, 20));

// Array and tuple an readonly modifier

// const arr : Array<string> = ['Programming', 'hero'];
const arr : string [] = ['Programming', 'hero'];
const numArr : number [] = [10, 45, 30];

//  tuple an readonly modifier
const dhakaLatLong : readonly [number, number] = [ 23.81033, 90.41252];


// optional, default, rest parameters (...args)

// optional
const concatName = (firstName : string, lastName ?: string) => {
    if (!lastName) {
        return firstName;
    }

    return firstName + " " + lastName;
}

console.log(concatName ('Tisha'));

// default
const greetings = (FirstName : string, greetings = 'hello',) => {
 console.log(greetings + ", " + FirstName);
}

greetings ('Tisha');

// rest parameter (...args)
 
const sum = (...numbers : number []) => {
    return numbers.reduce ((total, sum) => total + sum , 0);
}

console.log(sum (1, 2, 3, 4, 5));

const logUsersAction = (...args : [name: string, age: number, isActive: boolean]) => {
    const [name, age] = args;
    console.log(name + 'is' + age);
}

logUsersAction ('Tisha', 24, false);

// object type, type alias, interface
type UserName = string;
type Address = {
    streetName : string,
    holdingNumber : number
}  //for concern of separation / atomic

type TUser = {
    name : UserName, 
    age : number, 
    isActive : boolean, 
    action : () => void, 
    badge : string [],
    address : Address
        
}

interface IUser  {
    name : string, 
    age : number, 
    isActive : boolean, 
    action : () => void, 
    badge : string []
}

 const user : TUser = {
        name : 'Tisha',
        age : 24,
        isActive : true,
        action : () => console.log('Hello'),
        badge : ['abc','def'],
        address : {
            streetName : 'green road',
            holdingNumber : 1012
        }
};

// user.email = '@gmail.com';
// user.address;
