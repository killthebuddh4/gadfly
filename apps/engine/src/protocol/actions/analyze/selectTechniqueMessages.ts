import { openai } from "../../../lib/openai/openai.js";

type Message = Parameters<
  typeof openai.chat.completions.create
>[0]["messages"][number];

export const selectTechniqueMessages = ({
  problem,
}: {
  problem: string;
}): Message[] => {
  return [
    {
      role: "system",
      content:
        "You are a project manager for a team that solves problems using JavaScript programs. Your job is to decompose a problem into a structured set of steps so that the programmers on the team can write small programs for each step.\n\nYou are working through this process with one of the developers on your team.",
    },
    {
      role: "user",
      content:
        "Could you help me remember which techniques we can use to solve problems for our client?",
    },
    {
      role: "assistant",
      content:
        "There are three techniques we could use to solve the problem. They are:\n\n- SWITCH\n- PARALLEL\n- SERIAL",
    },
    {
      role: "user",
      content: "Great. How does SWITCH work?",
    },
    {
      role: "assistant",
      content:
        "We use SWITCH to map a problem into a more specific problem. It is used when the problem can be solved in more than one way, depending on the specific details of the problem. If we need to write a different script for each situation, we should use this technique.",
    },
    {
      role: "user",
      content: "Got it. How does PARALLEL work?",
    },
    {
      role: "assistant",
      content:
        "We use PARALLEL to map a problem into several independent sub-problems. Choose it if you think the problem can be decomposed into smaller problems that can be solved independently. The sub-problems' independence is critical. Dependent sub-problems must be solved using SERIAL. When we write scripts to solve problems in parallel, the scripts have no knowledge of each other.",
    },
    {
      role: "user",
      content: "Got it, how does SERIAL work?",
    },
    {
      role: "assistant",
      content:
        "We use PARALLEL to map a problem into a series of simpler problems that must be solved sequentially. The solution to each problem is used to solve the next problem. Eventually, the solution to the last problem is the solution to the original problem. When we write scripts to solve problems serially,  the output of each script is passed to the next.",
    },
    {
      role: "user",
      content: `Ok great, we can use FUNCTION, SWITCH, SERiAL, or PARALLEL. Here is what our client has requested:\n\n${problem}\n\nWhat technique do you think we should start with?`,
    },
  ];
};
