"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export function BackgroundCanvas() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.09) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Blue orb — top center */}
      <motion.div
        style={{
          y: y1,
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.22) 0%, rgba(59,130,246,0.10) 40%, transparent 62%)",
        }}
        className="absolute -top-48 left-[calc(50%-400px)] h-[800px] w-[800px] blur-[40px]"
      />

      {/* Violet orb — mid right */}
      <motion.div
        style={{
          y: y2,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.08) 40%, transparent 62%)",
        }}
        className="absolute top-[35%] right-[-10%] h-[560px] w-[560px] blur-[40px]"
      />

      {/* Indigo orb — lower left */}
      <motion.div
        style={{
          y: y3,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.08) 40%, transparent 62%)",
        }}
        className="absolute bottom-[5%] left-[-8%] h-[440px] w-[440px] blur-[30px]"
      />

      {/* Cyan accent — center-left */}
      <motion.div
        style={{
          y: y4,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.05) 40%, transparent 62%)",
        }}
        className="absolute top-[58%] left-[15%] h-[300px] w-[300px] blur-[20px]"
      />

      {/* Decorative rings — top right cluster */}
      <div className="absolute right-[8%] top-[16%] h-72 w-72 rounded-full border border-white/[0.04]" />
      <div className="absolute right-[12%] top-[21%] h-52 w-52 rounded-full border border-blue-400/[0.07]" />
      <div className="absolute right-[7%] top-[15%] h-[360px] w-[360px] rounded-full border border-white/[0.02]" />

      {/* Decorative rings — bottom left cluster */}
      <div className="absolute bottom-[22%] left-[5%] h-64 w-64 rounded-full border border-violet-400/[0.06]" />
      <div className="absolute bottom-[18%] left-[9%] h-44 w-44 rounded-full border border-white/[0.03]" />

    </div>
  );
}
