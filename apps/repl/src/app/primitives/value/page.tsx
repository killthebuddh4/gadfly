import { Separator } from "@/registry/new-york/ui/separator";
import { ValueForm } from "@/app/primitives/value/value-form";

export default function PrimitiveValuePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Values</h3>
        <p className="text-sm text-muted-foreground">Do things with a value.</p>
      </div>
      <Separator />
      <ValueForm />
    </div>
  );
}
