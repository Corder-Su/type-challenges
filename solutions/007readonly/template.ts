type SuReadonly<T> = {
    readonly [P in keyof T] : T[P];
}
// Mapped Types

type reMappedType<Type> = {
    -readonly [Property in keyof Type as `get${Capitalize<string & Property>}`] : Type[Property]
}

interface Todo1 {
    1 : string
    title: string
    description: string
    completed: boolean
    meta: {
      author: string
    }
}


type user = SuReadonly<Todo1>

type reMap = reMappedType<user>

let tom! : [string, number]; // ?
tom[0] = 'Tom'