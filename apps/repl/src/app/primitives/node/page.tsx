import { Separator } from "@/registry/new-york/ui/separator";
import { NodeForm } from "@/app/primitives/node/node-form";

export default function PrimitiveNodePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Nodes</h3>
        <p className="text-sm text-muted-foreground">Do things with a node.</p>
      </div>
      <Separator />
      <NodeForm />
    </div>
  );
}
