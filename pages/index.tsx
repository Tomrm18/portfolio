import type { NextPage } from 'next'
import Nav from '../components/nav';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home;
