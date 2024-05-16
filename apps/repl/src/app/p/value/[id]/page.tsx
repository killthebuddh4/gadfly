"use client";
import { useParams } from "next/navigation.js";
import { Value } from "@/components/primitives/Value";
import { z } from "zod";

export default function Page() {
  const params = useParams();

  const id = z.string().safeParse(params.id);

  if (!id.success) {
    return <div>{`ID ${params.id} is not a valid UUID.`}</div>;
  }

  return (
    <div className="h-screen w-screen">
      <Value id={id.data} />
    </div>
  );
}
