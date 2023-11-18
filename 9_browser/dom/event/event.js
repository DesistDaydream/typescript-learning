// 事件触发
function event_trigger() {
  var divElement = document.getElementById("event")

  // 事件绑定
  // 事件源.on事件类型=事件处理函数(事件属性){触发事件时执行的操作}
  // 事件属性可省略
  // click 点击事件，当事件源被左键点击时触发
  divElement.onclick = function (property) {
    console.log(divElement, "元素，被点击了一下")
    // 事件的属性是一个对象，包含了事件的一些属性，比如鼠标的位置，键盘的按键等。
    // 想要获取事件的属性，只需要为事件处理函数添加一个参数即可，这个参数就是事件属性的变量。
    console.log("事件的属性: ", property)
  }
}

// 事件传播
// 事件传播的原理是，当事件被触发时，事件的目标元素会被改变，
// 如果事件的目标元素是一个元素，则事件会被传播到它的父元素，
// 如果事件的目标元素是一个文档，则事件会被传播到文档的根元素。
function event_propagation() {
  var ul = document.querySelector("ul")
  var li = document.querySelector("li")

  // 为 ul 和 li 元素绑定两个事件
  ul.onclick = function () {
    console.log("ul被点击了")
  }
  li.onclick = function (property) {
    console.log("li被点击了")
    // 若想要阻止传播，只需要执行 stopPropagation() 方法即可
    // property.stopPropagation()
  }
  // 当内部元素 li 被点击时，事件会被传播到父元素 ul，并触发父元素的事件处理函数
}

// 事件委托。利用事件传播机制，使用 target.nodeName 属性实现实现委托
function event_delegate() {
  var ul = document.querySelector("ul")

  ul.onclick = function (property) {
    // 通过 target 属性获取当前事件的目标元素
    console.log(property.target.nodeName, "元素被点击了")
    // 通过目标元素名称判断是否是 li 元素
    if (property.target.nodeName == "LI") {
      // 如果是 li 元素，则设置目标元素的背景色为红色
      property.target.style.backgroundColor = "red"
    } else {
      // 如果不是 li 元素，则设置目标元素的背景色为绿色
      property.target.style.backgroundColor = "green"
    }
  }
}

// event_trigger()
event_propagation()
// event_delegate()
