import { Message } from "../memory/Message.js";
import { Neuron } from "./Neuron.js";

export type Generate = (args: { neuron: Neuron }) => Promise<Message>;
