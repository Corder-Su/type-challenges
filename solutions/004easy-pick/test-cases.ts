import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, SuPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, SuPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
