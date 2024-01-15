// Fetch API 的示例
// fetch 返回值为 Promise<Response> 对象
fetch("https://api.github.com/users/DesistDaydream")
  .then((resp) => resp.json()) // resp 就是 fetch() 的返回值。resp.json() 的返回值也是 Promise<any>
  .then((result) => console.log(result))
  .catch((err) => console.log("Request Failed", err))
