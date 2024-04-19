import { Network } from "../../primitives/memory/Network.js";
import { Log } from "../../primitives/memory/Log.js";
import { Actor } from "../../primitives/actor/Actor.js";
import { readFile } from "fs/promises";
import { Address } from "../../primitives/memory/Address.js";
import { readLog } from "./readLog.js";
import { z } from "zod";
import { zReferences } from "./zReferences.js";

export const readActor = async ({
  network,
  address,
}: {
  network: Network;
  address: Address;
}) => {
  const path = `./data/actors/${address.address}`;

  const data = await readFile(path, "utf8");

  const json = JSON.parse(data);

  const references = zReferences.parse(json);

  const logs = {
    spec: {
      name: await readLog({
        network,
        address: { address: references.spec.name.address },
      }),
      description: await readLog({
        network,
        address: { address: references.spec.description.address },
      }),
      inputs: await Promise.all(
        references.spec.inputs.map(async (input) =>
          readLog({ network, address: { address: input.address } }),
        ),
      ),
      output: await readLog({
        network,
        address: { address: references.spec.output.address },
      }),
      constraints: await Promise.all(
        references.spec.constraints.map(async (constraint) =>
          readLog({ network, address: { address: constraint.address } }),
        ),
      ),
    },
    inputs: await Promise.all(
      references.inputs.map(async (input) =>
        readLog({ network, address: { address: input.address } }),
      ),
    ),
    output: await readLog({
      network,
      address: { address: references.output.address },
    }),
    feedback: await readLog({
      network,
      address: { address: references.feedback.address },
    }),
  };

  const history = references.history.map((elem) => {
    return {
      spec: {
        name: getSignal({ id: elem.spec.name, log: logs.spec.name }),
        description: getSignal({
          id: elem.spec.description,
          log: logs.spec.description,
        }),
        inputs: elem.spec.inputs.map((input) => {
          const log = logs.spec.inputs.find((log) => log.address === input.log);

          if (log === undefined) {
            throw new Error(`Log not found: ${input.log}`);
          }

          return getSignal({ id: input.id, log });
        }),
        output: getSignal({ id: elem.spec.output, log: logs.output }),
        constraints: elem.spec.constraints.map((constraint) => {
          const log = logs.spec.constraints.find(
            (log) => log.address === constraint.log,
          );

          if (log === undefined) {
            throw new Error(`Log not found: ${constraint.log}`);
          }

          return getSignal({ id: constraint.id, log });
        }),
      },
      inputs: elem.inputs.map((input) => {
        const log = logs.inputs.find((log) => log.address === input.log);

        if (log === undefined) {
          throw new Error(`Log not found: ${input.log}`);
        }

        return getSignal({ id: input.id, log });
      }),
      output: getSignal({ id: elem.output, log: logs.output }),
      feedback: getSignal({ id: elem.feedback, log: logs.feedback }),
    };
  });

  const getSignal = ({ id, log }: { id: string; log: Log }) => {
    const found = log.signals.find((signal) => signal.id === id);

    if (found === undefined) {
      throw new Error(`Signal not found: ${id}`);
    }

    return found;
  };
};
