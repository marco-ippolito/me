// TODO: refactor using the same values of OramaSchema
type ReturnTypeAsString<T extends string | number | bigint | boolean | null | undefined> = T extends string
  ? 'string'
  : T extends number
    ? 'number'
    : T extends bigint
      ? 'bigint'
      : T extends boolean
        ? 'boolean'
        : T extends null
          ? 'null'
          : T extends undefined
            ? 'undefined'
            : never

export type OramaSchema<T extends Record<string, unknown>> = {
  // @ts-expect-error: i need this, the error is causing by unknown
  [Key in keyof T]: ReturnTypeAsString<T[Key]>;
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
}
