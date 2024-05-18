"use client";

import { client } from "engine/protocol/primitives/client.js";
import { zGraph } from "engine/protocol/primitives/graph/schemas.js";
import { zValue } from "engine/protocol/primitives/value/schemas.js";
import { zNode } from "engine/protocol/primitives/node/schemas.js";
import { zEdge } from "engine/protocol/primitives/edge/schemas.js";
import { zType } from "engine/protocol/primitives/type/schemas.js";
import Link from "next/link";

import { useEffect, useState } from "react";
import { z } from "zod";

type R<T extends (a: any) => any> = Awaited<ReturnType<T>>;

const URL = "http://localhost:9999";

export const Workbench = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      <h1 className="font-bold text-2xl">Primitives Workbench</h1>
      <Type />
      <Value />
      <Graph />
      <Node />
      <Edge />
    </div>
  );
};

const Type = () => {
  const [types, setTypes] = useState<R<typeof client.type.search> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const types = await client.type.search({ url: URL });

      if (!types.ok) {
        console.warn("Failed to fetch types", types);
        return;
      }

      setTypes(types);
    })();
  }, []);

  const [type, setType] = useState<Partial<z.infer<typeof zType>>>({});

  useEffect(() => {
    if (type.id === undefined) {
      setType({
        ...type,
        id: crypto.randomUUID(),
      });
    }

    if (type.created_at === undefined) {
      setType({
        ...type,
        created_at: new Date(),
      });
    }

    if (type.updated_at === undefined) {
      setType({
        ...type,
        updated_at: new Date(),
      });
    }
  }, [type.id, type.created_at, type.updated_at]);

  if (
    type.id === undefined ||
    type.created_at === undefined ||
    type.updated_at === undefined
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-8 flex flex-col">
      <div className="bg-gray-100 mb-4 p-4">
        <h1 className="font-bold mb-4">Types</h1>
        <ul className="flex flex-col gap-4 min-h-24 max-h-24 overflow-y-scroll">
          {(() => {
            if (types === undefined) {
              return <></>;
            }

            if (!types.ok) {
              return <></>;
            }

            return types.data.map((type) => {
              return (
                <li key={type.id} className="flex flex-col gap-2 bg-gray-100">
                  <Link
                    key={type.id}
                    className="cursor-pointer text-blue-500 hover:text-blue-900"
                    href={`/p/type/${type.id}`}
                  >
                    {type.id}
                  </Link>
                </li>
              );
            });
          })()}
        </ul>
      </div>
      <form
        className="p-4 flex flex-col gap-4 bg-gray-100"
        onSubmit={async (e) => {
          e.preventDefault();

          const parsed = zType.safeParse(type);

          if (!parsed.success) {
            console.warn("Attempted to submit a type that is not valid.", type);
            return;
          }

          const response = await client.type.create({
            url: URL,
            body: parsed.data,
          });

          if (!response.ok) {
            console.warn("Failed to create type", response);
            return;
          }
        }}
      >
        <h1 className="font-bold">Create a Type</h1>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" className="p-4" value={type.id} readOnly />
        <label htmlFor="created_at">Created At</label>
        <input
          type="text"
          id="created_at"
          className="p-4"
          value={type.created_at?.toISOString()}
          readOnly
        />
        <label htmlFor="updated_at">Updated At</label>
        <input
          type="text"
          id="updated_at"
          className="p-4"
          value={type.updated_at?.toISOString()}
          readOnly
        />
        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
          className="p-4"
          value={type.url || ""}
          onChange={(e) => {
            setType({
              ...type,
              url: e.target.value,
            });
          }}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          className="p-4"
          value={type.description || ""}
          onChange={(e) => {
            setType({
              ...type,
              description: e.target.value,
            });
          }}
        />
        <button
          disabled={!zType.safeParse(type).success}
          className="bg-green-200 p-4 w-48 disabled:bg-gray-300"
          type="submit"
        >
          Create Type
        </button>
      </form>
    </div>
  );
};

