Neural networks will use general purpose programming languages as reasoning engines. The argument is from first principles and is based on an idea called _computational irreducibility_.

A computationally irreducible system is a system whose future state at time X + T can only be predicted by running it through each state X, X + 1, ..., X + T - 1 according to a set of known transition rules. Such a system if fundamentally intractable, there's no way to be intelligent about the system, to make predictions "ahead of time". And the thing is, _every single system is computationally irreducible_. 

But intelligence exists. How? By abstraction. An abstraction of a system is a new system which corresponds to the old system in some known way. A useful abstraction is necessarily smaller, it has fewer degrees of freedom in its state, than the system it abstracts. Because abstractions are smaller, they run faster. When we don't want to, or can't, run a system, we create an abstraction of the system and run it instead. We use the abstraction's states to infer something about the concrete system.

Useful abstractions are necessarily lossy. When we create abstractions we have to make decisions about which of the concrete degrees of freedom we will omit or combine in this way or that way, we have to select an encoding for our abstraction. The encoding we select has a profound impact on how we use the abstraction.

The way we use an abstraction is determined by four parameters: its speed, precision, accuracy, and generality. A fast abstraction can get "way ahead" of the system it models, we can use it to predict states deep in the future. A precise abstraction is easy to run, we can step between its states with a very high level of confidence. An accurate abstraction is easy to infer from, there's a clear correspondence between its states and the system it models. A general abstraction can be used to make predictions about a wide range of the degrees of the freedom in the original system. It seems to be the case that an abstraction can not be all at once optimally fast, precise, accurate, and general.



Simulation is fast, formalization is precise, systematization is accurate, and search is general.






The history of intelligence can in some ways be thought of as an evolution from one kind of encoding to the next.



The argument is from first principles, and goes like this: The world is _computationally irreducible_. The world state evolves always according to a bunch of inviolable rules. The way to be "intelligent" is to build a model of those rules, set some initial conditions, and then "run" the model and see what happens. The problem with this kind of intelligence is that you have to somehow "keep up" with the world. The world runs faster than you do, so you have to cheat and leave out some unnecessary computations. You remove some stuff and optimize some stuff and try again, and again, and again. Eventually you have a model that can get ahead of the world in useful ways. There seems to be a fundamental tension between speed, generality, and precision. A perfectly general and precise model evolves at the speed of the world. A super precise model can either be fast or general. A super general model can't be very precise.

What you're left with is something like a neural network, a model that can get really far ahead of the world but also really struggles with the formal details.