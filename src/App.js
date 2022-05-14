import './App.css';
import React, {useRef} from 'react'
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'
import DropdownMenu from './components/DropdownMenu'
import AboutMe from './components/Pages/Projects/AboutMe'
import Projects from './components/Pages/Projects/Projects'
import Contact from './components/Pages/Projects/Contact'

function App() {

  const AboutMeRef = useRef()
  const ProjectsRef = useRef()
  const ContactRef = useRef(null)

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
      <Navbar>
        <NavItem icon="▼">
          <DropdownMenu
            clickAboutMe={clickAboutMe}
            clickProjects={clickProjects}
            clickContact={clickContact} />
        </NavItem>
      </Navbar>

    <div className="panels">
      <AboutMe AboutMeRef={AboutMeRef}/>
      <Projects ProjectsRef={ProjectsRef}/>
      <Contact ContactRef={ContactRef} />
    </div>
      
    </div>
  );
}



export default App;
