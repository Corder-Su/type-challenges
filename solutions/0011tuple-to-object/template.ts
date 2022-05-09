type MTupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

/**
 * 1. 字面量类型
 *      通过 let str = '123' ;  type s = typeof str // string
 *      而  const str = '1234' ; type s = typeof str  // '1234'  这就是字面量类型
 *
 *      同样的：
 *      const tuple = ['tesla', 'model 3', 'model X', 'model Y']
 *      typeof tuple // string[]
 * 
 *      const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 *      typeof tuple // ['tesla', 'model 3', 'model X', 'model Y'] 字面量
 * 
 * 2. 数组遍历
 *      遍历类型数组： T[number]
 * 
 * 
 * 3. typeof使用
 *      const tuple = [] ,是js中定义的一个数组，如何转化成 type空间中
 *      
 *      
 */