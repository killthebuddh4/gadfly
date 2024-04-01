> Note: This project began as a highly exploratory [go project](https://github.com/killthebuddh4/gadfly-go). We ended up with a much clearer picture of what we wanted to build and also the realized that golang is not the right tool for the job.

## Overview

__Gadfly__ is an AI agent framework. It's core is a natural language compiler, programming language, and orchestration engine. A Gadfly agent satisfies natural language requests by writing scripts and then executing them.

> More specifically, Gadfly is only concerned with deciding which scripts to write, when to execute them, and how to glue them together. General-purpose source code generation and execution is, at the moment, out of scope. We think that Gadfly could be a natural complement to something like [Open Interpreter](https://www.openinterpreter.com/).

A Gadfly agent's interface is natural language. When it receives a request it _parses_ the request into a program in the Gadfly language, a very simple and very high level functional programming language. It then _compiles_ the program into a collection of source files in a general purpose programming language. Finally, it orchestrates the execution of the collection of source files.

## (WIP) Litepaper

When we think of how a programming language executes, a common way to start is by thinking of the program's source code as a tree (a parse tree). The leaf nodes in the tree are executed first and yield values. The values are propagated upwards as inputs into their parent nodes, which represent functions. And so on. In this way we imagine data flowing from the leaf nodes _upwards_ towards the root of the tree. When the program halts, the root node in the tree is the result of the program.

In Gadfly we do things a little bit differently. We think of _natural language user input_ as a program's ultimate source code. When execution begins, i.e. at the moment the input is received, the parse tree doesn't exist. When execution begins, data flows _downward_ from the root, _generating the parse tree_ just in time.

![Gadfly Parse Tree](./assets/gadfly-parse-tree.png)

_N.B. It's kind of confusing and good to remember that analytic nodes operate on synthetic data and synthetic nodes operate on analytic data._

We call this downward execution the _analytic mode_. The code which implements the analytic mode is a lot like a parser. It decomposes the user input into a tree of sub-requests. We call the upward mode the _synthetic mode_ and the code which implements it is like an interpreter. In the synthetic mode we synthesize values that represent solutions to the sub-requests. In between the analytic and synthetic modes there is a compilation step where the analytic nodes in the Gadfly parse tree are compiled into corresponding synthetic nodes written in a general purpose programming language. _It is the job of the execution engine to orchestrate sequences of analytic, synthetic, compilation, backup, and retry steps._

We call natural language "synthetic data" and "traditional" data "analytic data". So we have this picture of synthetic data starting at the root and flowing down to generate the leaves of a tree and we have analytic data flowing up from the leaves to the root. As the program executes, the execution engine flipflops between the synthetic and analytic modes, backing up on occasion, and retrying things when prudent. _The implementation details of this process is the central problem Gadfly attempts to solve._

The Gadfly language includes the following keywords (used in the analytic mode):

- `switch`
- `parallel`
- `serial`
- `function`

`switch` takes as input some synthetic data and routes it through one of N parse trees.

`parallel` takes as input some synthetic data and routes it through all of N parse trees.

`serial` takes as input some synthetic data and routes it through a series of N parse trees in order.

`function` takes as input some synthetic data and returns a generated source file.

## Down the road

Gadfly agents write programs by "inlining everything". There's no names, variables, closures, etc. Every request results in a brand new parse tree. We think that this will be fine in the near term because of the kinds of real-world problems we're targeting. We do think that eventually these limitations will start to matter for basically the same reasons we humans don't write code this way. We envision two features that will go a very long way, _subtree parameterization_ and _named subtrees_. Subtree parameterization is basically function definitions applied to the analytic mode. Named subtrees are like traditional variables but accessible from anywhere deeper in the tree without needing to hoist the definitions.

Gadfly doesn't include loops but we think that's probably fine. When you're authoring a program you're not really writing the same function over and over again until some condition is met.

## Notes

2024-03-30-00

Think about some structured ways you could change the prompts:

- Use a system message vs include in convo
- You vs we
- Markdown vs plaintext
- Re-ordering the documentation for functions (or explicitly tell it to prefer one)
- Using less-overloaded phrases (like FUNCTION)
- Instead of saying "what technique to start?" we could use "What technique should we apply?"
- Trying more than one solution and then selecting the best outcome.

2024-03-30-01

What are the different ways to generate the next serial problem? What are the different states the tree could be in?

- generate whole series at once
- generate next given root and previous problem
- generate next given root and previous problem and previous problem's solution

_NOTE TO SELF_ Remember to keep thinking about everything in terms of operations on a tree. By always framing things in terms of tree operations, we can maintain some invariants and program the tree. We have to continuously map _semantic operations_ onto tree operations.

2024-04-01-00

- request user input
- try something new
- respond to signals

synthetic node:

- problem
- supervisor
- history
  - hypothesis
    - analysis
    - synthesizer
  - conclusion
  - analytic node
  - children

synthetic edge

- source
- target
- reasoning

context

node
  classification
  analysis
  synthesis
  children


2024-04-01-01

Ok so I think I have a pretty strong starting point for the general architecture of the engine.

What we have is a _synthetic program_ that is being continuously compiled into an _analytic program_. A synthetic node is a node with a natural language problem statement and without a script that implements a solution. An analytic node is a way to pull data from the synthetic program, execute it as a computer program, and then return the results to the synthetic program. An analytic program is a synthetic program where every leaf node is an analytic node. It's like a synthetic program that has been "solved" or "implemented".

Visually:

![Synthetic Program](./assets/synthetic-program.png)
![Analytic Program](./assets/analytic-program.png)

A synthetic program has a kind of ordering to it. A synthetic node is at the root, representing a problem. An analysis is generated which classifies the problem and determines a high-level strategy. The root problem and strategy are then used to derive some context for each sub problem the strategy requires. Each problem is a synthetic node. And so on. Sometimes the strategy is "analytic" which means that we decide to solve the problem directly using a program written in a general purpose programming language. Generation terminates when all leaf nodes are "analytic".

An "analytic node" is direct solution to a problem. It's basically a script that's executed inside a kind of framework which binds the script to the synthetic program. It looks like this:

![Analytic Node](./assets/analytic-node.png)

Now, every node in the synthetic program is not "really" a node, it's an enitre history of node versions called an _evolution_. Every evolution, like a synthetic program, has an ordering to it. It goes node -> review -> patch -> node. Visually:

![Evolution](./assets/node-evolution.png)

Every evolution has a _supervisor_ which is responsible for controlling the evolution. It conducts reviews and applies patches.

__NEXT__

I'm still thinking about exactly how to structure the relationship between a node and an evolution. Is a supervisor part of a node, and an evolution part of a node? Is there two trees, a node tree and an evolution tree, that have to be synchronized all the time? Does a node see its children's evolutions? Or does a node see its own evolutions? These are all questions that I'll need to think about. It doesn't have to be perfect right away, but I at least need to get to a point where I have a structure in my head that intuitively makes sense to me.