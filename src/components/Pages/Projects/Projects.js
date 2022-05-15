import TacoJump from './addProject/TacoJump'
import MhWorld from './addProject/MhWorld'
import MySelfie from './addProject/MySelfie'

function Projects(props) {

  const ProjectsRef = props.ProjectsRef

  return (
    <div ref={ProjectsRef} className="pages" id="projects">
      <h2>Projects</h2>
      <TacoJump />
      <MhWorld />
      <MySelfie />
    </div>
  )
}

export default Projects