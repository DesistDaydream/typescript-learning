// 鼠标跟随事件
// 获取 img 元素
var imgNode = document.querySelector("img")

// 将鼠标移动事件绑定到 document 上，也就是绑定到整个 Web 页面
// 当在 Web 页面移动鼠标时，将会触发 function()
document.onmousemove = function (property) {
  // 获取光标坐标
  var x = property.clientX
  var y = property.clientY

  // 使用获取到的光标位置设置 img 元素的位置，为了让光标与图片分开不要重叠，将图片的横纵坐标各增加 5 个像素
  imgNode.style.left = x + 5 + "px"
  imgNode.style.top = y + 5 + "px"
}
