export type Analysis = {
  classification: {
    type: "switch" | "parallel" | "serial";
    reasoning: string;
  };
};
