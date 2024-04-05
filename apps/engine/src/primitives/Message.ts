export type Message = {
  id: string;
  source: string;
  destination: string;
  text: string;
  reply: {
    publish: ({ message }: { message: Message }) => Promise<void>;
    whisper: ({ message }: { message: Message }) => Promise<void>;
  };
};
