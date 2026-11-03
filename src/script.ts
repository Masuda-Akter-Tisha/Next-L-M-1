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
const dhakaLat : readonly [number, number] = [ 23.81033, 90.41252];
