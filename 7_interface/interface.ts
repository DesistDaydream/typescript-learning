//  TS 中的接口类似 Go 中的结构体，用于定义对象的类型(即.object 类型)
interface Person {
  name: string
  age: number
}

function NewPerson(): Person {
  return {
    name: "Tom",
    age: 25,
  }
}

let tom: Person = NewPerson()

console.log(tom)
