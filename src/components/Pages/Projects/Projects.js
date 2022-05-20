import TacoJump from './addProject/TacoJump'
import MhWorld from './addProject/MhWorld'
import MySelfie from './addProject/MySelfie'

function Projects(props) {

  const ProjectsRef = props.ProjectsRef

  return (
    <div ref={ProjectsRef} className="pages" id="projects">
        <h2>Projects</h2>
        <div className='projectsPageBox'>
          <TacoJump />
          <MhWorld />
          <MySelfie />
        </div>
    </div>
  )
}

export default Projects