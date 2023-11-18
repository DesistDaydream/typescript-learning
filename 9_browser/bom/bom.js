// ####可视窗口尺寸####
// 注意，可视窗口指这一块区域，详见图片 inner.png 红框
// 如果调整开发者工具的高度，那么窗口的可视高度也会随之改变
console.log("当前可视窗口高度:", window.innerHeight)
console.log("当前可视窗口宽度:", window.innerWidth)

// ####浏览器的弹出层####
function PopUp() {
  // 询问框
  var confirmValue = window.confirm(
    "询问框，该操作可以产生返回值。点确定返回 true，点取消返回 false"
  )
  // 提示框
  window.alert("询问框返回值:" + confirmValue)
  // 可以省略 windows 对象
  // alert("询问框返回值:" + confirmValue)
  // 输入框
  var promptValue = window.prompt(
    "输入框，可以将用户输入的内容作为返回值，若取消输入则返回 null"
  )
  console.log("输入框输入的内容: ", promptValue)
}

// ####开启和关闭标签页####
function Tab() {
  // 这里的 on 和 off 对象来源于 html 文件中的 button 的 id
  // 如果不通过在网页操作按钮来演示这个功能，那么当代码运行到 close() 的时候，页面就会自动关闭，这样无法看出来效果
  on.onclick = function () {
    // 打开
    googleTab = window.open("https://www.google.com")
  }
  // 关闭当前标签页
  off.onclick = function () {
    googleTab.close()
    // 直接调用是关闭当前标签页
    // windo.close()
  }
}

// ####浏览器常见事件####
function Event() {
  // 页面资源全部加载完毕后触发
  window.onload = function () {
    // 可以通过 slow_network.png 中的方法，调整浏览器加载速度为缓慢，这时候可以发现，图片不加载出来的话，当前代码不会执行。
    console.log("当前页面资源已加载完毕")
  }
  // 页面尺寸变化时触发
  window.onresize = function () {
    // 调整开发者工具页面的高度，对应浏览器窗口就会发生变化，此时就会执行这里的代码
    console.log("窗口尺寸发生变化了!")
  }
  // 滚动条位置改变时触发
  window.onscroll = function () {
    // 浏览器卷去的尺寸，是指当页面大于浏览器窗口时，会出现滚动条，滚动的尺寸就是卷去的尺寸，滚动条在最上面，那么卷去高度为 0；滚动条在最左边，那么卷去的宽度为 0
    console.log(
      "页面发生滚动了!卷去的高度尺寸为:",
      document.documentElement.scrollTop,
      "卷去的宽度尺寸为:",
      document.documentElement.scrollLeft
    )
  }
}

// ####浏览器的历史操作####
function History() {
  // 页面后退
  window.history.back()
  // 页面前进
  window.history.forward()
}

// ####设置浏览器滚动条位置####
function Scroll() {
  // 设置滚动条位置
  window.scrollTo(0, 100)
  // 设置滚动条位置
  window.scrollTo(100, 0)

  // 点击 id 为 go 的按钮时，设置滚动条位置
  go.onclick = function () {
    // 0 和 0 就是让滚动条回到最上面和最左侧
    // 直接数值数据作为参数，滚动条会瞬间到达指定位置
    // window.scrollTo(0, 0)
    // 使用对象数据作为参数，滚动条会慢慢滚动到指定位置
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    })
  }
}

PopUp()
// Tab()
// Event()
// History()
// Scroll()
