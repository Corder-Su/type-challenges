// type MyFirst<T extends any[]> = T  extends []  ? never : T[0]
// type MyFirst<T extends any[]> = T["length"] extends 0  ? never : T[0] 
// type MyFirst<T extends any[]> = T[0]  extends T[number]  ? T[0] : never
type MyFirst<T extends any[]> = T extends [infer First, ... infer Rest]  ? First : never

// 特殊情况 ： 空数组 ，返回undefined
// ts中的判断 : 
//      T extends []  // 判断T是不是一个空数组

// 2. 判断 [] 的length 属性
//      indexed  通过 T["length"] extends 0 // 来判断长度为0

// 3. T[number] 返回一个union类型
// 
//      type arr = [1, 2, 3];
//      type a = arr[number] // 3 | 1 | 2
//      空数组则会返回一个never
//      type arr = [];
//      type a = arr[number] // never
//      这时 T[0] 为 undefined , undefined 不在never当中

// 4. infer 类似于 js中的数组解构
//         T extends [infer first, ... infer rest] ? first : never
//         // 如果有first的话，就取first