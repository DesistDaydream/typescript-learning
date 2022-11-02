// object Object {} 这三个是非原始数据类型。每一个都是一个对象，都有自己的属性和方法。
// 这三个类型的知识点非常多，会放到单独的目录中写详解。
// 1. object
let objectType: object = {}

// 2.Object 与 {}
let ObjectTypeOne: {}
let ObjectTypeTwo: Object
// Object 可以使用 {} 符号表示，且 {} 符号中可以用来指定对象中可以包含哪些属性。
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后面加上 ?，表示属性是可选的。
let objectWithTypename: { name: string; age?: number } = { name: "Tom" }

// Object 与 object 区别
let Object_and_object: Object = "heelo"
// 这里将会报错：不能将类型“string”分配给类型“object”。因为 Object 是一个包装对象，可以赋值给任意类型。
// let Object_and_object_One: object = "heelo"
// 通过 new 将 string 转换为 String 对象，可以赋值给 object 类型。
let Object_and_object_Two: object = new String("heelo")
// 通常，我们在写 TS 代码时，大部分情况下，我们会使用 object 类型，而不是 Object 类型。
// 因为 object 类型是一个原始数据类型，而 Object 类型是一个包装对象。
// 我们可以说 Ojbect 是 object 类型，但是不能说 object 是 Object 类型。
// 原始类型的数据可以通过 new 与 构造函数转换为 object 类型。
