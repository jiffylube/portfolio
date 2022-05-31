import './App.css';
import React, {useRef} from 'react'
import DropdownMenu from './components/DropdownMenu'
import AboutMe from './components/Pages/Projects/AboutMe'
import Projects from './components/Pages/Projects/Projects'
import Contact from './components/Pages/Projects/Contact'

function App() {

  const AboutMeRef = useRef()
  const ProjectsRef = useRef()
  const ContactRef = useRef()

  function clickAboutMe() {
    AboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  function clickProjects() {
    ProjectsRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  function clickContact() {
    ContactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">

    <div className="panels">

    <nav>
      <div className="dropdown">
      ▼
            <DropdownMenu
            clickAboutMe={clickAboutMe}
            clickProjects={clickProjects}
            clickContact={clickContact} />  
      </div>       
    </nav>

      <AboutMe AboutMeRef={AboutMeRef}/>
      <Projects ProjectsRef={ProjectsRef}/>
      <Contact ContactRef={ContactRef} />
    </div>
      
    </div>
  );
}



export default App;
