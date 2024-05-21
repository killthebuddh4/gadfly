import { client } from "./client.js";

describe("Client", () => {
  it.only("Bootstrap", async function () {
    this.timeout(20000);

    await client.type.create({
      url: "http://localhost:9999",
      body: {
        url: `graph/primitive`,
        description:
          "A primitive graph has a primitive value and is a collection of primitive nodes connected by primitive edges.",
      },
    });

    await client.type.create({
      url: "http://localhost:9999",
      body: {
        url: `node/primitive`,
        description:
          "A primitive node has a primitive value and is a node in a primitive graph.",
      },
    });

    await client.type.create({
      url: "http://localhost:9999",
      body: {
        url: `edge/primitive`,
        description:
          "A primitive edge has a primitive value and is an edge in a primitive graph.",
      },
    });

    await client.type.create({
      url: "http://localhost:9999",
      body: {
        url: `value/primitive`,
        description: "A primitive value is a text blob.",
      },
    });

    const types = await client.type.search({ url: "http://localhost:9999" });

    if (!types.ok) {
      throw new Error("Failed to search types");
    }

    const primitiveGraphType = types.data.find(
      (type) => type.url === "graph/primitive",
    );

    if (!primitiveGraphType) {
      throw new Error("Failed to find primitive graph type");
    }

    const primitiveNodeType = types.data.find(
      (type) => type.url === "node/primitive",
    );

    if (!primitiveNodeType) {
      throw new Error("Failed to find primitive node type");
    }

    const primitiveEdgeType = types.data.find(
      (type) => type.url === "edge/primitive",
    );

    if (!primitiveEdgeType) {
      throw new Error("Failed to find primitive edge type");
    }

    const primitiveValueType = types.data.find(
      (type) => type.url === "value/primitive",
    );

    if (!primitiveValueType) {
      throw new Error("Failed to find primitive value type");
    }

    let primitiveGraphValue = await client.value.create({
      url: "http://localhost:9999",
      body: {
        type_id: primitiveValueType.id,
        value: "A primitive test graph.",
      },
    });

    if (!primitiveGraphValue.ok) {
      throw new Error("Failed to create primitive graph value");
    }

    const primitiveGraph = await client.graph.create({
      url: "http://localhost:9999",
      body: {
        type_id: primitiveGraphType.id,
        value_id: primitiveGraphValue.data.id,
      },
    });

    if (!primitiveGraph.ok) {
      throw new Error("Failed to create primitive graph");
    }

    const rootNodeValue = await client.value.create({
      url: "http://localhost:9999",
      body: {
        type_id: primitiveValueType.id,
        value: "A primitive test node. The root node.",
      },
    });

    if (!rootNodeValue.ok) {
      throw new Error("Failed to create root node value");
    }

    const rootNode = await client.node.create({
      url: "http://localhost:9999",
      body: {
        graph_id: primitiveGraph.data.id,
        type_id: primitiveNodeType.id,
        value_id: rootNodeValue.data.id,
      },
    });

    if (!rootNode.ok) {
      throw new Error("Failed to create root node");
    }

    const firstLayer = await Promise.all(
      [null, null, null].map(async () => {
        const value = await client.value.create({
          url: "http://localhost:9999",
          body: {
            type_id: primitiveValueType.id,
            value: "A primitive test node in the first non-root layer.",
          },
        });

        if (!value.ok) {
          throw new Error("Failed to create first layer node value");
        }

        const node = await client.node.create({
          url: "http://localhost:9999",
          body: {
            graph_id: primitiveGraph.data.id,
            type_id: primitiveNodeType.id,
            value_id: value.data.id,
          },
        });

        if (!node.ok) {
          throw new Error("Failed to create first layer node");
        }

        return node;
      }),
    );

    const secondLayer = await Promise.all(
      [null, null, null].map(async () => {
        const value = await client.value.create({
          url: "http://localhost:9999",
          body: {
            type_id: primitiveValueType.id,
            value: "A primitive test node in the second non-root layer.",
          },
        });

        if (!value.ok) {
          throw new Error("Failed to create second layer node value");
        }

        const node = await client.node.create({
          url: "http://localhost:9999",
          body: {
            graph_id: primitiveGraph.data.id,
            type_id: primitiveNodeType.id,
            value_id: value.data.id,
          },
        });

        if (!node.ok) {
          throw new Error("Failed to create second layer node");
        }

        return node;
      }),
    );

    for (const first in firstLayer) {
      const value = await client.value.create({
        url: "http://localhost:9999",
        body: {
          type_id: primitiveValueType.id,
          value:
            "A primitive test edge from the root node to a first layer node.",
        },
      });

      if (!value.ok) {
        throw new Error("Failed to create first layer edge value");
      }

      const edge = await client.edge.create({
        url: "http://localhost:9999",
        body: {
          graph_id: primitiveGraph.data.id,
          type_id: primitiveEdgeType.id,
          value_id: value.data.id,
          from_id: rootNode.data.id,
          to_id: firstLayer[first].data.id,
        },
      });

      if (!edge.ok) {
        throw new Error("Failed to create first layer edge");
      }

      for (const second in secondLayer) {
        const value = await client.value.create({
          url: "http://localhost:9999",
          body: {
            type_id: primitiveValueType.id,
            value:
              "A primitive test edge from a first layer node to a second layer node.",
          },
        });

        if (!value.ok) {
          throw new Error("Failed to create second layer edge value");
        }

        const edge = await client.edge.create({
          url: "http://localhost:9999",
          body: {
            graph_id: primitiveGraph.data.id,
            type_id: primitiveEdgeType.id,
            value_id: value.data.id,
            from_id: firstLayer[first].data.id,
            to_id: secondLayer[second].data.id,
          },
        });

        if (!edge.ok) {
          throw new Error("Failed to create second layer edge");
        }
      }
    }
  });
});
