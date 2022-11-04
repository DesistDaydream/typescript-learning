// Partial 是一个工具类型，它接受一个类型作为参数，将该类型的所有属性变为可选项
// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
// 例如：Partial<User> 将 User 的所有属性变为可选项
// 例如：Partial<User> 等价于 { name?: string; age?: number; }
//
interface User {
  name: string
  age: number
}
function updateUser(user: User) {
  // ...
}
// 如果少些一个属性，就会报错：
// 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "User" 中需要该属性。
let user: User = {
  name: "Tom",
  age: 18,
}
// 使用 Partial 少些一个属性，就不会报错
let user2: Partial<User> = {
  name: "Tom",
}
