import type { NextPage } from 'next'

import { NavBar, AboutSection, SkillsSection, ExperienceSection, ProjectsSection, ContactSection, Footer } from "@components";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home;
