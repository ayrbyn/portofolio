import { works } from "@/lib/data/works";
import { Separator } from "@/components/ui/separator";
import { WorksShowcase } from "@/components/works/WorksShowcase";

export default function WorksPage() {
  return (
    <div className="relative pl-12 pt-12 pr-8 pb-32 md:pb-0 md:h-screen md:overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-end mb-0 shrink-0">
        <h1 className="text-[14px] tracking-[0.25em] text-text-primary uppercase">WORKS</h1>
      </div>
      <Separator className="bg-border-subtle my-3 shrink-0" />

      {/* Internal Scroll Showcase */}
      <div className="flex-1 min-h-0 w-full">
        <WorksShowcase works={works} />
      </div>
    </div>
  );
}
