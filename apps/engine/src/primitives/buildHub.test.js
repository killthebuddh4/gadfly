import { createNetwork } from "./createNetwork.js";
import { createVariable } from "./createVariable.js";
import { createActor } from "./createActor.js";
import { createWrite } from "./createWrite.js";
import { createNarrow } from "./createNarrow.js";
import { buildHub } from "./buildHub.js";
import { supabase } from "../lib/supabase.js";

describe("Build hub", () => {
  it("works", async function () {
    this.timeout(10000);

    try {
      const network = await createNetwork({ name: "Test Network" });

      const hub = await buildHub({ networkId: network.id });

      hub.subscribe(({ id }) => {
        console.log(JSON.stringify(id, null, 2));
      });

      const parentActor = await createActor({
        network,
        name: "Parent Actor",
      });

      const childActor = await createActor({
        network,
        name: "Child Actor",
      });

      const variable = await createVariable({
        name: "Test Variable",
        variant: "CONTEXT",
        input: parentActor.id,
        output: childActor.id,
      });

      await createWrite({
        variableId: variable.id,
        mutation: "Socrates is a man.",
      });

      await createNarrow({
        variableId: variable.id,
        mutation: "All men are mortal.",
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      await supabase.removeAllChannels();
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});
