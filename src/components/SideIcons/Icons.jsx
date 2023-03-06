import './Icons.css'
import emailIcon from '../../Pics/envelope.png';
import gitIcon from '../../Pics/githubLogo.png';
import linkedIcon from '../../Pics/linkedinLogo.png';

function Icons(props) {

  const Icons = props.IconsRef

  return (
    <div ref={Icons} id="sideBar">

      <div id="iconWrapper">

        <div>
          <a href="https://www.linkedin.com/in/lu-jeffrey/" target="_blank" rel="noreferrer noopener">
            <img id="linkedin" src={linkedIcon} alt="linkedin" />
          </a>
        </div>

        <div>
          <a href="https://github.com/jiffylube/" target="_blank" rel="noreferrer noopener">
            <img id="github" src={gitIcon} alt="Github" />
          </a>
        </div>

        <div>
          <a href={"mailto: lu.jeffrey91@gmail.com"} target="_blank" rel="noreferrer noopener">
            <img id="emailIcon" src={emailIcon} alt="email" />
          </a>
        </div>

      </div>

      <div id="theLine" />

    </div>

  )
}

export default Icons