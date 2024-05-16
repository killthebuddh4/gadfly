import { prisma } from "../../lib/prisma.js";
import { primitive as nodeTypePrimitive } from "./node/types/primitive.js";
import { primitive as edgeTypePrimitive } from "./edge/types/primitive.js";
import { primitive as graphTypePrimitive } from "./graph/types/primitive.js";
import { primitive as valueTypePrimitive } from "./value/types/primitive.js";
import { client as typeClient } from "./type/client.js";
import { client as graphClient } from "./graph/client.js";
import { client as valueClient } from "./value/client.js";
import { client as nodeClient } from "./node/client.js";
import { client as edgeClient } from "./edge/client.js";

const URL = "http://localhost:9999";

describe("Primitives", () => {
  before(async () => {
    try {
      await typeClient.create({
        url: URL,
        body: {
          url: nodeTypePrimitive.url,
          description: nodeTypePrimitive.description,
        },
      });
    } catch (error) {
      // Do nothing
    }

    try {
      await typeClient.create({
        url: URL,
        body: {
          url: edgeTypePrimitive.url,
          description: edgeTypePrimitive.description,
        },
      });
    } catch {
      // ignore
    }

    try {
      await typeClient.create({
        url: URL,
        body: {
          url: graphTypePrimitive.url,
          description: graphTypePrimitive.description,
        },
      });
    } catch {
      // ignore
    }

    try {
      await typeClient.create({
        url: URL,
        body: {
          url: valueTypePrimitive.url,
          description: valueTypePrimitive.description,
        },
      });
    } catch {
      return null;
    }

    return null;
  });

  it.only("Create a graph", async function () {
    this.timeout(10000);

    const valueType = await prisma.type.findUnique({
      where: {
        url: "value/primitive",
      },
    });

    if (!valueType) {
      throw new Error("primitive value type not found");
    }

    const graphType = await prisma.type.findUnique({
      where: {
        url: "graph/primitive",
      },
    });

    if (!graphType) {
      throw new Error("primitive graph type not found");
    }

    const graphValue = await valueClient.create({
      url: URL,
      body: {
        type: valueType.id,
        value: "A primitive graph.",
      },
    });

    if (!graphValue.ok) {
      throw new Error("value for graph not created");
    }

    const graph = await graphClient.create({
      url: URL,
      body: {
        type: graphType.id,
        value: graphValue.data.id,
      },
    });

    if (!graph.ok) {
      throw new Error("graph not created");
    }

    const nodeType = await prisma.type.findUnique({
      where: {
        url: "node/primitive",
      },
    });

    if (!nodeType) {
      throw new Error("primitive node type not found");
    }

    const firstNodeValue = await valueClient.create({
      url: URL,
      body: {
        type: valueType.id,
        value: "The first primitive node.",
      },
    });

    if (!firstNodeValue.ok) {
      throw new Error("value for first node not created");
    }

    const firstNode = await nodeClient.create({
      url: URL,
      body: {
        type: nodeType.id,
        graph: graph.data.id,
        value: firstNodeValue.data.id,
      },
    });

    if (!firstNode.ok) {
      throw new Error("first node not created");
    }

    const secondNodeValue = await valueClient.create({
      url: URL,
      body: {
        type: valueType.id,
        value: "The second primitive node.",
      },
    });

    if (!secondNodeValue.ok) {
      throw new Error("value for second node not created");
    }

    const secondNode = await nodeClient.create({
      url: URL,
      body: {
        type: nodeType.id,
        graph: graph.data.id,
        value: secondNodeValue.data.id,
      },
    });

    if (!secondNode.ok) {
      throw new Error("second node not created");
    }

    const edgeType = await prisma.type.findUnique({
      where: {
        url: "edge/primitive",
      },
    });

    if (!edgeType) {
      throw new Error("primitive edge type not found");
    }

    const edgeValue = await valueClient.create({
      url: URL,
      body: {
        type: valueType.id,
        value: "A primitive edge between the first node and the second.",
      },
    });

    if (!edgeValue.ok) {
      throw new Error("value for edge not created");
    }

    const edge = await edgeClient.create({
      url: URL,
      body: {
        graph: graph.data.id,
        type: edgeType.id,
        value: edgeValue.data.id,
        from: firstNode.data.id,
        to: secondNode.data.id,
      },
    });

    if (!edge.ok) {
      throw new Error("edge not created");
    }

    console.log(
      JSON.stringify(
        {
          graph,
          nodes: [firstNode, secondNode],
          edge,
        },
        null,
        2,
      ),
    );
  });
});
