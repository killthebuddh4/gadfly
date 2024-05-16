import { Separator } from "@/registry/new-york/ui/separator";
import { TypeForm } from "@/app/primitives/type/type-form";

export default function PrimitiveTypePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Types</h3>
        <p className="text-sm text-muted-foreground">Do things with a type.</p>
      </div>
      <Separator />
      <TypeForm />
    </div>
  );
}
