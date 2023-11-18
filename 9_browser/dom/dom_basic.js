// 获取 HTML 中的元素
function getElement() {
  // ####根据 ID 获取元素####
  // 若没有这个 ID，则返回值为 null
  var elementById = document.getElementById("container")
  console.log("根据ID获取到的元素:\n", elementById)

  // ####根据类名获取元素####
  // 这个方法的参数是一个匹配规则，凡是包含参数中的字符串的类名都会获取到
  // 返回值是一个 HTMLCollection 类型的对象
  var elementsByClassNameObject = document.getElementsByClassName("box")
  console.log("根据类名获取到的元素:\n", elementsByClassNameObject)

  // ####根据标签获取元素####
  // 返回值是一个 HTMLCollection 类型的对象
  var elementsByTagNameObject = document.getElementsByTagName("div")
  console.log("根据标签获取到的元素:\n", elementsByTagNameObject)

  // ####根据选择器获取元素####
  // 返回选择器匹配到的第一个元素
  var elementQuerySelector = document.querySelector("div")
  console.log("根据选择器获取匹配到的第一个元素:\n", elementQuerySelector)

  // 返回选择器匹配到的所有元素
  // 返回值是一个 NodeList 类型的对象
  var elementsQuerySelectorObject = document.querySelectorAll("div")
  console.log("根据选择器获取匹配到的所有元素:\n", elementsQuerySelectorObject)
}

// ########操作元素的文本与超文本内容########
// 获取：
// 元素.innerText
// 元素.innerHTLM
// 设置
// 元素.innerText = "文本内容"
// 元素.innerHTLM = "超文本内容"
// ########
function handleElementText() {
  // 获取需要操作文本的元素
  var operateText = document.getElementById("operate_text")
  var operateHyperText = document.getElementById("operate_hyper_text")
  // 除了 bom 中介绍的，在 javascript 中通过按钮的 id 引用按钮对象，还可以通过选择器获取按钮对象
  var updateContentButtonObject = document.getElementById(
    "update_content_button"
  )
  // 获取文本
  read_content_button.onclick = function () {
    // 获取文本
    console.log("元素的文本:\n", operateText.innerText)
    // 获取超文本
    console.log("元素的超文本:\n", operateHyperText.innerHTML)
  }
  // 改变文本
  updateContentButtonObject.onclick = function () {
    // 改变元素中的文本内容
    operateText.innerText = "新文本"
    // 改变元素中的超文本内容
    operateHyperText.innerHTML = "<span>新超文本</span>"
  }
}

// ########操作元素的属性########
// 获取：
// 元素.属性名
// 元素.getAttribute("自定义属性名")
// 设置：
// 元素.属性名 = "属性值"
// ########
function handleElementAttribute() {
  // 获取需要操作属性的元素
  var operateAttribute = document.getElementById("operate_attribute")
  var operateAttributeInput = document.querySelector("input")
  // 获取属性
  read_attribute_button.onclick = function () {
    console.log(
      "元素的原生属性:\n",
      "id:",
      operateAttribute.id,
      "\n",
      "type:",
      operateAttributeInput.type
    )
    console.log(
      "元素的自定义属性:\n",
      operateAttribute.getAttribute("custom_attribute")
    )
  }
  // 改变属性
  update_attribute_button.onclick = function () {
    // 改变原生属性的值
    operateAttribute.id = "new_attribute_value"
    operateAttributeInput.type = "checkbox"
    // 改变自定义属性的值
    operateAttribute.setAttribute("custom_attribute", "new_custom_value")
  }
  // 删除属性
  delete_attribute_button.onclick = function () {
    // 删除属性
    operateAttribute.removeAttribute("style")
  }
}

// ########操作元素的类名########
// 获取:
// 元素.className
// 设置:
// 元素.className = "类名"
// ########
function handleElementClass() {
  // 获取需要操作类名的元素
  var operateClass = document.getElementById("operate_class")
  // 获取类名
  read_class_button.onclick = function () {
    console.log("元素的类名:\n", operateClass.className)
  }
  // 改变类名
  update_class_button.onclick = function () {
    operateClass.className = "new_class_name"
  }
}

// ########操作元素的样式########
// 获取:
// 元素.style.样式名
// window.getComputedStyle(元素).样式名
// 设置:
// 元素.style.样式名 = '样式值'
// 注意：JS无法设置非行内样式
// ########
function handleElementStyle() {
  // 获取需要操作样式的元素
  var operateStyle = document.getElementById("operate_style")
  // 获取样式
  read_style_button.onclick = function () {
    // 获取行内样式
    console.log("元素的行内样式:\n")
    console.log("  颜色:", operateStyle.style.backgroundColor)
    console.log(
      "  宽:",
      operateStyle.style.width,
      "高:",
      operateStyle.style.height
    )
    // 获取非行内样式
    console.log("非行内样式:\n")
    console.log("  字体大小:", window.getComputedStyle(operateStyle).fontSize)
  }
  // 改变样式
  update_style_button.onclick = function () {
    operateStyle.style.backgroundColor = "green"
  }
}

function main() {
  // 获取 HTML 中的元素
  getElement()

  // 处理 HTML 元素的文本与超文本
  // handleElementText()

  // // 处理 HTML 元素的属性
  // handleElementAttribute()

  // // 处理 HTML 元素的类名
  // handleElementClass()

  // // 操作元素的样式
  // handleElementStyle()
}

main()
