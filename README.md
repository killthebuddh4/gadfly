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

...

2024-04-01-02

restart policy

top-down vs bottom-up design

Where would a node need to get feedback from?

- parent
- child
- 

So I was working through this idea of a node's evolution and it led me to thinking about the events which would trigger an iteration. Now I'm thinking about the evolution as a series of event -> patch -> new node. The system for generating events (feedback and signals) is something like this:

![Process Control](./assets/process-control.png)

One hangup I have with the above diagram is that it only allows for synthetic nodes to emit events. I'm not sure that's not ok, but I'm not sure it's ok either. I need to keep thinking this through.

2024-04-02-00

So we have a 

- signal (definition, spec)
- o
  

So every node has a 

governor, controller, and supervisor




the controller is responsible for interpreting feedback


controller's responsibility is generating patches
supervisor's responsibility is handling errors (generate a patch or propagate?)
governor's responsibility is generating feedback

governor generates feedback, only inside synthetic nodes
supervisor generates feedback, only inside analysis nodes
hypervisor maintains system-wide invariants

evaluate
QA (target, result) -> delta
feedback
ENGR (target, result, delta) -> feedback
patch
SUPERVISOR (history, feedback) -> patch
iterate
TECHNICIAN (node, patch) -> next node


throw errors
catch errors


governor
supervisor
controller
hypervisor


every edge
every node

in general, nodes can _only_ talk to their children

governor -> a node can generate feedback and send it to all children
controller -> the child receives feedback and then generates a patch
agent -> a patch is then applied to the node to create a new node


Analysis might sometimes be a lossy operation. We need some kind of a mechanism to rehydrate child nodes.

Governors are responsible for multi-hop loss management related to specific details of the synthetic data. This is like the synthetic cybernetic flow.

Hypervisors are responsible for maintaining system-wide invariants, invariants are properties that do not change as synthetic data changes.

Supervisors are responsible for failure management, in some sense. Supervisors are more about execution and analytic stuff.

Controllers take in patches and output new nodes.

feedback -> patch -> node


Every node has a controller which is responsible for iterating on the node

_The most important thing, which I'm thinking about very very very indirectly, is how to keep the context windows small. I think if you can keep context windows from blowing up, you can build something insane._


The governor is responsibe for defining the target signal.

The supervisor's role is for keeping the thing running.

The controller's role is to integrate feedback into new versions.

The hypervisor's role is to maintain system invariants.

2024-04-02-01

Ok so I think it's too early get too caught up in the cybernetic components. I've settled on four decisions that I think are future-proof and enough to keep moving:

I need _something_ that has visibility to the overall _reference signal derivation_ process.

I need _something_ that has visibility to the overall _real signal generation_ process.

I need _something_ that maintains generic invariants in certain parts of the systm

I need _something_ that is only and fully responsible for a single node's history.

2024-04-02-02

One of the "first high-level programming languages" was explicitly a "planning language" [Konrad Zue Plankalkul](https://en.wikipedia.org/wiki/Plankalk%C3%BCl)

2024-04-03-00

If you only have switch, parallel, and serial, and you fix the number of arguments for each at 10, then a 10 depth tree has 400 trillion leaves. I.e. there's 600 trillion ways to contstruct a 10 depth plan. And that is if we don't include the choices for arguments. So obviously we can't explore all paths. So obviously we aren't exploring all paths. That's where the language model comes in.


SyntheticNode
SyntheticEdges
SyntheticEdge
AnalyticNode
AnalyticEdge
AnalyticEdges

2024-04-03-01

An agent is not a long-lived thing. An agent is an autonomous generator function.

2024-04-04-00

Ok so I have a really, really nice network substrate to build on top of. I did a lot of tinkering with the high-level architecture in the last few days. It was a productive few days in terms of developing my intuitions about the problem, but in the end I realized that I was trying to think about too many problems at once. On the one hand, there's the messaging architecture, on the other hand there's the logical architecture. It's kind of like there's an execution layer, or something like that. An execution engine or medium. And there's the semantic layer.

Eventually what happened was I happened into a _really, really_ (I think) promising execution layer made up networks, actors, and proxies. It's just a super basic message hub kind of thing with the ability to intercept messages and forward them. Actors are the core messaging element. Then there's an _agent_ which is like the entry point to a nested network of actors. An agent is like an encapsulate cluster of actors. Being able to encapsulate clusters I think is going to be the way we're able to test dialectical patterns, or somethign like that. I got a basic dialectic flow working, actually.

I'm not 100% sure what I need to do next. I'm not sure if I need to write some PoC tools for working with the networks/clusters or if I'm ready to start testing the hierarchical dialectical process. _Actually I think I need to just write down exactly what that hierarchical process looks like._

2024-04-04-01

A synthetic node is a natural language description of a problem.

An analytic node is a general purpose program that solves the problem.

![Analytic Leaves](./assets/analytic-leaves.png)

Thinking about it this way makes a lot more sense I think. It makes the relationships between natural language objects more obvious and it makes the relationships between analytic objects more obvious. It shows the flow of data way better. Easier to see the "parse tree" emerging.