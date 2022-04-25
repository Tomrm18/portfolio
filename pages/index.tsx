import type { NextPage } from 'next'

import { NavBar, AboutSection, SkillsSection, ProjectsSection, ContactSection, Footer } from "@components";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home;
