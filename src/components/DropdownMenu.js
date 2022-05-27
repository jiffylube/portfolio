function DropdownMenu(props) {

  const clickAboutMe = props.clickAboutMe
  const clickProjects = props.clickProjects
  const clickContact = props.clickContact

  return (
    <ul className="dropdownMenu">
      <li onClick={props.clickAboutMe} className="dropdownItem-1">About Me</li>
      <li onClick={props.clickProjects} className="dropdownItem-2">Projects</li>
      <li onClick={props.clickContact} className="dropdownItem-3">Contact</li>
    </ul>
  )
}

export default DropdownMenu