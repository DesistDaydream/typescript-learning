var stringObject = new String(" 你好 Desist Daydream ")

console.log("字符串类型对象:", stringObject)

// 获取对应索引位置的字符
console.log("获取对应索引位置的字符:", stringObject.charAt(10))

// 将字符串内的字母全部转换成小写
console.log("字母转换成小写:", stringObject.toLowerCase())

// 将字符串内的字母全部转换成大写
console.log("字母转换成大写:", stringObject.toUpperCase())

// replace(searchValue,replaceValue)
// 将字符串内第一个满足 searchValue 条件的字符替换为 replaceValue。注意：只能替换第一个
console.log("字符替换:", stringObject.replace("D", 1))

// 去除首尾所有空白字符
console.log("去除首尾所有空白字符:", stringObject.trim())

// 按照分隔符将字符串切割为一个数组。注意：只有字符串中有指定的分隔符，才会生效。否则切割后的元素只有一个。
console.log("字符串切割:", stringObject.split(" "))

// 截取字符串
// 第一个参数是开始截取的索引号，第二个参数是截取数量
console.log("截取字符串1:", stringObject.substr(5, 8))
// 第一个参数是开始截取的索引号，第二个参数是结束截取的索引号
console.log("截取字符串2:", stringObject.substring(5, 8))
// 第一个参数是开始截取的索引号，第二个参数是结束截取的索引号
console.log("截取字符串3:", stringObject.slice(5, 8))
