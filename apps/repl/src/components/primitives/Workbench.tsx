"use client";

import { client } from "engine/protocol/primitives/client.js";
import { use, useEffect, useState } from "react";
import { z } from "zod";

type R<T extends (a: any) => any> = Awaited<ReturnType<T>>;

const URL = "http://localhost:9999";

const zValue = z.object({
  id: z.string().uuid(),
  created_at: z.date(),
  updated_at: z.date(),
  value: z.string().min(1),
});

const zGraph = z.object({
  id: z.string().uuid(),
  created_at: z.date(),
  updated_at: z.date(),
  value_id: z.string().uuid(),
});

const zNode = z.object({
  id: z.string().uuid(),
  created_at: z.date(),
  updated_at: z.date(),
  graph_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

const zEdge = z.object({
  id: z.string().uuid(),
  created_at: z.date(),
  updated_at: z.date(),
  graph_id: z.string().uuid(),
  value_id: z.string().uuid(),
  from_id: z.string().uuid(),
  to_id: z.string().uuid(),
});

export const Workbench = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      <h1 className="font-bold text-2xl">Primitives Workbench</h1>
      <Value />
      <Graph />
      <Node />
      <Edge />
    </div>
  );
};

const Graph = () => {
  const [values, setValues] = useState<
    R<typeof client.value.search> | undefined
  >(undefined);
  const [graph, setGraph] = useState<Partial<z.infer<typeof zGraph>>>({});

  useEffect(() => {
    (async () => {
      const values = await client.value.search({ url: URL });

      if (!values.ok) {
        console.warn("Failed to fetch values", values);
        return;
      }

      setValues(values);
    })();
  }, []);

  useEffect(() => {
    if (graph.id === undefined) {
      setGraph({
        ...graph,
        id: crypto.randomUUID(),
      });
    }

    if (graph.created_at === undefined) {
      setGraph({
        ...graph,
        created_at: new Date(),
      });
    }

    if (graph.updated_at === undefined) {
      setGraph({
        ...graph,
        updated_at: new Date(),
      });
    }
  }, [graph.id, graph.created_at, graph.updated_at]);

  if (
    graph.id === undefined ||
    graph.created_at === undefined ||
    graph.updated_at === undefined
  ) {
    return <div>Loading...</div>;
  }

  return (
    <form
      className="p-4 flex flex-col gap-4 bg-gray-100"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(graph);
      }}
    >
      <h1 className="font-bold">Create a Graph</h1>
      <label htmlFor="id">ID</label>
      <input type="text" id="id" className="p-4" value={graph.id} readOnly />
      <label htmlFor="created_at">Created At</label>
      <input
        type="text"
        id="created_at"
        className="p-4"
        value={graph.created_at?.toISOString()}
        readOnly
      />
      <label htmlFor="updated_at">Updated At</label>
      <input
        type="text"
        id="updated_at"
        className="p-4"
        value={graph.updated_at?.toISOString()}
        readOnly
      />
      <label htmlFor="selectedValue">Select a Value</label>
      <select
        onChange={(e) => {
          setGraph({
            ...graph,
            value_id: e.target.value,
          });
        }}
        className="p-4"
        name="selectedValue"
      >
        {(() => {
          if (values === undefined) {
            return <></>;
          }

          if (!values.ok) {
            return <></>;
          }

          return values.data.map((value) => {
            return (
              <option key={value.id} value={value.id}>
                {value.value}
              </option>
            );
          });
        })()}
      </select>
      <button
        disabled={!zGraph.safeParse(graph).success}
        className="bg-green-200 p-4 w-48 disabled:bg-gray-300"
        type="button"
      >
        Create Graph
      </button>
    </form>
  );
};

