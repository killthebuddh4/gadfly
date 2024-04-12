import { Message } from "../message/Message.js";
import { Neuron } from "../neuron/Neuron.js";

export type Generate = (args: { neuron: Neuron }) => Promise<Message>;
