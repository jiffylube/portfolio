import DropdownItem from './DropdownItem'
import { useState } from 'react';

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');

  return (
    <div className="dropdown">
        
        <DropdownItem>My Profile</DropdownItem>
        
        <DropdownItem>Settings</DropdownItem>
        
        <DropdownItem
          leftIcon="◀︎"
          rightIcon="▶︎"
        >
        </DropdownItem>
        
    </div>
  )
}

export default DropdownMenu