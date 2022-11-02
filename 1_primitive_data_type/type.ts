// TS 原始数据类型

// Boolean
let isDone: boolean = false

// Number
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744
let notANumber: number = NaN
let infinityNumber: number = Infinity

// String
let myName: string = "Tom"
let myAge: number = 25
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`

// Array
let arrayType: number[] = [1, 2, 3]
let arrayTypeWithTypename: Array<number> = [1, 2, 3]

// Tuple(元组)
let x: [string, number]
x = ["hello", 10] // OK
// 下面的代码将会报错：不能将类型“string”分配给类型“number”
// x = [10, "hello"] // Error

// Enum(枚举)
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green

enum Color {
  RedTwo = 1,
  GreenTwo,
  BlueTwo,
}
let colorName: string = Color[2]

// Any(任意)
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false // okay, definitely a boolean

let list: any[] = [1, true, "free"]
list[1] = 100

// Void(空)
function warnUser(): void {
  alert("这是我的警告消息")
}

let unusable: void = undefined

// Null and Undefined
let u: undefined = undefined
let n: null = null

// Never
function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error("Something failed")
}

function infiniteLoop(): never {
  while (true) {}
}

// Type assertions
let someValue: any = "this is a string"
let strLengthOne: number = (<string>someValue).length
let strLengthTwo: number = (someValue as string).length
