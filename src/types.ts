export type TCodeTag = {
  id:
    | "c#"
    | "js"
    | "ts"
    | "react"
    | "nextjs"
    | "node"
    | "graphql"
    | "html"
    | "css"
    | "tailwind"
    | "sqlserver"
    | "mysql"
    | "mongodb"
    | "gmap_api"
    | "ds_api"
    | "f_api"
    | "qpx_api";
  label: string;
};

export type TExperience = {
  place: { title: string; href: string };
  role: string;
  period: string;
  description: string;
  codeTags: TCodeTag[];
};

export type TProject = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  codeTags: TCodeTag[];
};
