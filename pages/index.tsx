import type { NextPage } from 'next'
import Nav from '../components/nav';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';

const Home: NextPage = () => {
  return (

    <>
      <Nav />
      <main>
        <About />
        <Skills />
      </main>
    </>
  )
}

export default Home;
