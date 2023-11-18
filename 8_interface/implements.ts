export {}

interface Person {
  name: string
  age: number
  sayHello(): void
}

// implements 关键字用于显式实现接口
class Student implements Person {
  name: string = "Tom"
  age: number = 18
  sayHello() {
    console.log("hello" + this.name)
  }
}

let s = new Student()
s.sayHello()
console.log(s.name)
console.log(s.age)
