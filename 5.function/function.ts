// 最基本的函数
function TypeScriptFunc() {
  console.log("调用函数成功")
}

// 函数返回值。
// 通过“冒号”指定函数返回值的类型
// ！！！！注意：TS 与 JS 一样，不支持返回多个值！！！！
function FuncReturn(params: number): string {
  let returnValue = String(params)
  return returnValue
}

// 匿名函数
let anonymousFunction = function (): string {
  return "匿名函数"
}

// 箭头函数。
// 括号中为函数的参数，剪头后面为函数的逻辑。
// 剪头函数是匿名函数的简写。主要就是把匿名函数中的 function 关键字去掉了，然后换成函数返回值那个位置后面的箭头。
// 好奇葩的设计，既然有简写，为啥还要设计原始的复杂写法。。。。
let funcOne = (x: number): number => {
  return x + 1
}
// 剪头函数的另一种写法
let funcTwo = (x: number): number => x + 1

// 函数的 void 类型返回值
// TODO: XXX???

let employeeName = TypeScriptFunc()

console.log(typeof FuncReturn(1), FuncReturn(1))

console.log(anonymousFunction())
console.log(funcOne(1))
