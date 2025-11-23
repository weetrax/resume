import { TProject } from "@/types";
import { CodeTag } from "./ui/code-tag";
import { Link } from "lucide-react";
import { motion } from "framer-motion";

export function Project({
  project: { title, description, imageUrl, projectUrl, codeTags },
}: {
  project: TProject;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      }}
      className="col-span-2 lg:col-span-1 rounded border p-5 text-left"
    >
      <a
        aria-label={`Lien vers le projet ${title}`}
        target="_blank"
        className="overflow-hidden rounded"
        href={projectUrl}
      >
        <img
          alt={title}
          loading="lazy"
          decoding="async"
          data-nimg="1"
          className="rounded transition-transform hover:scale-105 h-[290px] w-full object-contain"
          style={{ color: "transparent" }}
          src={imageUrl}
        ></img>
      </a>
      <a
        href={projectUrl}
        target="_blank"
        className="mt-3 text-xl font-medium hover:underline flex items-center gap-2 group"
      >
        {title}
        <Link className="inline size-4 opacity-0 text-black group-hover:opacity-100 transition" />
      </a>
      <p className="text-muted-foreground mb-8 mt-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {codeTags.map((tag) => (
          <CodeTag key={tag.id} tag={tag} />
        ))}
      </div>
    </motion.div>
  );
}
