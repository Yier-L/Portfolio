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
    title: "Hookd",
    description:
      "A single-server fishing social app built for Devsoc x Atlassian Hackathon: TypeScript + Express backend serving a static React frontend (global CDN React). Images uploaded to disk; JSON flat-file persistence.",
    tech: ["Node.js", "Express", "TypeScript", "Multer", "Vanilla React (global)", "JSON File Storage"],
    repo: "https://github.com/williamli578/DevSocHackathon",
    live: "",
    image: "/images/hookd.png",
    tags: ["fullstack", "typescript", "express"],
  },
  {
    id: "swing-game",
    title: "Space Shooter",
    description:
      "A desktop asteroid shooter game built with Java Swing — focused on game loop, custom painting, and input handling. Includes GamePanel and sprite handling.",
    tech: ["Java", "Swing"],
    repo: "https://yier-l.itch.io/space-shooter",
    live: "",
    image: "/images/SpaceShooter.png",
    tags: ["desktop", "java"],
  },
];
