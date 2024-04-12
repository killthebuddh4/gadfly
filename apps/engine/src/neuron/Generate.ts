import { Message } from "../stream/Message.js";
import { Neuron } from "./Neuron.js";

export type Generate = (args: { neuron: Neuron }) => Promise<Message>;
