export {}
// Class(类)
// TS 中的类，是基于 ES6 的类的语法糖
// class 与 interface 很相似
// 定义 class 的同时也会创建相同名称的 interface
class Person {
  name: string
  // 定义属性时，还可以同时设置默认值
  age: number = 20

  // constructor 是关键字，用于构造函数
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log("hello")
  }
}

let p = new Person("Tom", 18)
console.log(p)
p.sayHello()

// 上面的 class 相当于定义了下面的 interface
interface Person {
  name: string
  age: number
  sayHello(): void
}
