import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { Icons } from '~/components/icon'
import AboutSection from '~/components/sections/AboutSection'
import { Button } from '~/components/ui/Button'
import ContactSection from '~/components/sections/ContactSection'
import ExperienceSection from '~/components/sections/ExperienceSection'
import Footer from '~/components/sections/Footer'

import Header from '~/components/sections/Header'
import HeroSection from '~/components/sections/HeroSection'
import ProjectsSection from '~/components/sections/ProjectsSection'
import SkillSection from '~/components/sections/SkillSection'
import TestimonialSection from '~/components/sections/TestimonialSection'

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	]
}

export default function Index() {
	return (
		<div className="relative">
			<Header />
			<HeroSection />
			<SkillSection />
			<ExperienceSection />
			<AboutSection />
			<ProjectsSection />
			<TestimonialSection />
			<ContactSection />
			<Footer />
		</div>
	)
}
