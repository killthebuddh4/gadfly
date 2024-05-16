import { Separator } from "@/registry/new-york/ui/separator";
import { PointerForm } from "@/app/primitives/pointer/pointer-form";

export default function PrimitivePointerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Pointers</h3>
        <p className="text-sm text-muted-foreground">
          Do things with a pointer.
        </p>
      </div>
      <Separator />
      <PointerForm />
    </div>
  );
}
