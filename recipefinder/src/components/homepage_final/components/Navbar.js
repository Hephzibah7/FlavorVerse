import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar';
import Register from './register';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faList, faPlateWheat, faCog , faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

  

  const [showSidebar, setshowSidebar] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },
    {
      name: "About",
      path: "/about",
      icon: faAddressCard
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList
    },
    {
      name: "Cuisines",
      path: "/cuisines",
      icon: faPlateWheat
    },
    {
      name: "SIGN UP",
      path: "/register",
      icon: faCog
    },
    {
      name: "ChefForm",
      path: "/ChefForm",
      icon: faCog
    }
  ]

  function closeSidebar(){
    setshowSidebar(false);
  }
  return (
    <>
      <div className='navbar container'>
        <a href="#" className='logo'><span className='first'>F</span>lavor<span className='first'>V</span>erse</a>
        <div className="nav-links">
          {/* { links.map(link => (
            <a href="#!" key={link.name}>{link.name}</a>
          ))} */}
          <a href="#" className='active'>Home</a>
          <a href="/about">About</a>
          <a href="/recipes">Recipes</a>
          <a href="/cuisines">Cuisines</a>
          <a href="/ChefForm">ChefForm</a>
        </div>
        <div className="logout">
          <a className='user-account' href="/register"><FontAwesomeIcon icon={faUser} /></a>
            
        </div>
        
        {/* showSidebar ? "sidebar-btn active" : "sidebar-btn" ---> if showSidebar is true, make sidebar-btn active, else make sidebnar-btn */}
        {/* On clicking the hamburger menu, just set the setshowSidebar to the opposite to its value */}
        <div onClick={() =>  setshowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
      
    </>
  )
}
