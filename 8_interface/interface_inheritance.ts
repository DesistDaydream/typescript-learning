// 接口的继承
interface IFOne {
  name: string
}

interface IFTwo {
  age: number
}

// 语法：interface 接口名 extends 接口名,接口名,接口名
interface IFThree extends IFOne, IFTwo {
  height: number
}

let ifThree: IFThree = {
  name: "Tom",
  age: 18,
  height: 180,
}
// 接口的继承有点类似“交叉类型”

console.log(ifThree)

// 接口同名。同名的接口会合并成一个接口。
interface IFName {
  name: string
}
interface IFName {
  age: number
}
let ifName: IFName = {
  name: "Tom",
  age: 18,
}
console.log(ifName)
