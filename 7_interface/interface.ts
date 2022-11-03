// TS 通过 interface 关键字定义一个新的数据类型。与 Go 中的结构体类似，但是又不完全一样。
// 这个新的数据类型由多个属性组成，每个属性都有自己的类型，属性可以是变量、函数、数组。
// 在 TS 内由于每种类型都有一个原型类，即 object，也可以说 interface 是用于定义 object 的类型。
interface Person {
  // 语法：属性名:属性值
  name: string
  age: number
  // 可选属性
  // 语法：属性名?:属性值
  // 可选属性的含义是该属性可以不存在。
  // 注意：可选属性必须接在必需属性后面。
  optional?: string
  // 只读属性
  // 语法：readonly 属性名:属性值
  // 只读属性的含义是只能在对象刚刚创建的时候修改其值。
  readonly id: number
}

function NewPerson(): Person {
  return {
    name: "Tom",
    age: 25,
    id: 1,
  }
}

let tom: Person = NewPerson()

console.log(tom)

// 不可以修改接口中只读的属性，否则会报错：
// Error: Cannot assign to 'id' because it is a read-only property.
// tom.id = 5

// 接口的属性是函数。
interface FuncInterface {
  // 语法：属性名(参数名:参数类型):返回值类型
  // 这里的属性名可省略
  (s: string): void
}
let fn: FuncInterface = (s: string) => {
  console.log("接口中函数属性的逻辑：", s)
}
fn("hello")

// 接口的属性是一般属性和函数属性
interface FuncAndNormalInterface {
  Name: string
  // 语法：属性名(参数名:参数类型):返回值类型
  FuncName(p: string): void
}

function NewFuncInterface(): FuncAndNormalInterface {
  return {
    Name: "Tom",
    FuncName: (p: string) => {
      console.log(p)
    },
  }
}

let fnFunc: FuncAndNormalInterface = NewFuncInterface()
fnFunc.FuncName("接口的属性是一般属性和函数属性")

// 接口的属性是数组。
interface ArrayInterface {
  // 语法：[索引:索引的类型]:元素的类型
  [idx: number]: number | string
}
let arr: ArrayInterface = [1, 2, 3, 4, 5, "6"]
