export {}

// Class(类)
// TS 中的类，是基于 ES6 的类的语法糖
// 在 TypeScript 的 Class 中，可以定义多种 Member(成员)：
// 1. 属性（Properties）: 一个类可能包含一些属性，它们保存类的状态或数据。
// 2. 构造函数（Constructor）: 构造函数是类的一部分，它在类的实例被创建时调用。它通常用于初始化实例变量或执行其他初始化任务。
// 3. 方法（Methods）: 一个类通常包含一些方法，它们定义了类的行为。通过调用这些方法，你可以执行某些操作或更新类的状态。
// class 与 interface 很相似
// 定义 class 的同时也会创建相同名称的 interface

// Class 的基本使用
class Person {
  name: string
  // 定义属性时，还可以同时设置默认值
  age: number = 20
  // constructor 是关键字，用于构造函数
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 定义 Methods
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

// 属性和方法的修饰符
// 访问修饰符用于控制类的属性和方法的可见性和访问级别。TypeScript 提供了 public、private、protected和readonly 4 种访问修饰符。
// public 修饰符，表示公有属性。
// private 修饰符，表示私有属性。
// protected 修饰符，表示受保护的属性。
// 若不写修饰符，**默认为 public**。私有属性无法从外部调用，也无法被继承。
class PersonTwo {
  // 若不写修饰符，**默认为 public**。私有属性无法从外部调用，也无法被继承。
  // public 修饰符，表示公有属性。
  public name: string
  // private 修饰符，表示私有属性。
  // 比如下面 new PersonTwo() 后，如果编写 p.male 将会报错：属性“male”为私有属性，只能在类“Person”中访问。
  private male: string
  // protected 修饰符，表示受保护的属性。
  protected sayHi() {
    console.log("hi")
  }
  // readonly 修饰符，表示只读属性。
  public readonly age: number = 20
  // static 修饰符，表示静态属性。
  static title: string = "Person"

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

// 继承（Inheritance）: 继承是指一个类可以使用另一个类的属性和方法。子类（派生类）可以从父类（基类）继承属性和方法，并且还可以定义自己的属性和方法。
// 详见 class_inheritance.ts

// 抽象类（Abstract class）: 抽象类是一种特殊的类，它仅仅作为其他具体派生类的基类使用而不直接被实例化；抽象类可以包含抽象方法，这些方法在它的任何派生类中必须被实现。
// 详见 class_abstract.ts
