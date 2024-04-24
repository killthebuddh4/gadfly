import { createNetwork } from "./createNetwork.js";
import { createVariable } from "./createVariable.js";
import { createActor } from "./createActor.js";
import { createWrite } from "./createWrite.js";
import { createNarrow } from "./createNarrow.js";
import { buildHub } from "./buildHub.js";
import { supabase } from "../lib/supabase.js";
import { buildOnContextChange } from "./buildOnContextWrite.js";

describe("buildOnParentChange", () => {
  it.only("works", async function () {
    this.timeout(10000);

    try {
      const network = await createNetwork({ name: "Test Network" });

      const hub = await buildHub({ networkId: network.id });

      const parentActor = await createActor({
        network,
        name: "Parent Actor",
      });

      const childActor = await createActor({
        network,
        name: "Child Actor",
      });

      const context = await createVariable({
        name: "Test Variable",
        variant: "CONTEXT",
        input: parentActor.id,
        output: childActor.id,
      });

      const grandChildActor = await createActor({
        network,
        name: "Grandchild Actor",
      });

      const nestedContext = await createVariable({
        name: "Nested Variable",
        variant: "CONTEXT",
        input: childActor.id,
        output: grandChildActor.id,
      });

      const messages = [];

      await buildOnContextChange({
        actorId: childActor.id,
        hub,
        handler: (message) => {
          messages.push(message);
        },
      });

      await createWrite({
        variableId: context.id,
        mutation: "Socrates is a man.",
      });

      await createWrite({
        variableId: nestedContext.id,
        mutation: "What kind of animal is socrates?",
      });

      await createNarrow({
        variableId: context.id,
        mutation: "All men are mortal.",
      });

      await createNarrow({
        variableId: nestedContext.id,
        mutation: "Socrates is a man",
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (messages.length !== 2) {
        throw new Error("Expected 2 messages, got " + messages.length);
      }

      console.log(JSON.stringify(messages, null, 2));

      await supabase.removeAllChannels();
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});
