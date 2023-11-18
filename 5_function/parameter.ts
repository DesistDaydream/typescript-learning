// 带参数的函数
// 使用“冒号”为参数指定可以接收的类型
function FuncParams(params: string) {
  console.log("输出传入的参数：", params)
}

// 可选参数
// 在参数名后，冒号前添加“问号”，指明该参数为可选的
// 这个函数至少接收1个参数，至多接收2个参数。当参数小于1个或大于2个的时候，将会报错
function FuncOptParams(paramOne: string, paramTwo?: string) {
  console.log(paramOne, paramTwo)
}

// 默认参数
// 当给参数设置默认值时，调用函数时可以不传递参数。没啥用，Go 里说过不要默认参数的原因：https://github.com/golang/go/issues/21909
function FuncDefaultArgs(params: string = "参数默认值") {
  console.log(params)
}

// 可变参数，用 ... 表示
function buildName(firstName: string, ...restOfName: string[]): string {
  return firstName + " " + restOfName.join(" ")
}

FuncParams("实参")
FuncOptParams("实参")
FuncDefaultArgs()
console.log(buildName("Joseph", "Samuel", "Lucas", "MacKinzie"))
