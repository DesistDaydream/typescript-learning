// 最基本的函数
function TypeScriptFunc() {
  console.log("调用函数成功")
}

// 带参数的函数，使用“冒号”为参数指定可以接收的类型
function WithArgsFunc(params: string) {
  console.log("输出传入的参数：", params)
}

// 函数返回值。
// 通过“冒号”指定函数返回值的类型
// ！！！！注意：TS 与 JS 一样，不支持返回多个值！！！！
function FuncReturn(params: number): string {
  let returnValue = String(params)
  return returnValue
}

// 可选参数
// 在参数名后，冒号前添加“问号”，指明该参数为可选的
// 这个函数至少接收1个参数，至多接收2个参数。当参数小于1个或大于2个的时候，将会报错
function FuncOptArgs(paramOne: string, paramTwo?: string) {}

// 默认参数
// 当给参数设置默认值时，调用函数时可以不传递参数。没啥用，Go 里说过不要默认参数的原因：https://github.com/golang/go/issues/21909
function FuncDefaultArgs(params: string = "参数默认值") {
  console.log(params)
}

// 可变参数，用 ... 表示
function buildName(firstName: string, ...restOfName: string[]): string {
  return firstName + " " + restOfName.join(" ")
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
WithArgsFunc("a")
console.log(typeof FuncReturn(1), FuncReturn(1))
FuncOptArgs("a")
FuncDefaultArgs()
console.log(buildName("Joseph", "Samuel", "Lucas", "MacKinzie"))
console.log(anonymousFunction())
console.log(funcOne(1))
