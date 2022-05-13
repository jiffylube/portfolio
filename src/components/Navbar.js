function Navbar(props) {
  return (
    <nav className="navbar">
      <h1>Hi! I'm Jeff</h1>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}

export default Navbar