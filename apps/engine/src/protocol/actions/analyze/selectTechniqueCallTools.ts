type Tool = {
  type: "function";
  function: {
    name: string;
    description: string;
  };
};

export const selectTechniqueCallTools: Tool[] = [
  {
    type: "function",
    function: {
      name: "SWITCH",
      description: "Use the SWITCH technique.",
    },
  },
  {
    type: "function",
    function: {
      name: "PARALLEL",
      description: "Use the PARALLEL technique.",
    },
  },
  {
    type: "function",
    function: {
      name: "SERIAL",
      description: "Use the SERIAL technique.",
    },
  },
] as const;
