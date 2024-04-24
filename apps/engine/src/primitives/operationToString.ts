export const operationToString = ({
  operation,
}: {
  operation: {
    argument: {
      value: {
        signals: Array<{ text: string }>;
      };
    } | null;

    mutation: {
      signal: {
        text: string;
      };
    } | null;

    result: {
      value: {
        signals: Array<{ text: string }>;
      };
    } | null;
  };
}) => {
  return `
  *************OPERATION*************

    ---- ARGUMENTS ----

    ${operation.argument?.value.signals.map((s) => s.text).join("\n")}


    ---- MUTATION ----

    ${operation.mutation?.signal.text}

    ---- RESULT ------

    ${operation.result?.value.signals.map((s) => s.text).join("\n")}
    \n\n\n
    `
    .split("\n")
    .map((line) => line.trim())
    .join("\n");
};
