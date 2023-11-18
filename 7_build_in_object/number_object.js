var numberObject = new Number(3.1415926)

console.log("数字类型对象:", numberObject)

// 获取 0-1 中间的随机浮点数，小数点后至多保留 17 位
console.log("随机数:", Math.random())

// 对数字进行四舍五入
console.log("四舍五入:", Math.round(3.1415926))
// 对数字进行向上取整
console.log("向上取整:", Math.ceil(3.1415926))
// 对数字进行向下取整
console.log("向下取整:", Math.floor(3.1415926))

// 对数字进行幂运算,下例就是计算 2 的 5 次幂
console.log("幂运算:", Math.pow(2, 5))

// 对数字进行 二次方根 运算
console.log("二次方根运算:", Math.sqrt(3.1415926))

// 获取数字的绝对值
console.log("绝对值:", Math.abs(-3.1415926))

// 获取若干数字中的最大值
console.log("获取最大值:", Math.max(-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9))
// 获取若干数字中的最小值
console.log("获取最小值:", Math.min(-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9))

// 获取π，小数点后至多保留 17 位
console.log("获取π:", Math.PI)
