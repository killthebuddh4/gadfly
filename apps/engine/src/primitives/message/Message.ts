export type Message = {
  id: string;
  parent: Message | null;
  source: string;
  destination: string;
  text: string;
};
