// Generic(泛型)
// 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
// 这种特性可以称为：**类型参数化**
// 可以将泛型理解为类型的形参和实参的关系。
// 其中 <> 中 T 可以理解为 GenericFunc() 函数中泛型的形参，param 是函数中可以接收变量的形参。
function GenericFunc<T>(param: T): T {
  return param
}
// 调用函数时，可以指定泛型的具体类型
// 这个 string 可以理解为 GenericFunc() 函数中泛型的实参
let result = GenericFunc<string>("hello")
console.log(result)
// 也可以不指定泛型的具体类型，让编译器自动推断
let result2 = GenericFunc("hello")
console.log(result2)
// 泛型的好处是可以在不指定具体类型的情况下，使用泛型的函数或类，可以支持多种类型的数据。
// 比如下面的函数，可以接收任意类型的数组，然后返回数组中的第一个元素
function firstElement<T>(arr: T[]): T {
  return arr[0]
}
let firstElementResult = firstElement([1, 2, 3])
console.log(firstElementResult)

// 多个泛型参数
function swap<T, U>(t: T, u: U): [U, T] {
  return [u, t]
}
let swapResult = swap<string, number>("hello", 123)
console.log(swapResult)
