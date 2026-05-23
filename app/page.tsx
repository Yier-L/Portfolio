import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { TechSection } from "@/components/sections/tech-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const title = `${siteConfig.name} — ${siteConfig.role}`;

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/og?title=${encodeURIComponent(
          title
        )}`,
      },
    ],
  },
};

export default function Home() {
  return (
    <main id="content" className="flex-1">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