const Graph = () => {
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

  const [types, setTypes] = useState<R<typeof client.type.search> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const types = await client.type.search({ url: URL });

      if (!types.ok) {
        console.warn("Failed to fetch types", types);
        return;
      }

      setTypes(types);
    })();
  }, []);

  const [graph, setGraph] = useState<Partial<z.infer<typeof zGraph>>>({});

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
    <div className="mb-8 flex flex-col">
      <div className="bg-gray-100 mb-4 p-4">
        <h1 className="font-bold mb-4">Graphs</h1>
        <ul className="flex flex-col gap-4 min-h-24 max-h-24 overflow-y-scroll">
          {(() => {
            if (graphs === undefined) {
              return <></>;
            }

            if (!graphs.ok) {
              return <></>;
            }

            return graphs.data.map((graph) => {
              return (
                <li key={graph.id} className="flex flex-col gap-2 bg-gray-100">
                  <Link
                    key={graph.id}
                    className="cursor-pointer text-blue-500 hover:text-blue-900"
                    href={`/p/graph/${graph.id}`}
                  >
                    {graph.id}
                  </Link>
                </li>
              );
            });
          })()}
        </ul>
      </div>
      <form
        className="p-4 flex flex-col gap-4 bg-gray-100"
        onSubmit={async (e) => {
          e.preventDefault();

          const parsed = zGraph.safeParse(graph);

          if (!parsed.success) {
            console.warn(
              "Attempted to submit a graph that is not valid.",
              graph,
            );
            return;
          }

          const response = await client.graph.create({
            url: URL,
            body: parsed.data,
          });

          if (!response.ok) {
            console.warn("Failed to create graph", response);
            return;
          }
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
        <label htmlFor="selectedType">Select a Type</label>
        <select
          onChange={(e) => {
            setGraph({
              ...graph,
              type_id: e.target.value,
            });
          }}
          className="p-4"
          name="selectedType"
        >
          {(() => {
            if (types === undefined) {
              return <></>;
            }

            if (!types.ok) {
              return <></>;
            }

            return types.data.map((type) => {
              return (
                <option key={type.id} value={type.id}>
                  {type.url}
                </option>
              );
            });
          })()}
        </select>

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
    </div>
  );
};

