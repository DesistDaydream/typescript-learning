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

// 类的修饰符
// public 修饰符，表示公有属性。
// private 修饰符，表示私有属性。
// protected 修饰符，表示受保护的属性。
// 若不写修饰符，**默认为 public**。私有属性无法从外部调用，也无法被继承。
class PersonTwo {
  // public 修饰符，表示公有属性。
  public name: string
  // private 修饰符，表示私有属性。
  private male: string
  // protected 修饰符，表示受保护的属性。
  protected sayHi() {
    console.log("hi")
  }
  // readonly 修饰符，表示只读属性。
  public readonly age: number = 20
  // 若不写修饰符，**默认为 public**。私有属性无法从外部调用，也无法被继承。
  // 比如下面 new PersonTwo() 后，如果编写 p.male 将会报错：属性“male”为私有属性，只能在类“Person”中访问。

  // constructor 是关键字，用于构造函数
  constructor(name: string, age: number) {
    this.name = name
    this.male = ""
    this.age = age
  }

  public sayHello() {
    console.log("hello")
  }
}

let p2 = new PersonTwo("Tom", 18)
// console.log(p2.male) // 报错：属性“male”为私有属性，只能在类“Person”中访问。
// p2.age = 30 // 报错：无法分配到 "age" ，因为它是只读属性。
