import gitIcon from '../../Pics/githubLogo.png';
import linkedIcon from '../../Pics/linkedinLogo.png';
import resume from '../../Pics/Resume.pdf';

import './Contact.css'

function Contact(props) {

  // const ContactRef = props.ContactRef

  return (
    <div className="pages" id="contact">

      <div id="contactWrap">

        <h2>Feel free to contact me !</h2>

        <div>
          <a href={"mailto: lu.jeffrey91@gmail.com"}
            target="_blank">lu.jeffrey91@gmail.com</a>
        </div>

        <div>
          <a href={resume} className="projectsLinks" target="_blank" rel="noreferrer noopener">Resume</a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/lu-jeffrey/" className="projectsLinks" target="_blank" rel="noreferrer noopener">
            <img id="linkedin" src={linkedIcon} alt="linkedin" />
          </a>
        </div>

        <div>
          <a href="https://github.com/jiffylube/" className="projectsLinks" target="_blank" rel="noreferrer noopener">
            <img id="github" src={gitIcon} alt="Github" />
          </a>
        </div>

      </div>

    </div>
  )
}

export default Contact