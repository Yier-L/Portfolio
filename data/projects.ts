export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  live?: string;
  image?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "fishstagram",
    title: "Fishstagram",
    description:
      "A single-server fishing social app: TypeScript + Express backend serving a static React frontend (global CDN React). Images uploaded to disk; JSON flat-file persistence.",
    tech: ["Node.js", "Express", "TypeScript", "Multer", "Vanilla React (global)", "JSON File Storage"],
    repo: "https://github.com/your-handle/fishstagram",
    live: "",
    image: "/images/fishstagram.png",
    tags: ["fullstack", "typescript", "express"],
  },
  {
    id: "swing-game",
    title: "Top-Down Java Game",
    description:
      "A desktop game built with Java Swing — focused on game loop, custom painting, and input handling. Includes GamePanel and sprite handling.",
    tech: ["Java", "Swing"],
    repo: "https://github.com/your-handle/java-swing-game",
    live: "",
    image: "/images/swing-game.png",
    tags: ["desktop", "java"],
  },
];
