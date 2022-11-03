// 深拷贝与浅拷贝
let objOne = { name: "Tom", age: 18, info: { address: "北京" } }
// 注意这里的 ...，这是 ES6 中的扩展运算符，用来拷贝对象。但是这里只是浅拷贝。
let objTwo = { ...objOne }

objOne.name = "Jerry"
objOne.info.address = "上海"
console.log(objOne)
console.log(objTwo) // { name: 'Tom', age: 18, info: { address: '上海' } }