const Value = () => {
  const [value, setValue] = useState<Partial<z.infer<typeof zValue>>>({});

  useEffect(() => {
    if (value.id === undefined) {
      setValue({
        ...value,
        id: crypto.randomUUID(),
      });
    }

    if (value.created_at === undefined) {
      setValue({
        ...value,
        created_at: new Date(),
      });
    }

    if (value.updated_at === undefined) {
      setValue({
        ...value,
        updated_at: new Date(),
      });
    }
  }, [value.id, value.created_at, value.updated_at]);

  if (
    value.id === undefined ||
    value.created_at === undefined ||
    value.updated_at === undefined
  ) {
    return <div>Loading...</div>;
  }

  return (
    <form
      className="p-4 flex flex-col gap-4 bg-gray-100"
      onSubmit={async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const parsed = zValue.safeParse(value);

        if (!parsed.success) {
          console.warn("Attempted to submit a value that is not valid.", value);
          return;
        }

        const response = await client.value.create({
          url: URL,
          body: parsed.data,
        });

        if (!response.ok) {
          console.warn("Failed to create value", response);
          return;
        }
      }}
    >
      <h1 className="font-bold">Create a Value</h1>
      <label htmlFor="id">ID</label>
      <input type="text" id="id" className="p-4" value={value.id} readOnly />
      <label htmlFor="created_at">Created At</label>
      <input
        type="text"
        id="created_at"
        className="p-4"
        value={value.created_at?.toISOString()}
        readOnly
      />
      <label htmlFor="updated_at">Updated At</label>
      <input
        type="text"
        id="updated_at"
        className="p-4"
        value={value.updated_at?.toISOString()}
        readOnly
      />
      <label htmlFor="value">Value</label>
      <input
        type="text"
        id="value"
        className="p-4"
        value={value.value || ""}
        onChange={(e) => {
          setValue({
            ...value,
            value: e.target.value,
          });
        }}
      />
      <button
        disabled={!zValue.safeParse(value).success}
        className="bg-green-200 p-4 w-48 disabled:bg-gray-300"
        type="submit"
      >
        Create Value
      </button>
    </form>
  );
};

const Node = () => {
  const [graphs, setGraphs] = useState<
    R<typeof client.graph.search> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const graphs = await client.graph.search({ url: URL });

      if (!graphs.ok) {
        console.warn("Failed to fetch graphs", graphs);
        return;
      }

      setGraphs(graphs);
    })();
  }, []);

  const [node, setNode] = useState<Partial<z.infer<typeof zNode>>>({});

  const [values, setValues] = useState<
    R<typeof client.value.search> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const values = await client.value.search({ url: URL });

      if (!values.ok) {
        console.warn("Failed to fetch values", values);
        return;
      }

      setValues(values);
    })();
  }, []);

  useEffect(() => {
    if (node.id === undefined) {
      setNode({
        ...node,
        id: crypto.randomUUID(),
      });
    }

    if (node.created_at === undefined) {
      setNode({
        ...node,
        created_at: new Date(),
      });
    }

    if (node.updated_at === undefined) {
      setNode({
        ...node,
        updated_at: new Date(),
      });
    }
  }, [node.id, node.created_at, node.updated_at]);

  if (
    node.id === undefined ||
    node.created_at === undefined ||
    node.updated_at === undefined
  ) {
    return <div>Loading...</div>;
  }

  return (
    <form
      className="p-4 flex flex-col gap-4 bg-gray-100"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(node);
      }}
    >
      <h1 className="font-bold">Create a Node</h1>
      <label htmlFor="id">ID</label>
      <input type="text" id="id" className="p-4" value={node.id} readOnly />
      <label htmlFor="created_at">Created At</label>
      <input
        type="text"
        id="created_at"
        className="p-4"
        value={node.created_at?.toISOString()}
        readOnly
      />
      <label htmlFor="updated_at">Updated At</label>
      <input
        type="text"
        id="updated_at"
        className="p-4"
        value={node.updated_at?.toISOString()}
        readOnly
      />
      <label htmlFor="selectedGraph">Select a Graph</label>
      <select
        onChange={(e) => {
          setNode({
            ...node,
            graph_id: e.target.value,
          });
        }}
        className="p-4"
        name="selectedGraph"
      >
        {(() => {
          if (graphs === undefined) {
            return <></>;
          }

          if (!graphs.ok) {
            return <></>;
          }

          return graphs.data.map((graph) => {
            return (
              <option key={graph.id} value={graph.id}>
                {graph.id}
              </option>
            );
          });
        })()}
      </select>
      <label htmlFor="selectedValue">Select a Value</label>
      <select
        onChange={(e) => {
          setNode({
            ...node,
            value_id: e.target.value,
          });
        }}
        className="p-4"
        name="selectedValue"
      >
        {(() => {
          if (values === undefined) {
            return <></>;
          }

          if (!values.ok) {
            return <></>;
          }

          return values.data.map((value) => {
            return (
              <option key={value.id} value={value.id}>
                {value.id}
              </option>
            );
          });
        })()}
      </select>
      <button
        disabled={!zNode.safeParse(node).success}
        className="bg-green-200 p-4 w-48 disabled:bg-gray-300"
        type="submit"
      >
        Create Node
      </button>
    </form>
  );
};

