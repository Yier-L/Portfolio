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

      {/* Blue glow — top center. Full-width element: no left/right boundary to clip against. */}
      <motion.div
        style={{
          y: y1,
          background:
            "radial-gradient(ellipse 65% 55% at 50% 10%, rgba(59,130,246,0.22) 0%, transparent 100%)",
        }}
        className="absolute top-0 left-0 right-0 h-[70vh] blur-[20px]"
      />



      {/* Indigo glow — bottom left */}
      <motion.div
        style={{
          y: y3,
          background:
            "radial-gradient(ellipse 50% 60% at 8% 80%, rgba(99,102,241,0.18) 0%, transparent 100%)",
        }}
        className="absolute top-[40%] left-0 right-0 h-[70vh] blur-[15px]"
      />

      {/* Cyan accent — center left */}
      <motion.div
        style={{
          y: y4,
          background:
            "radial-gradient(ellipse 38% 50% at 25% 60%, rgba(6,182,212,0.13) 0%, transparent 100%)",
        }}
        className="absolute top-[45%] left-0 right-0 h-[50vh] blur-[15px]"
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
