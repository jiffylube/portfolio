import MhWorld from './addProject/MhWorld'
import MySelfie from './addProject/MySelfie'
import Hater from './addProject/Hater'

import './Projects.css'

function Projects(props) {

  // const ProjectsRef = props.ProjectsRef

  return (

    // no class pages for dynamic height middle page
    <div id="projects">

      <div id="projectsWrap">

        <h1>Projects</h1>
        <div className="renderedBox">
          <MhWorld />
          <MySelfie />
          <Hater />
        </div>

      </div>

    </div>
  )
}

export default Projects