const Edge = () => {
  const [graphs, setGraphs] = useState<
    R<typeof client.graph.search> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const graphs = await client.graph.search({ url: URL });

      if (!graphs.ok) {
        console.warn("Failed to fetch graphs", graphs);
        return;
      }

      setGraphs(graphs);
    })();
  }, []);

  const [edge, setEdge] = useState<Partial<z.infer<typeof zEdge>>>({});

  useEffect(() => {
    if (edge.id === undefined) {
      setEdge({
        ...edge,
        id: crypto.randomUUID(),
      });
    }

    if (edge.created_at === undefined) {
      setEdge({
        ...edge,
        created_at: new Date(),
      });
    }

    if (edge.updated_at === undefined) {
      setEdge({
        ...edge,
        updated_at: new Date(),
      });
    }
  }, [edge.id, edge.created_at, edge.updated_at]);

  const [values, setValues] = useState<
    R<typeof client.value.search> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const values = await client.value.search({ url: URL });

      if (!values.ok) {
        console.warn("Failed to fetch values", values);
        return;
      }

      setValues(values);
    })();
  }, []);

  const [nodes, setNodes] = useState<R<typeof client.node.search> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const nodes = await client.node.search({ url: URL });

      if (!nodes.ok) {
        console.warn("Failed to fetch nodes", nodes);
        return;
      }

      setNodes(nodes);
    })();
  }, []);

  if (
    edge.id === undefined ||
    edge.created_at === undefined ||
    edge.updated_at === undefined
  ) {
    return <div>Loading...</div>;
  }

  return (
    <form
      className="p-4 flex flex-col gap-4 bg-gray-100"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(edge);
      }}
    >
      <h1 className="font-bold">Create an Edge</h1>
      <label htmlFor="id">ID</label>
      <input type="text" id="id" className="p-4" value={edge.id} readOnly />
      <label htmlFor="created_at">Created At</label>
      <input
        type="text"
        id="created_at"
        className="p-4"
        value={edge.created_at?.toISOString()}
        readOnly
      />
      <label htmlFor="updated_at">Updated At</label>
      <input
        type="text"
        id="updated_at"
        className="p-4"
        value={edge.updated_at?.toISOString()}
        readOnly
      />
      <label htmlFor="selectedGraph">Select a Graph</label>
      <select
        onChange={(e) => {
          setEdge({
            ...edge,
            graph_id: e.target.value,
          });
        }}
        className="p-4"
        name="selectedGraph"
      >
        {(() => {
          if (graphs === undefined) {
            return <></>;
          }

          if (!graphs.ok) {
            return <></>;
          }

          return graphs.data.map((graph) => {
            return (
              <option key={graph.id} value={graph.id}>
                {graph.id}
              </option>
            );
          });
        })()}
      </select>
      <label htmlFor="selectedValue">Select a Value</label>
      <select
        onChange={(e) => {
          setEdge({
            ...edge,
            value_id: e.target.value,
          });
        }}
        className="p-4"
        name="selectedValue"
      >
        {(() => {
          if (values === undefined) {
            return <></>;
          }

          if (!values.ok) {
            return <></>;
          }

          return values.data.map((value) => {
            return (
              <option key={value.id} value={value.id}>
                {value.id}
              </option>
            );
          });
        })()}
      </select>
      <label htmlFor="selectedFrom">Select a From Node</label>
      <select
        onChange={(e) => {
          setEdge({
            ...edge,
            from_id: e.target.value,
          });
        }}
        className="p-4"
        name="selectedFrom"
      >
        {(() => {
          if (nodes === undefined) {
            return <></>;
          }

          if (!nodes.ok) {
            return <></>;
          }

          return nodes.data.map((node) => {
            return (
              <option key={node.id} value={node.id}>
                {node.id}
              </option>
            );
          });
        })()}
      </select>
      <label htmlFor="selectedTo">Select a To Node</label>
      <select
        onChange={(e) => {
          setEdge({
            ...edge,
            to_id: e.target.value,
          });
        }}
        className="p-4"
        name="selectedTo"
      >
        {(() => {
          if (nodes === undefined) {
            return <></>;
          }

          if (!nodes.ok) {
            return <></>;
          }

          return nodes.data.map((node) => {
            return (
              <option key={node.id} value={node.id}>
                {node.id}
              </option>
            );
          });
        })()}
      </select>
      <button
        disabled={!zEdge.safeParse(edge).success}
        className="bg-green-200 p-4 w-48 disabled:bg-gray-300"
        type="submit"
      >
        Create Edge
      </button>
    </form>
  );
};
