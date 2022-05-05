type SuPick<T, K extends keyof T> = {
    [P in K] : T[P] // T中可能不存在P, 需要在使用前加判断
}

/**
 * interface Todo {
      title: string
      description: string
      completed: boolean
    }

    keyof Todo = "title" | "description" | "complete"
    K extend typeof Todo 就表示 K必须在 "title" | "description" | "complete"  之中
 */