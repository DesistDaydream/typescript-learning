numberType = 2e5
var numberObjectType = new Number(2e5)
console.log(numberObjectType)

stringType = "这是一个字符串"
var stringObjectType = new String("这是一个字符串对象")
console.log(stringObjectType)

booleanType = true
var booleanObjectType = new Boolean(true)
console.log(booleanObjectType)

// 数据类型检测
console.log("基本数值的数据类型: ", typeof numberType)
console.log("数值对象的数据类型：", typeof numberObjectType)
console.log("基本字符串的数据类型：", typeof stringType)
console.log("字符串对象的数据类型：", typeof stringObjectType)
console.log("基本布尔的数据类型：", typeof booleanType)
console.log("布尔对象的数据类型：", typeof booleanObjectType)
