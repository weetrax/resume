import { TExperience } from "@/types";
import { CodeTag } from "./ui/code-tag";
import { Building2Icon, CalendarIcon, Link } from "lucide-react";

export function Experience({
  experience: { place, role, period, description, codeTags },
}: {
  experience: TExperience;
}) {
  return (
    <div className="not-last:pb-12 relative pl-8 [&:not(:last-child)]:pb-10">
      <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]">
        <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2"></div>
      </div>
      <div className="space-y-3 opacity-100">
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
            <Building2Icon />
          </div>
          <a
            href={place.href}
            target="_blank"
            className="text-lg font-semibold hover:underline flex items-center gap-2 group"
          >
            {place.title}
            <Link className="inline size-4 opacity-0 text-black group-hover:opacity-100 transition" />
          </a>
        </div>
        <div>
          <div className="text-xl font-medium">{role}</div>
          <div className="mt-1 flex items-center gap-2 text-sm">
            <CalendarIcon className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {codeTags.map((tag) => (
            <CodeTag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
