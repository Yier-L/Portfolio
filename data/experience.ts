export type Experience = {
  id: string;
  company: string;
  role: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM or 'Present'
  summary?: string;
  bullets?: string[];
};

export const experience: Experience[] = [
  {
    id: 'job-3',
    company: 'Acme Inc',
    role: 'Senior Frontend Engineer',
    start: '2022-06',
    end: 'Present',
    summary: 'Led frontend initiatives for the core product, introduced performance budgets, and improved Lighthouse scores.',
    bullets: ['Improved TTFB by 40%', 'Introduced design system and component library'],
  },
  {
    id: 'job-2',
    company: 'Web Studio',
    role: 'Frontend Engineer',
    start: '2019-02',
    end: '2022-05',
    summary: 'Built customer-facing features and contributed to platform migrations.',
  },
  {
    id: 'job-1',
    company: 'Startup Co',
    role: 'Fullstack Engineer',
    start: '2017-08',
    end: '2019-01',
    summary: 'Worked across the stack shipping critical features and backend APIs.',
  },
];
