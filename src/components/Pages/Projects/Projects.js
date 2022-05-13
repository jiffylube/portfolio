import TacoJump from './addProject/TacoJump'
import MhWorld from './addProject/MhWorld'
import MySelfie from './addProject/MySelfie'

function Projects(props) {

  const ProjectsRef = props.ProjectsRef

  return (
    <div ref={ProjectsRef} className="pages" id="Projects">
      <TacoJump />
      <MhWorld />
      <MySelfie />
    </div>
  )
}

export default Projects