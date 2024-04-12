import { Whisper } from "../../network/Whisper.js";
import { Receive } from "../../stream/Receive.js";

const receive: Receive = async ({ stream, message }) => {
  stream.history.push(message);
};

export const whisper: Whisper = async ({ network, message }) => {
  const found = network.streams.find((n) => n.address === message.destination);

  if (!found) {
    throw new Error(`Stream ${message.destination} not found`);
  }

  receive({ stream: found, message });
};
