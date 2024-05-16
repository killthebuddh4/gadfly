import { Separator } from "@/registry/new-york/ui/separator";
import { EdgeForm } from "@/app/primitives/edge/edge-form";

export default function PrimitiveEdgePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Edges</h3>
        <p className="text-sm text-muted-foreground">Do things with an edge.</p>
      </div>
      <Separator />
      <EdgeForm />
    </div>
  );
}
