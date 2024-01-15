// Type assertions(类型断言)
let someValue: any = "this is a string"
let strLengthOne: number = (<string> someValue).length
let strLengthTwo: number = (someValue as string).length

console.log(strLengthOne)
console.log(strLengthTwo)
