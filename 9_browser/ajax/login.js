// 获取页面上的元素
let loginForm = document.querySelector("form")
let nameInp = document.querySelector(".username")
let pwdInp = document.querySelector(".password")
let errBox = document.querySelector(".error")

// 绑定事件
loginForm.onsubmit = function (e) {
  // 阻止表单的默认提交行为(默认情况下当点击表单中的任何一个元素时，会自动触发表单的提交行为)
  // 所以我们需要阻止默认行为，否则还没有执行后续代码了，就已经提交了，此时相当于当前页面刷新了一下
  e.preventDefault()
  // 获取表单信息
  let name = nameInp.value
  let pwd = pwdInp.value

  // 验证用户名和密码
  if (!name || !pwd) {
    return alert("用户名和密码不能为空")
  }

  // 发送 ajax 请求
  let xhr = new XMLHttpRequest()
  xhr.open("POST", "http://localhost:18080/api/login", true)
  xhr.onload = function () {
    // 根据响应体中的信息，更新页面
    let resp = JSON.parse(xhr.responseText)
    if (resp.code === 1) {
      // 跳转到首页
      // 注意：由于 js 文件是被嵌入到 html 中的，所以相对路径是相对于 html 文件的
      window.location.href = "./home.html"
    } else {
      errBox.style.display = "block"
    }
  }
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
  xhr.send("username=" + name + "&password=" + pwd)
}
