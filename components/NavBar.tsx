import { Link } from '@components';

export const NavBar = () => {
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
            <Link href="#about">About Me</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
