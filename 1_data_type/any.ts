// Any(任意类型)
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false // okay, definitely a boolean

let list: any[] = [1, true, "free"]
list[1] = 100

// 其实不太推荐在 TS 中使用 any 类型，因为 any 类型的变量将会绕过类型校验，这样就失去了 TS 的意义。
// 但是在一些特殊的场景下，any 类型还是有用的，比如：
// 1. 从第三方库中引入的变量，这些变量可能是 any 类型
// 2. 一些动态的内容，比如 DOM 或者 JSON.parse() 的结果
// 3. 一些特殊的场景，比如需要兼容旧版本的 JS 代码
