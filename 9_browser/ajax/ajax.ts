// 注意：服务端需要允许跨域 Set("Access-Control-Allow-Origin", "*")
// 实例化 XMLHttpRequest 对象
let xhr: XMLHttpRequest = new XMLHttpRequest()

// 配置请求信息
xhr.open("GET", "http://localhost:18080/", true)

// 绑定 onload 事件，以便在执行 xhr.send() 后处理响应
xhr.onload = function () {
  // 输出一些响应信息
  console.log(xhr.responseText)
  console.log(xhr.status)
}

// 使用配置好的信息发起 HTTP 请求
xhr.send()
