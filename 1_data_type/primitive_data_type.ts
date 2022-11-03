// 如果一个文件不带有顶级的 import 或 export 声明，那么它的内容被视为全局可见的（因此对模块也是可见的）。
// 如果不写 export{}，则这个文件中的所有变量都是全局变量，
// 比如在其他文件也声明了 isDone 变量，那么将会报错：
// 无法重新声明块范围变量“isDone”。ts(2451)
export { isDone }
// import 与 export 属于 Module(模块) 知识点，在后面单独的目录中进行详解

// TS 原始数据类型
// Boolean(布尔)
let isDone: boolean = false

// Number(数字)
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744
let notANumber: number = NaN
let infinityNumber: number = Infinity

// String(字符串)
let myName: string = "Tom"
let myAge: number = 25
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`

// 常量类型
// 鼠标移动到 numConstType 上可以发现，numConstType 类型为1，即常量的值就是常量的类型
// 这个变量的类型名称就是 1，而不是 number
const numConstType = 1

// Tuple(元组)
let x: [string, number]
x = ["hello", 10] // OK
// 下面的代码将会报错：不能将类型“string”分配给类型“number”
// x = [10, "hello"] // Error

// Enum(枚举)
enum StatusCode {
  scuess = 200,
  notFound = 404,
  serverError = 500,
}
let statusCode: StatusCode = StatusCode.scuess
console.log(statusCode) // 200
// 获取 StatusCode 中值为 200 的属性名称
console.log(StatusCode[200]) // scuess;

enum Color {
  RedTwo = 1,
  GreenTwo,
  BlueTwo,
}
let colorName: string = Color[2]
// 属性的默认值是在前一个属性的基础上递增，所以下面会输出值为 2 的属性，即.GreenTwo
console.log(colorName)
// 第一个属性的默认值为 0

// Void(空)
// 若函数没有返回值，则函数的类型就是 void
let voidFunc = function voidFuncDemo() {
  console.log("把鼠标移动到 voidFunc 上，可以看到它的类型是 void")
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

// Union Types(联合类型)
let unionType: string | number
unionType = "seven"
unionType = 7

// Intersection(交叉类型)
let intersectionType: { name: string } & { age: number }
intersectionType = { name: "Tom", age: 25 }
// 只给一个将会报错，因为两个都要给
// intersectionType = { name: "Tom"} // 这个将会报错
