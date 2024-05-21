import { Brand } from "./Brand";

export type Branded<Base, B> = Base & Brand<Base, B>;
