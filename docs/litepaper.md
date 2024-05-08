# Overview

Gadfly is a [system 2](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow) compiler for language models, language models use it to author software. As is often the case with compilers, Gadfly is also a programming language, REPL, and CLI.

There are a few huge differences between Gadfly and other compilers. The biggest difference is that other compilers are computer programs that accept source code and generate other computer programs; Gadfly is a language model program that accepts natural language and generates source code.

A computer program is a decision graph. The software development lifecycle is also a decision graph. Gadfly unifies the two via a metaprogramming language whose inputs and outputs are natural language and source code. One way to visualize a Gadfly program is to imagine a git history which includes not only changes made to source code, but also every thought and action by every developer and every stakeholder involved in the project.

# Graphs, graphs, and graphs

Everything in a Gadfly program is a graph with nodes that have values. Values are text blobs formatted as Markdown, TypeScript source code, or JSON. Everything must be a graph because

1. the problem domain is both extremely fractal and extremely recursive and
2. we must be able to incrementally generate (and degenerate) data structures.

Similarly, everything must be a text blob because

1. the problem domain is both extremely fractal and extremely recursive and
2. we must be able to automatically generate values.

The graph data structures we use can be sorted into layers:

1. base layer (Graph, Node, Edge) - basic graphs without any enforced structure
2. structural layer (Sequence, Flow, and Tree) - graphs with just a little bit of enforced structure
3. state layer (Log, Machine) - structural graphs used to generate (and trace) the state of other graphs
4. dialectic layer - graphs used to generate nodes in other graphs
5. language layer - graphs which represent Gadfly language constructs.

A couple important high-level ideas are

1. a single Gadfly program is "really" one large graph with a bunch of subgraphs from each layer
2. we must be able to recurse through layers as necessary (e.g. we should be able to replace any node in a Gadfly program with a Gadfly program).

# Dialectic

__TODO Dialectic, actor, daemon, ghost, and oracle__

WIP

A dialectic is a decision process and is, generally speaking, a group conversation between actors. An actor is, generally speaking, a language model API.

Everything in a Gadfly program is generated via a dialectical process. A dial
An actor is, generally speaking, a language model API. Every node in the state layer represents a decision to generate a node in another graph. An actor that generates a decision is called a "daemon" and an actor that generates