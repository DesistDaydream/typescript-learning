export {}

interface Person {
  name: string
  age: number
}

let obj: Person = {
  name: "John",
  age: 30,
}

// Proxy() 方法用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
// 语法：new Proxy(target, handler)
// 参数：
// target：被代理的目标对象。
// handler：一个对象，其属性是当执行一个操作时定义代理的行为的函数。
// 返回值：一个新的代理对象。
let proxyInstanceOther = new Proxy(obj, {
  // has() 方法用来拦截 HasProperty 操作，即判断对象是否具有某个属性时，这个方法会生效。
  // 语法：has(target, propKey)
  // 参数：
  // target：目标对象。
  // propKey：要判断的属性。
  // 返回值：一个布尔值。
  has(target, propKey) {
    console.log("has", target, propKey)
    return propKey in target
  },
  // deleteProperty() 方法用来拦截 delete 操作，如果这个方法抛出错误或者返回 false，当前属性就无法被 deleteProperty 删除。
  // 语法：deleteProperty(target, propKey)
  // 参数：
  // target：目标对象。
  // propKey：要删除的属性。
  // 返回值：一个布尔值。
  deleteProperty(target, propKey) {
    console.log("delete", target, propKey)
    // delete target[propKey]
    return true
  },
  // ownKeys() 方法用来拦截对象自身属性的读取操作。
  // 语法：ownKeys(target)
  // 参数：
  // target：目标对象。
  // 返回值：一个数组。
  ownKeys(target) {
    console.log("ownKeys", target)
    return Object.keys(target)
  },
  // getOwnPropertyDescriptor() 方法拦截 Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者 undefined。
  // 语法：getOwnPropertyDescriptor(target, propKey)
  // 参数：
  // target：目标对象。
  // propKey：要查找的属性。
  // 返回值：一个属性描述对象或者 undefined。
  getOwnPropertyDescriptor(target, propKey) {
    console.log("getOwnPropertyDescriptor", target, propKey)
    return Object.getOwnPropertyDescriptor(target, propKey)
  },
  // defineProperty() 方法拦截 Object.defineProperty() 操作。
  // 语法：defineProperty(target, propKey, propDesc)
  // 参数：
  // target：目标对象。
  // propKey：要定义的属性。
  // propDesc：属性描述符。
  // 返回值：一个布尔值。
  defineProperty(target, propKey, propDesc) {
    console.log("defineProperty", target, propKey, propDesc)
    Object.defineProperty(target, propKey, propDesc)
    return true
  },
  // preventExtensions() 方法拦截 Object.preventExtensions()。
  // 语法：preventExtensions(target)
  // 参数：
  // target：目标对象。
  // 返回值：一个布尔值。
  preventExtensions(target) {
    console.log("preventExtensions", target)
    Object.preventExtensions(target)
    return true
  },
  // getPrototypeOf() 方法主要用来拦截获取对象原型。
  // 语法：getPrototypeOf(target)
  // 参数：
  // target：目标对象。
  // 返回值：一个对象。
  getPrototypeOf(target) {
    console.log("getPrototypeOf", target)
    return Object.getPrototypeOf(target)
  },
  // isExtensible() 方法拦截 Object.isExtensible() 操作。
  // 语法：isExtensible(target)
  // 参数：
  // target：目标对象。
  // 返回值：一个布尔值。
  isExtensible(target) {
    console.log("isExtensible", target)
    return Object.isExtensible(target)
  },
  // setPrototypeOf() 方法拦截 Object.setPrototypeOf()。
  // 语法：setPrototypeOf(target, proto)
  // 参数：
  // target：目标对象。
  // proto：新的原型对象。
  // 返回值：一个布尔值。
  setPrototypeOf(target, proto) {
    console.log("setPrototypeOf", target, proto)
    Object.setPrototypeOf(target, proto)
    return true
  },
})

console.log(proxyInstanceOther.name)

// Proxy() 方法用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
// 语法：new Proxy(target, handler)
// 参数：
// target：被代理的目标对象。
// handler：一个对象，其属性是当执行一个操作时定义代理的行为的函数。
// 返回值：一个新的代理对象实例。这个代理对象实例中的属性与被代理的目标对象中的属性一一对应，但是代理对象中的属性是不可枚举的。
let proxyInstance = new Proxy(obj, {
  // get() 方法用于拦截某个属性的读取操作。当我们调用“被代理的目标对象”下的任何属性时，都会触发 get() 方法。
  // 语法：get(target, propKey, receiver)
  // 参数：
  // target：目标对象。
  // propKey：要读取的属性。
  // receiver：proxy 实例本身（严格地说，是操作行为所针对的对象）。可省略
  // 返回值：一个对象。
  get(target, property, receiver) {
    console.log("触发 get() 方法的时机。当我们调用“被代理的目标对象”下的任何属性时。")
    console.log("target 参数的值：", target)
    console.log("property 参数的值：", property)
    console.log("receiver 参数的值：", receiver)
    console.log("====================================")

    // return target[property]
    // 使用 return target[property] 是将会报错：元素隐式具有 "any" 类型，因为类型为 "string | symbol" 的表达式不能用于索引类型 "Person"。在类型 "Person" 上找不到具有类型为 "string" 的参数的索引签名。
    // 解决上述错误：
    return Reflect.get(target, property, receiver)
    // TODO: 还有其他方式解决上述问题吗？
  },
  // set() 方法用于拦截某个属性的赋值操作。
  // 语法：set(target, propKey, value, receiver)
  // 参数：
  // target: 目标对象。
  // property: 要设置的属性。
  // newValue: 要设置的新值。
  // receiver：proxy 实例本身（严格地说，是操作行为所针对的对象）。可省略
  // 返回值：一个布尔值。
  set(target, property, newValue) {
    console.log("触发 set() 方法的时机。当我们给“被代理的目标对象”下的任何属性赋值时。")
    console.log("target 参数的值：", target)
    console.log("property 参数的值：", property)
    console.log("newValue 参数的值：", newValue)
    console.log("====================================")

    // 将新值赋值给目标对象
    // target[property] = newValue
    // 上述代码会报错：元素隐式具有 "any" 类型，因为类型为 "string | symbol" 的表达式不能用于索引类型 "Person"。在类型 "Person" 上找不到具有类型为 "string" 的参数的索引签名。
    // 解决上述错误:
    return Reflect.set(target, property, newValue)
    // TODO: 还有其他方式解决上述问题吗？

    // return true
  },
})

console.log(proxyInstance.name)
// 当我们给 proxyInstance 对象中的属性赋值时，会触发 set() 方法。
proxyInstance.name = "张三"
// 此时我们访问 proxyInstance 对象中的属性，不会是新的值，而是旧的值。
console.log(proxyInstance.name)
