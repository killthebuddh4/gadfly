import { useState } from "react";
import { client } from "engine/protocol/primitives/client.js";

export const Type = () => {
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const response = await client.type.create({
          url,
          body: {
            url,
            description,
          },
        });

        if (response.ok) {
          setUrl("");
          setDescription("");
        }
      }}
    >
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};
