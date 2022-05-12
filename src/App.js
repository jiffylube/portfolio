import './App.css';
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'
import DropdownMenu from './components/DropdownMenu'

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon="😀"/>
        <NavItem icon="😀"/>
        <NavItem icon="😀" />
        
        <NavItem icon="▼">
          <DropdownMenu/>
        </NavItem>

      </Navbar>
    </div>
  );
}



export default App;
