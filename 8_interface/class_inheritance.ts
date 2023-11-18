// class 的继承
class Person {
  name: string
  constructor(n: string) {
    this.name = n
  }
  getName() {
    return this.name
  }
}

class Student extends Person {
  school: string
  constructor(n: string, s: string) {
    // super 是关键字，用于调用父类的构造函数
    super(n)
    this.school = s
  }
  getName() {
    return "Student: " + this.school + super.getName()
  }
}

let s = new Student("Tom", "清华大学 ")
console.log(s.getName())
