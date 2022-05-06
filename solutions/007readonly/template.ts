type SuReadonly<T> = {
    readonly [P in keyof T] : T[P];
}
// Mapped Types