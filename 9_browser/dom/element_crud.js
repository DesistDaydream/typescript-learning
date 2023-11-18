// ########元素的增删改查########
// 注意：在 JS 中，Node(节点) 与 Element(元素) 的概念非常相近
// 在 HTML 中称为 Element
// 当使用 DOM 接口获取到 Web 中的 Element 之后，称之为 Node

// 创建元素
createdElement = document.createElement("div")
createdElement.innerText = "JS 创建的元素"
console.log(createdElement)

// 获取需要操作元素的元素
var parentElement = document.getElementById("parent_element")
var childElementP1 = document.getElementById("child_element_p1")
var childElementP2 = document.getElementById("child_element_p2")
var childElementP3 = document.getElementById("child_element_p3")

// 插入元素
// 附加到末尾，将 createdElement 元素插入 parentElement 内
// 并放在最后
append_child_button.onclick = function () {
  parentElement.appendChild(createdElement)
}
// 插入XX之前,将 createdElement 元素插入 parentElement 内
// 并且放在 childElementP2 的前面
insert_bufore_button.onclick = function () {
  parentElement.insertBefore(createdElement, childElementP2)
}

// 删除元素
delete_button.onclick = function () {
  // 两种语法
  // 从 parentElement 中删除 childElementP1 元素
  // parentElement.removeChild(childElementP1)
  // 直接删除 childElementP1 元素
  childElementP1.remove()
}

// 替换元素
replace_child_button.onclick = function () {
  // 将 parentElement 元素中的 childElementP2 元素替换为 createdElement
  parentElement.replaceChild(createdElement, childElementP2)
}

// 克隆元素
clone_button.onclick = function () {
  newElement = childElementP3.cloneNode(true)
  // 将克隆元素插入到 parentElement 这个元素内，并放在最后
  parentElement.appendChild(newElement)
}

// ########获取元素尺寸########
// offsetWidth 与 offsetHeight 获取到的元素尺寸是 border+padding+content 的和
console.log("父元素宽度:", parentElement.offsetWidth)
console.log("父元素高度:", parentElement.offsetHeight)
console.log("子元素1宽度:", childElementP1.offsetWidth)
console.log("子元素1高度:", childElementP1.offsetHeight)
// clientWidth 与 clientHeight 获取到的元素尺寸是 padding+content 的和
console.log("父元素宽度:", parentElement.clientWidth)
console.log("父元素高度:", parentElement.clientHeight)
console.log("子元素1宽度:", childElementP1.clientWidth)
console.log("子元素1高度:", childElementP1.clientHeight)
