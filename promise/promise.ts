// TS 中的 Promise
// Promise 是 ES6 中新增的一个 API，它是一个构造函数，用来封装一个异步操作并可以获取其结果。
// Promise 有三种状态：
// 1. pending：进行中
// 2. fulfilled：已成功
// 3. rejected：已失败
// Promise 的特点：
// 1. 对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和 Rejected（已失败）。
// 2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected。
// 3. Promise 新建后就会立即执行。
//
// Promise 的基本使用
// Promise 是一个构造函数，我们可以 new Promise 得到一个 Promise 的实例。
// Promise 构造函数接收一个函数作为参数，该函数的两个参数分别是 resolve 和 reject。
// 它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
// resolve 函数的作用是，将 Promise 对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
// reject 函数的作用是，将 Promise 对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
// Promise 实例生成以后，可以用 then 方法分别指定 resolved 状态和 rejected 状态的回调函数。
// then 方法可以接受两个回调函数作为参数。
// 第一个回调函数是 Promise 对象的状态变为 resolved 时调用，第二个回调函数是 Promise 对象的状态变为 rejected 时调用。
// 其中，第二个函数是可选的，不一定要提供。
// 这两个函数都接受 Promise 对象传出的值作为参数。
// then 方法返回的是一个新的 Promise 实例（注意，不是原来那个 Promise 实例）。
// 因此可以采用链式写法，即 then 方法后面再调用另一个 then 方法。
// 第一个 then 方法指定的回调函数，返回的是另一个 Promise 对象。
// 这时，第二个 then 方法指定的回调函数，就会等待这个新的 Promise 对象状态发生变化。
// 如果变为 resolved，就调用第一个回调函数，如果状态变为 rejected，就调用第二个回调函数。
// Promise 新建后就会立即执行。
// then 方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行。
// 所以，Promise 的回调函数是在当前脚本所有同步任务执行完才会执行。
// Promise 的回调函数是在当前脚本所有同步任务执行完才会执行。

interface ResolveIF {
  code: number
  data: ResponseIF
  message: string
}

interface ResponseIF {
  token: string
}

// Promise 的基本使用
// 注意 Promise<ResolveIF> 的写法，表示 Promise 的返回值是 ResolveIF 类型；
// 如果不这么写，那么 resolve 的返回值就是 any 类型，这样就不会有代码提示了。
let p: Promise<ResolveIF> = new Promise(function (resolve, reject) {
  // resolve 函数的作用是，将 Promise 对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
  resolve({
    code: 200,
    data: { token: "123456" },
    message: "success",
  })
  // reject 函数的作用是，将 Promise 对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
  reject()
})

p.then((res) => {
  console.log(res.code, res.data.token, res.message)
})
