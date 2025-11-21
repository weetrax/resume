import { cn } from "@/lib/utils";
import { TCodeTag } from "@/types";

export function CodeTag({ tag }: { tag: TCodeTag }) {
  function tagColor() {
    switch (tag.id) {
      case "c#":
        return "hover:bg-[#68217A]";
      case "js":
        return "hover:bg-[#F0DB4F]";
      case "sqlserver":
        return "hover:bg-[#ee352c]";
      case "mysql":
        return "hover:bg-[#ee352c]";
      case "html":
        return "hover:bg-[#E44D26]";
      case "css":
        return "hover:bg-[#1572B6]";
      case "gmap_api":
        return "hover:bg-[#0F9D58]";
      case "ds_api":
        return "hover:bg-[#4c00ff]";
      case "react":
        return "hover:bg-[#61DAFB]";
      case "ts":
        return "hover:bg-[#007acc]";
      case "node":
        return "hover:bg-[#4e9d45]";
      case "graphql":
        return "hover:bg-[#E434AA]";
      case "mongodb":
        return "hover:bg-[#47A248]";
      case "tailwind":
        return "hover:bg-[#38bdf8]";
      case "f_api":
        return "hover:bg-[#071C35]";
      case "qpx_api":
        return "hover:bg-[#4285F4]";
      case "nextjs":
        return "hover:bg-black hover:text-white";
      default:
        return "hover:bg-accent hover:text-accent-foreground";
    }
  }

  return (
    <div
      className={cn(
        "rounded-full border px-3 py-1 text-sm transition hover:text-white",
        tagColor()
      )}
    >
      {tag.label}
    </div>
  );
}
