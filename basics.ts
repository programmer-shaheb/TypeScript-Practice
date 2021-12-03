let age: number = 5

let languageName: string = "TypeScript"


let arr: number[] = [4,5,8,4]

let person: {
    name: string,
    age: number,
}

person = {
    name: "Max",
    age: 41,
}

let course: string | number = "Hello Web"

course= 50

type Person = string[]

const x:Person = ["dfjkd", "dkfjld", "dkjf"]


const myFunc = (valueOne: string, valueTwo: number) : object => {
    return { name: valueOne, age: valueTwo}
}

myFunc("Akash", 5)