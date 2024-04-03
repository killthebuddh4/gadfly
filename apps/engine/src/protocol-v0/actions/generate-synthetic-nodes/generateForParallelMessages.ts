import { openai } from "../../../lib/openai/openai.js";

type Message = Parameters<
  typeof openai.chat.completions.create
>[0]["messages"][number];

export const generateForParallelMessages = ({
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
      content: "I was, I used the PARALLEL technique.",
    },
    {
      role: "user",
      content: "Great. How does PARALLEL work?",
    },
    {
      role: "assistant",
      content:
        "We use PARALLEL to map a problem into several independent sub-problems. It's a good choice when you think the problem can be decomposed into smaller problems that can be solved independently. The sub-problems' independence is critical. Dependent sub-problems must be solved using SERIAL. When we write scripts to solve problems in parallel, the scripts have no knowledge of each other.",
    },
    {
      role: "user",
      content: "Great, please send me the list of sub-problems.",
    },
  ];
};
