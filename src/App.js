import './App.css';
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'
import DropdownMenu from './components/DropdownMenu'
import AboutMe from './components/Pages/Projects/AboutMe'
import Projects from './components/Pages/Projects/Projects'

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon="▼">
          <DropdownMenu/>
        </NavItem>
      </Navbar>

      <div className="bodyContent">
        <AboutMe />
        <Projects/>
        <Projects/>
      </div>

    </div>
  );
}



export default App;
