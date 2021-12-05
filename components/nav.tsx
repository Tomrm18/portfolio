import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        {/* logo goes here */}
        <h1>
          <Link href="/">Tm.</Link>
        </h1>
      </div>
      <div>
        {/* links go here */}
        <ul>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link href="/blog">Blog</Link>
          </li> */}
        </ul>
      </div>
    </nav>

  )
}

export default Nav;
