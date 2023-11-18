// 获取时间
function getTime() {
  // 实例化
  var currentTime = new Date()
  console.log(currentTime)

  // 获取时间中的年、月、日、小时、分、秒
  // 当实例化一个时间类型的对象时不指定具体时间，则获取的就是当前的时间
  console.log("年:", currentTime.getFullYear())
  console.log("月:", currentTime.getMonth())
  console.log("日:", currentTime.getDate())
  console.log("时:", currentTime.getHours())
  console.log("分:", currentTime.getMinutes())
  console.log("秒:", currentTime.getSeconds())
  // 当前是一周中的第几天
  console.log("星期:", currentTime.getDay())
  // 获取时间戳
  console.log("时间戳:", currentTime.getTime())
}

// 设置时间
function setTime() {
  // 实例化
  var customTime = new Date()

  // 设置时间。注意：无法设置星期
  customTime.setFullYear(2021)
  customTime.setMonth(9)
  customTime.setDate(5)

  console.log("自定义时间:", customTime)

  // 设置时间戳
  customTime.setTime(2)
  console.log("自定义时间:", customTime)
}

// 获取时间差，常用来做倒计时
function deltaT(startTime, endTime) {
  ms1 = startTime.getTime()
  ms2 = endTime.getTime()

  subtractVaule = Math.ceil((ms2 - ms1) / 1000)
  day = Math.floor(subtractVaule / (60 * 60 * 24))
  hours = Math.floor((subtractVaule % (60 * 60 * 24)) / (60 * 60))
  minutes = Math.floor((subtractVaule % (60 * 60)) / 60)

  return "时间相差:" + day + "天" + hours + "小时" + minutes + "分"
}

var startTime = new Date(2021, 12, 27, 9, 00, 00)
var endTime = new Date(2021, 12, 27, 17, 00, 00)

function main() {
  // 获取时间
  getTime()

  // 设置时间
  setTime()

  // 获取时间差，常用来做倒计时
  console.log(deltaT(startTime, endTime))
}

main()
