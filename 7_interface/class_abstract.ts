export {}
// 抽象类
abstract class Person {
  abstract name: string
  // 抽象类中的抽象方法，必须在子类中实现
  abstract sayHello(): void
  // 抽象类中的普通方法，可以在子类中重写
  sayHi() {
    console.log("hi" + this.name)
  }
}

// let p = new Person() // 抽象类不能被实例化。报错：无法创建抽象类的实例。

// 子类继承抽象类。子类必须实现抽象类中的抽象方法。
class Student extends Person {
  name: string = "Tom" // 必须要写。否则报错：非抽象类“Student”不会实现继承自“Person”类的抽象成员“name”。
  sayHello() {
    console.log("hello" + this.name)
  }
}

let s = new Student()
s.sayHello()
s.sayHi()
