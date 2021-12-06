import type { NextPage } from 'next'
import Nav from '../components/nav';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import Projects from '../components/sections/projects';

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  )
}

export default Home;
