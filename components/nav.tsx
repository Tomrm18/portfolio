import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <h1>
          <Link href="/">Tm.</Link>
        </h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Nav;
