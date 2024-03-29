export const prompt = ({ problem }: { problem: string }) => `

You have been given a problem to solve. The problem is:

${problem}

You have 4 methods by which to go about solving the problem:

- SWITCH
- PARALLEL
- SERIAL
- FUNCTION

Choose SWITCH if you think the problem needs to be narrowed down to
a more specific problem. In other words, if you think there are a few
different ways of solving the problem depending on the specific details,
choose SWITCH.

Choose PARALLEL if you think the problem is a composite of a number of
independent problems that can be solved individually. It is important that
these problems are truly independent, otherwise you should choose SERIAL.

Choose SERIAL if you think the problem is best solved by solving a series
of simpler problems in sequence.

Choose FUNCTION if you think the problem is simple enough to be solved directly
in less than 500 lines of JavaScript code.
`;
