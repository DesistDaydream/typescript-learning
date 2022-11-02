// Any(任意类型) **会绕过类型校验**
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false // okay, definitely a boolean

let list: any[] = [1, true, "free"]
list[1] = 100

// 其实不太推荐在 TS 中使用 any 类型，因为 any 类型的变量将**会绕过类型校验**，这样就失去了 TS 的意义。
// 但是在一些特殊的场景下，any 类型还是有用的，比如：
// 1. 从第三方库中引入的变量，这些变量可能是 any 类型
// 2. 一些动态的内容，比如 DOM 或者 JSON.parse() 的结果
// 3. 一些特殊的场景，比如需要兼容旧版本的 JS 代码

// unknown(未知类型) **不会绕过类型校验**
// unknown 类型是 TS 3.0 引入的新类型，它与 any 类型很相似，但是 unknown 类型的变量不能直接赋值给其他变量
// 所以 unkonw 比 any 更常用
let unknowType: unknown
unknowType = 4
unknowType = "hello"
// console.log(unknowType.length) // 类型“unknown”上不存在属性“length”。ts(2339)
// 进行类型判断后，即可使用
if (typeof unknowType === "string") {
  console.log(unknowType.length)
}
unknowType = true
unknowType = { fieldOne: 1 }
unknowType = [1, 2, 3]
unknowType = null
unknowType = undefined
