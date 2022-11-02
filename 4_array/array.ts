let arrayTeyp: number[] = [1, 2, 3]
// 也可以用 object 类型表示数组
let arrayType_with_object: object = [1, 2, 3]
// 用泛型方式表示数组类型
let arrayType_with_Array: Array<number> = [1, 2, 3]
let arrayType_with_generic: Array<number | string> = [1, 2, 3, "4"]
let arrayType_with_any: Array<any> = [1, 2, 3, "4", true, { fieldOne: 1 }]

// 元组类型
let tupleType: [string, number] = ["hello", 10]
