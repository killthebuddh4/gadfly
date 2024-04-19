import { Actor } from "../../primitives/actor/Actor.js";
import { writeFile } from "fs/promises";
import { zReferences } from "./zReferences.js";

export const writeActor = ({ actor }: { actor: Actor }) => {
  const references = zReferences.parse({
    spec: {
      name: actor.spec.name.address,
      description: actor.spec.description.address,
      inputs: actor.spec.inputs.map((input) => input.address),
      output: actor.spec.output.address,
      constraints: actor.spec.constraints.map(
        (constraint) => constraint.address,
      ),
    },
    inputs: actor.inputs.map((input) => input.address),
    output: actor.output.address,
    feedback: actor.feedback.address,
    history: actor.history.map((elem) => {
      return {
        spec: {
          name: elem.spec.name.id,
          description: elem.spec.description.id,
          inputs: elem.spec.inputs.map((input) => ({
            log: input.log,
            id: input.id,
          })),
          output: elem.spec.output.id,
          constraints: elem.spec.constraints.map((constraint) => ({
            log: constraint.log,
            id: constraint.id,
          })),
        },
        inputs: elem.inputs.map((input) => ({
          log: input.log,
          id: input.id,
        })),
        output: elem.output.id,
        feedback: elem.feedback.id,
      };
    }),
  });

  const path = `./data/actors/${actor.spec.name.address.address}`;

  return writeFile(path, JSON.stringify(references, null, 2));
};
