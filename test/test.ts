interface One {
  age: number
}
interface Two {
  name: string
}

let tupleType_with_interface: [One, Two] = [{ age: 10 }, { name: "hello" }]

function UnionTypeDemo(o: One | Two) {
  if (typeof o === "number") {
    let a = new String(o)
    console.log(a.substring(1))

    return o + 1
  } else {
    let a = new String(o)
    console.log(a.substring(1))
    console.log(a)

    return o + "1"
  }
}

UnionTypeDemo({ age: 10 })
