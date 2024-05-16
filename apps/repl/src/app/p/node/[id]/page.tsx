"use client";
import { useParams } from "next/navigation.js";
import { Node } from "@/components/primitives/Node";
import { z } from "zod";

export default function Page() {
  const params = useParams();

  const id = z.string().safeParse(params.id);

  if (!id.success) {
    return <div>{`ID ${params.id} is not a valid UUID.`}</div>;
  }

  return (
    <div className="h-screen w-screen">
      <Node id={id.data} />
    </div>
  );
}
