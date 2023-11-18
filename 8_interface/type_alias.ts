export {}
// 类型别名
// 类型别名也是用来创建**自定义类型**的，但是类型别名和接口的区别是，类型别名不能被extends和implements（自己也不能extends和implements其它类型）
// 类型别名与接口的区别：
// 1. 类型别名可以直接赋值，接口不行
// 2. 类型别名可以直接使用，接口不行
// 3. 类型别名可以使用联合类型，接口不行
// 4. 类型别名可以使用元组，接口不行
// 5. 类型别名可以使用交叉类型，接口不行
// 6. 类型别名可以使用类型别名，接口不行
// 7. 类型别名可以使用typeof获取类型，接口不行
// 8. 类型别名可以使用泛型，接口不行
// 9. 类型别名可以使用索引签名，接口不行
// 10. 类型别名可以使用类型断言，接口不行
// 11. 类型别名可以使用类型保护，接口不行
// 12. 类型别名可以使用映射类型，接口不行
// 13. 类型别名可以使用条件类型，接口不行
// 14. 类型别名可以使用声明合并，接口不行
// 15. 类型别名可以使用类型推断，接口不行
// 接口本质是一个对象，类型别名本质是一个类型。接口是多个属性的集合，类型别名是一个类型的集合
// 官方推荐使用接口，因为接口可以扩展，类型别名不行。

// 1. 类型别名可以直接赋值，接口不行
type Name = string
let name: Name = "Tom"
console.log(name)

// 2. 类型别名可以直接使用，接口不行

// 类型别名可以用于联合类型
type StrOrNumOrBool = string | number | boolean

let s1: StrOrNumOrBool = "hello"
let n1: StrOrNumOrBool = 123
let b1: StrOrNumOrBool = true

console.log(s1, n1, b1)

// 类型别名可以用于元组
type StrOrNumArr = [string, number]

let arr: StrOrNumArr = ["hello", 123]

console.log(arr)

// 类型别名可以用于对象
type StrOrNumObj = {
  name: string
  age: number
}

let obj: StrOrNumObj = {
  name: "Tom",
  age: 18,
}

console.log(obj)

// 类型别名可以用于函数
type StrOrNumFunc = (str: string, num: number) => string

let func: StrOrNumFunc = (str, num) => {
  return str + num
}

console.log(func("hello", 123))

// 类型别名可以用于类
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

type PersonType = typeof Person

let p: PersonType = Person

let p1 = new p("Tom", 18)

console.log(p1)

// 类型别名可以用于接口
interface IFOne {
  name: string
}

interface IFTwo {
  age: number
}

type IFThree = IFOne & IFTwo

let ifThree: IFThree = {
  name: "Tom",
  age: 18,
}

console.log(ifThree)

// 类型别名可以用于类型别名
type StrOrNumType = string | number

type StrOrNumOrBoolType = StrOrNumType | boolean

let s2: StrOrNumOrBoolType = "hello"
let n2: StrOrNumOrBoolType = 123

console.log(s2, n2)

// 类型别名保存接口上的某个属性的类型
interface IFName {
  name: string
  age: number
}
// 语法：type 类型别名 = 接口名["属性名"]
type NameType = IFName["name"]
// 这里的 NameType 就是 string 类型
let nameType: NameType = "Tom"
console.log(nameType)
