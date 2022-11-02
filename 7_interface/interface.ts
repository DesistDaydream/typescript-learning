// TS 接口，用于定义对象的类型(即.object 类型)。与 Go 中的结构体类似，但是又不完全一样。
// TS 接口由一组属性组成，属性可以是变量、函数、数组。
interface Person {
  // 语法：属性名:属性值
  name: string
  age: number
  // 可选属性
  // 语法：属性名?:属性值
  // 可选属性的含义是该属性可以不存在。
  // 注意：可选属性必须接在必需属性后面。
  optional?: string
}

function NewPerson(): Person {
  return {
    name: "Tom",
    age: 25,
  }
}

let tom: Person = NewPerson()

console.log(tom)

// 接口的属性是函数。
interface FuncInterface {
  // 语法：属性名(参数名:参数类型):返回值类型
  (p: string): void
}
let fn: FuncInterface = (p: string) => {}
fn("hello")

// 接口的属性是数组。
interface ArrayInterface {
  // 语法：[索引:索引的类型]:元素的类型
  [idx: number]: number | string
}
let arr: ArrayInterface = [1, 2, 3, 4, 5, "6"]
