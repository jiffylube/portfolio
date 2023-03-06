import TacoJump from './addProject/TacoJump'
import MhWorld from './addProject/MhWorld'
import MySelfie from './addProject/MySelfie'
import Hater from './addProject/Hater'

import './Projects.css'

function Projects(props) {

  // const ProjectsRef = props.ProjectsRef

  return (
    <div className="pages" id="projects">

      <div id="projectsWrap">

        <h1>Projects</h1>
        <div id='projectsPageBox'>
          <MhWorld />
          <MySelfie />
          <TacoJump />
          <Hater />
        </div>

      </div>

    </div>
  )
}

export default Projects