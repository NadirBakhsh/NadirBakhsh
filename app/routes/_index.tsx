import type { MetaFunction } from '@remix-run/node'
import AboutSection from '~/components/sections/AboutSection'
import ContactSection from '~/components/sections/ContactSection'
import ExperienceSection from '~/components/sections/ExperienceSection'
import Footer from '~/components/sections/Footer'
import Header from '~/components/sections/Header'
import HeroSection from '~/components/sections/HeroSection'
import ProjectsSection from '~/components/sections/ProjectsSection'
import SkillSection from '~/components/sections/SkillSection'
import SkillsMarquee from '~/components/sections/SkillsMarquee'
import TestimonialSection from '~/components/sections/TestimonialSection'

export const meta: MetaFunction = () => {
  return [
    { title: 'Nadir Bakhsh — Fullstack Developer' },
    {
      name: 'description',
      content:
        'Fullstack Developer specializing in React, Next.js, and modern web technologies. Open to work.',
    },
    {
      name: 'keywords',
      content:
        'fullstack developer, react, next.js, frontend, backend, web development',
    },
  ]
}

export default function Index() {
  return (
    <div className="relative overflow-clip pt-20">
      <Header />
      <main>
        <HeroSection />
        <SkillsMarquee />
        <SkillSection />
        <ExperienceSection />
        <AboutSection />
        <ProjectsSection />
        <TestimonialSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
