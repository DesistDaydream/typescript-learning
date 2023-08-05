// DeepCopy(深拷贝) 与 ShallowCopy(浅拷贝)
// 深拷贝复制变量值，对于引用数据，则递归至基本类型后，再复制。深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。
// 浅拷贝是会将对象的每个属性进行依次复制，但是当对象的属性值是引用类型时，实质复制的是其**引用**，当**引用指向**的值改变时也会跟着变化。
let obj = {
  name: "Tom",
  age: 18,
  info: {
    address: "北京",
  },
}
console.log("原始: ", obj)

// 深拷贝一个对象。通过 JSON.parse() 方法实现深拷贝
let objForDeepCopy = JSON.parse(JSON.stringify(obj))
// 浅拷贝一个对象。这里的 `...` 符号是 ES6 中的扩展运算符，用来浅拷贝对象。
let objForShallowCopy = { ...obj }

// 深拷贝和浅拷贝对于一个对象中**引用类型**的属性的处理方式不同
obj.name = "Jerry" // 修改基本类型的属性
obj.info.address = "上海" // 修改引用类型的属性

console.log("变化: ", obj)
console.log(
  "深拷贝是一个完全独立的变量，原对象中引用类型的属性改变时，自身不变",
  objForDeepCopy
)
console.log(
  "浅拷贝不是一个完全独立的变量，原对象中引用类型的属性改变时，也会随之改变",
  objForShallowCopy
) // { name: 'Tom', age: 18, info: { address: '上海' } }
