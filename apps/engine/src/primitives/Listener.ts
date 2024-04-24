type Operation = {
  id: string;
  sequence_id: string;
  type: string;
};

export type Listener = (operation: Operation) => Promise<unknown>;
