import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tuple2 = ['tesla', 'model 3', 'model X', 'model Y']

type cases = [
  Expect<Equal<MTupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = MTupleToObject<[[1, 2], {}]>
