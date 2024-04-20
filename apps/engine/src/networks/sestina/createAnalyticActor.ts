import { createLog } from "./createLog.js";
import { Network } from "../../primitives/network/Network.js";
import { Actor } from "../../primitives/actor/Actor.js";
import { v4 as uuid } from "uuid";
import { parseSestina } from "./parser/parseSestina.js";
import { getMostRecentSignal } from "../../primitives/helpers/getMostRecentSignal.js";
import { Signal } from "../../primitives/network/Signal.js";

export const createAnalyticActor = async ({
  network,
}: {
  network: Network;
}) => {
  const spec = {
    name: await createLog({
      network,
      address: { address: "analytic sestina name" },
      signals: [],
    }),

    description: await createLog({
      network,
      address: { address: "analytic sestina description" },
      signals: [],
    }),

    inputs: [
      await createLog({
        network,
        address: { address: "analytic sestina input spec" },
        signals: [],
      }),
    ],

    output: await createLog({
      network,
      address: { address: "analytic sestina output spec" },
      signals: [],
    }),

    constraints: [
      await createLog({
        network,
        address: { address: "analytic sestina constraints" },
        signals: [],
      }),
    ],
  };

  const inputs = await Promise.all(
    spec.inputs.map(async (log) => {
      return createLog({
        network,
        address: { address: `${uuid()}-analytic-sestina-input` },
        signals: [],
      });
    }),
  );

  const output = await createLog({
    network,
    address: { address: `${uuid()}-analytic-sestina-output` },
    signals: [],
  });

  const feedback = await createLog({
    network,
    address: { address: `${uuid()}-analytic-sestina-feedback` },
    signals: [],
  });

  const history: Actor["history"] = [];

  const describe: Actor["describe"] = async () => {
    const name = getMostRecentSignal({ log: spec.name });

    if (name === null) {
      return null;
    }
    const description = getMostRecentSignal({ log: spec.description });

    if (description === null) {
      return null;
    }

    const inputs = spec.inputs.map((input) => {
      return getMostRecentSignal({ log: input });
    });

    if (inputs.includes(null)) {
      return null;
    }

    const output = getMostRecentSignal({ log: spec.output });

    if (output === null) {
      return null;
    }

    const constraints = spec.constraints.map((constraint) => {
      return getMostRecentSignal({ log: constraint });
    });

    if (constraints.includes(null)) {
      return null;
    }

    return {
      name,
      description,
      inputs: inputs as Signal[],
      output,
      constraints: constraints as Signal[],
    };
  };

  const exec: Actor["exec"] = async (args) => {
    if (args.spec.name !== undefined) {
      await spec.name.append({ signal: args.spec.name });
    }

    if (args.spec.description !== undefined) {
      await spec.description.append({ signal: args.spec.description });
    }

    if (args.spec.inputs !== undefined) {
      await Promise.all(
        args.spec.inputs.map(async (input, i) => {
          await spec.inputs[i].append({ signal: input });
        }),
      );
    }

    if (args.spec.output !== undefined) {
      await spec.output.append({ signal: args.spec.output });
    }

    if (args.spec.constraints !== undefined) {
      await Promise.all(
        args.spec.constraints.map(async (constraint, i) => {
          await spec.constraints[i].append({ signal: constraint });
        }),
      );
    }
  };

  const patch: Actor["patch"] = async (args) => {
    await feedback.append({ signal: args.feedback });
  };

  const call: Actor["call"] = async (args) => {
    return { output: args.inputs[0] };
  };

  const actor = {
    spec,
    inputs,
    output,
    feedback,
    history,
    describe,
    exec,
    patch,
    call,
  };

  const found = network.actors.find(
    (n) => n.output.address.address === output.address.address,
  );

  if (found === undefined) {
    await network.attach.actor({ actor });
  }

  return actor;
};
