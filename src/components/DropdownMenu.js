function DropdownMenu(props) {

  const clickAboutMe = props.clickAboutMe
  const clickProjects = props.clickProjects
  const clickContact = props.clickContact

  return (
    <div className="dropdown">
    
      <div onClick={props.clickAboutMe} className='menu-item' >About Me</div>
      <div onClick={props.clickProjects} className='menu-item' >Projects</div>
      <div onClick={props.clickContact} className='menu-item' >Contact</div>

    </div>
  )
}

export default DropdownMenu