export {}
// keyof
interface Person {
  name: string
  age: number
  location: string
}
// keyof 通常用来获取接口的属性名
type K1 = keyof Person // "name" | "age" | "location"
type K2 = keyof Person[] // "length" | "push" | "pop" | "concat" | ...
type K3 = keyof { [x: string]: Person } // string | number
// K1 类型就是 Person 接口的属性名组成的联合类型。类似于一个常量，只不过这个常量的值是动态的，而不是固定的。
let a: K1 = "name"
console.log(a)

// keyof 通常用来获取接口的属性名，这样就可以实现对对象属性的遍历操作。
// keyof 类似于 typeof，但是 typeof 只能获取类型的属性名，而 keyof 可以获取接口的属性名。

// in
type Keys = "option1" | "option2"
type Flags = { [K in Keys]: boolean }
function setFlags(o: Flags) {
  console.log(o.option1)
}
setFlags({ option1: true, option2: false })

// Mapped types
// type NullablePerson = { [P in keyof Person]: Person[P] | null };
// type PartialPerson = { [P in keyof Person]?: Person[P] };
// type ReadonlyPerson = { readonly [P in keyof Person]: Person[P] };
// type PersonSub = { [P in keyof Person]: Person[P] }[keyof Person];
// type Keys = "option1" | "option2";
// type Flags = { [K in Keys]: boolean };
// type NullableFlags = { [K in keyof Flags]: Flags[K] | null };
// type Nullable<T> = { [P in keyof T]: T[P] | null };
// type Partial<T> = { [P in keyof T]?: T[P] };
// type Readonly<T> = { readonly [P in keyof T]: T[P] };
// type Pick<T, K extends keyof T> = { [P in K]: T[P] };
// type Record<K extends keyof any, T> = { [P in K]: T };