const Value = () => {
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

  const [types, setTypes] = useState<R<typeof client.type.search> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const types = await client.type.search({ url: URL });

      if (!types.ok) {
        console.warn("Failed to fetch types", types);
        return;
      }

      setTypes(types);
    })();
  }, []);

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
    <div className="mb-8 flex flex-col">
      <div className="bg-gray-100 mb-4 p-4">
        <h1 className="font-bold mb-4">Values</h1>
        <ul className="flex flex-col gap-4 min-h-24 max-h-24 overflow-y-scroll">
          {(() => {
            if (values === undefined) {
              return <></>;
            }

            if (!values.ok) {
              return <></>;
            }

            return values.data.map((value) => {
              return (
                <li key={value.id} className="flex gap-2 bg-gray-100">
                  <Link
                    key={value.id}
                    className="cursor-pointer text-blue-500 hover:text-blue-900"
                    href={`/p/value/${value.id}`}
                  >
                    {value.id}
                  </Link>
                </li>
              );
            });
          })()}
        </ul>
      </div>
      <form
        className="p-4 flex flex-col gap-4 bg-gray-100"
        onSubmit={async (e) => {
          e.preventDefault();

          const parsed = zValue.safeParse(value);

          if (!parsed.success) {
            console.warn(
              "Attempted to submit a value that is not valid.",
              value,
            );
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
        <label htmlFor="selectedType">Select a Type</label>
        <select
          onChange={(e) => {
            setValue({
              ...value,
              type_id: e.target.value,
            });
          }}
          className="p-4"
          name="selectedType"
        >
          {(() => {
            if (types === undefined) {
              return <></>;
            }

            if (!types.ok) {
              return <></>;
            }

            return types.data.map((type) => {
              return (
                <option key={type.id} value={type.id}>
                  {type.url}
                </option>
              );
            });
          })()}
        </select>
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
    </div>
  );
};

const Node = () => {
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

  const [types, setTypes] = useState<R<typeof client.type.search> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const types = await client.type.search({ url: URL });

      if (!types.ok) {
        console.warn("Failed to fetch types", types);
        return;
      }

      setTypes(types);
    })();
  }, []);

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
    <div className="mb-8 flex flex-col">
      <div className="bg-gray-100 mb-4 p-4">
        <h1 className="font-bold mb-4">Nodes</h1>
        <ul className="flex flex-col gap-4 min-h-24 max-h-24 overflow-y-scroll">
          {(() => {
            if (nodes === undefined) {
              return <></>;
            }

            if (!nodes.ok) {
              return <></>;
            }

            return nodes.data.map((node) => {
              return (
                <li key={node.id} className="flex gap-2 bg-gray-100">
                  <Link
                    key={node.id}
                    className="cursor-pointer text-blue-500 hover:text-blue-900"
                    href={`/p/node/${node.id}`}
                  >
                    {node.id}
                  </Link>
                </li>
              );
            });
          })()}
        </ul>
      </div>
      <form
        className="p-4 flex flex-col gap-4 bg-gray-100"
        onSubmit={async (e) => {
          e.preventDefault();

          const parsed = zNode.safeParse(node);

          if (!parsed.success) {
            console.warn("Attempted to submit a node that is not valid.", node);
            return;
          }

          const response = await client.node.create({
            url: URL,
            body: parsed.data,
          });

          if (!response.ok) {
            console.warn("Failed to create node", response);
            return;
          }
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
        <label htmlFor="selectedType">Select a Type</label>
        <select
          onChange={(e) => {
            setNode({
              ...node,
              type_id: e.target.value,
            });
          }}
          className="p-4"
          name="selectedType"
        >
          {(() => {
            if (types === undefined) {
              return <></>;
            }

            if (!types.ok) {
              return <></>;
            }

            return types.data.map((type) => {
              return (
                <option key={type.id} value={type.id}>
                  {type.url}
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
    </div>
  );
};

const Edge = () => {
  const [edges, setEdges] = useState<R<typeof client.edge.search> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const edges = await client.edge.search({ url: URL });

      if (!edges.ok) {
        console.warn("Failed to fetch edges", edges);
        return;
      }

      setEdges(edges);
    })();
  }, []);

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

  const [types, setTypes] = useState<R<typeof client.type.search> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const types = await client.type.search({ url: URL });

      if (!types.ok) {
        console.warn("Failed to fetch types", types);
        return;
      }

      setTypes(types);
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
    <div className="mb-8 flex flex-col">
      <div className="bg-gray-100 mb-4 p-4">
        <h1 className="font-bold mb-4">Edges</h1>
        <ul className="flex flex-col gap-4 min-h-24 max-h-24 overflow-y-scroll">
          {(() => {
            if (edges === undefined) {
              return <></>;
            }

            if (!edges.ok) {
              return <></>;
            }

            return edges.data.map((edge) => {
              return (
                <li key={edge.id} className="flex gap-2 bg-gray-100">
                  <Link
                    key={edge.id}
                    className="cursor-pointer text-blue-500 hover:text-blue-900"
                    href={`/p/edge/${edge.id}`}
                  >
                    {edge.id}
                  </Link>
                </li>
              );
            });
          })()}
        </ul>
      </div>
      <form
        className="p-4 flex flex-col gap-4 bg-gray-100"
        onSubmit={async (e) => {
          e.preventDefault();

          const parsed = zEdge.safeParse(edge);

          if (!parsed.success) {
            console.warn(
              "Attempted to submit an edge that is not valid.",
              edge,
            );
            return;
          }

          const response = await client.edge.create({
            url: URL,
            body: parsed.data,
          });

          if (!response.ok) {
            console.warn("Failed to create edge", response);
            return;
          }
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
        <label htmlFor="selectedType">Select a Type</label>
        <select
          onChange={(e) => {
            setEdge({
              ...edge,
              type_id: e.target.value,
            });
          }}
          className="p-4"
          name="selectedType"
        >
          {(() => {
            if (types === undefined) {
              return <></>;
            }

            if (!types.ok) {
              return <></>;
            }

            return types.data.map((type) => {
              return (
                <option key={type.id} value={type.id}>
                  {type.url}
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
    </div>
  );
};
