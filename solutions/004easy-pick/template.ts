type SuPick<T, K extends keyof T> = {
    [P in K] : T[P] // T中可能不存在P, 需要在使用前加判断
}


/**
 * 知识点：
1. [P in K] // K = "title" | "name" 联合类型的遍历；
2. T[P] // T = { title : string }  取得该索引对应的类型；
3. extends  //  泛型约束
4. keyof  // 索引作为一个联合类型返回
 */
/**
 * interface Todo {
      title: string
      description: string
      completed: boolean
    }

    keyof Todo = "title" | "description" | "complete"
    K extend typeof Todo 就表示 K必须在 "title" | "description" | "complete"  之中
 */