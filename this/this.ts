// this
// this 是一个特殊的变量，它既可以当做一个全局变量使用，也可以当做一个模块使用。
// 在全局作用域中，this 指向全局对象。在模块作用域中，this 指向当前模块。
// 在函数内部，this 的值在函数被调用的时候才会指定。

// 在全局作用域中，this 指向全局对象
this.alert("hi") // 在浏览器运行环境中，全局对象是 window，因此 this.alert 实际上调用的是 window.alert

// 在函数内部，this 的值在函数被调用的时候才会指定
var age = 25
var person = {
  age: 20,
  getAge: function () {
    console.log(this.age)
  },
}
person.getAge() // 20
var getAge = person.getAge
getAge() // 25

// 在 TypeScript 中，我们可以在类里面使用 this，它表示当前实例对象
class PersonOne {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi() {
    return this.name
  }
}
let tomOne = new PersonOne("Tom")
console.log(tomOne.sayHi()) // Tom

// 在 TypeScript 中，我们可以在类里面使用 this，它表示当前实例对象
class PersonTwo {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi() {
    return this.name
  }
}
let tomTwo = new PersonTwo("Tom")
console.log(tomTwo.sayHi()) // Tom

// this 的类型
// 在 TypeScript 中，this 的类型与包含它的对象的类型相关
interface Card {
  suit: string
  card: number
}
interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  // 该函数现在明确指定其被调用者必须是 Deck 类型
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
    }
  },
}
