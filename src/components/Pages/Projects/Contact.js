import gitIcon from '../../../Pics/githubLogo.png';
import linkedIcon from '../../../Pics/linkedinLogo.png';
import resume from '../../../Pics/Resume.pdf';


function Contact(props) {

  const ContactRef = props.ContactRef

  return (
    <div ref={ContactRef}className="pages" id="contact">
      
      <h2>CONTACT INFO</h2>

      <div className="projectsLinks">lu.jeffrey91@gmail.com</div>
      
      <div>
        <a href={resume} className="projectsLinks" target="_blank" rel="noreferrer noopener">Resume</a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/lu-jeffrey/" className="projectsLinks" target="_blank" rel="noreferrer noopener">
          <img id="linkedin" src={linkedIcon} alt="linkedin"/>
        </a>
      </div>

      <div>
        <a href="https://github.com/jiffylube/" className="projectsLinks" target="_blank" rel="noreferrer noopener">
          <img id="github" src={gitIcon} alt="Github"/>
        </a>
      </div>

    </div>
  )
}

export default Contact