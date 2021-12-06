
const Nav = () => {
  return (
    <nav className="nav">
      <div>
        {/* logo goes here */}
        <h1>
          <a href="/">Tm.</a>
        </h1>
      </div>
      <div>
        {/* links go here */}
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
          {/* <li>
            <Link href="/blog">Blog</Link>
          </li> */}
        </ul>
      </div>
    </nav>

  )
}

export default Nav;
