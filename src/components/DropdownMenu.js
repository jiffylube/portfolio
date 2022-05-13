import { useState } from 'react'
import { Link } from 'react-scroll'

function DropdownMenu() {

  const [click, setClick] = useState(false);
  const handleClick = () => 
    console.log('clicked')

  return (
    <div className="dropdown">
        
      <Link to="AboutMe" spy={true} smooth={true} offset={50} duration={500} className="menu-item" onClick={handleClick}>About Me</Link>
      <Link to="Projects" spy={true} smooth={true} offset={50} duration={500} className="menu-item" >Projects</Link>
      <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className="menu-item" >Contact</Link>
         
    </div>
  )
}

export default DropdownMenu