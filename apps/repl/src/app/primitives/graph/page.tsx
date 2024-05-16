import { Separator } from "@/registry/new-york/ui/separator";
import { GraphForm } from "@/app/primitives/graph/graph-form";

export default function PrimitiveGraphPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Graphs</h3>
        <p className="text-sm text-muted-foreground">Do things with a graph.</p>
      </div>
      <Separator />
      <GraphForm />
    </div>
  );
}
