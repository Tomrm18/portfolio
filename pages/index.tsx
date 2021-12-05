import type { NextPage } from 'next'
import Nav from '../components/nav';
import About from '../components/sections/about';

const Home: NextPage = () => {
  return (

    <>
      <Nav />
      <main>
        <About />
      </main>
    </>
  )
}

export default Home;
