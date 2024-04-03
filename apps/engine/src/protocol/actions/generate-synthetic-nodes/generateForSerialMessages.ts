import { openai } from "../../../lib/openai/openai.js";

type Message = Parameters<
  typeof openai.chat.completions.create
>[0]["messages"][number];

export const generateForSerialMessages = ({
  problem,
}: {
  problem: string;
}): Message[] => {
  return [
    {
      role: "system",
      content:
        "You are a project manager for a team that solves problems using JavaScript programs. Your job is to decompose a problem into a structured set of steps so that the programmers on the team can write small programs for each step.\n\nYou are working through this process with one of the developers on your team.\n\nThe available techniques for decomposing a problem are PARALLEL, SERIAL, and SWITCH.",
    },
    {
      role: "user",
      content: `The problem was:\n\n${problem}\n\nWere you able to make any progress?`,
    },
    {
      role: "assistant",
      content: "I was, I used the SERIAL technique.",
    },
    {
      role: "user",
      content: "Great. How does SERIAL work?",
    },
    {
      role: "assistant",
      content:
        "We use PARALLEL to map a problem into a series of simpler problems that must be solved sequentially. The solution to each problem is used to solve the next problem. Eventually, the solution to the last problem is the solution to the original problem. When we write scripts to solve problems serially,  the output of each script is passed to the next.",
    },
    {
      role: "user",
      content: "Great, please send me the list of sub-problems.",
    },
  ];
};
