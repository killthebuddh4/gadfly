"use client";
import { useParams } from "next/navigation.js";
import { Type } from "@/components/primitives/Type";
import { z } from "zod";

export default function Page() {
  const params = useParams();

  const id = z.string().safeParse(params.id);

  if (!id.success) {
    return <div>{`ID ${params.id} is not a valid UUID.`}</div>;
  }

  return (
    <div className="h-screen w-screen">
      <Type id={id.data} />
    </div>
  );
}
