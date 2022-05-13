import gitIcon from '../../../Pics/githubLogo.png';
import linkedIcon from '../../../Pics/linkedinLogo.png';
import resume from '../../../Pics/Resume.pdf';


function Contact(props) {

  const ContactRef = props.ContactRef

  return (
    <div ref={ContactRef}className="pages" id="contact">
      
      <h2>CONTACT INFO</h2>

      <div className="projectsLinks">lu.jeffrey91@gmail.com</div>

      <p>Brooklyn, NY</p>
      
      <div>
        <a href={resume} className="projectsLinks">Resume</a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/jeffrey-lu-a906b0a6" className="projectsLinks">
          <img id="linkedin" src={linkedIcon}/>
        </a>
      </div>

      <div>
        <a href="https://github.com/jiffylube/" className="projectsLinks" >
          <img id="github" src={gitIcon} alt="Github"/>
        </a>
      </div>

    </div>
  )
}

export default Contact