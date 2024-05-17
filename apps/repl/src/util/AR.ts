export type AR<T extends (a: any) => any> = Awaited<ReturnType<T>>;
