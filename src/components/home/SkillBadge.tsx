import { Badge } from "@/components/ui/badge";

export function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge 
      variant="outline" 
      className="border-[#3d3d3d] text-[#6b6b6b] text-[15px] tracking-wide rounded-full px-5 py-2 hover:border-[#6b6b6b] hover:text-text-primary transition-all duration-200 font-normal bg-transparent"
    >
      {children}
    </Badge>
  );
}
