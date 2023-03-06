import './App.css';
import React, {useRef} from 'react'

import Icons from './components/SideIcons/Icons';
import Landing from './components/Landing/Landing'
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {

  const LandingRef = useRef()
  const IconsRef = useRef()
  const AboutMeRef = useRef()
  const ProjectsRef = useRef()
  const ContactRef = useRef()


  return (
    <div className="App">
      
      <div className="panels">
          <Icons IconsRef={IconsRef} />
          <Landing LandingRef={LandingRef}/>
          <AboutMe AboutMeRef={AboutMeRef}/>
          <Projects ProjectsRef={ProjectsRef}/>
          <Contact ContactRef={ContactRef} />
      </div>

    </div>
  );
}



export default App;
