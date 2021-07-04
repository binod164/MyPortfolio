import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const NavBar = () => {
    return (
     
       <div class ="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/packages">Packages</NavLink>
          <NavLink to="/thingstodo">Things To Do</NavLink>
          <NavLink to="/contact">Contact</NavLink>
       </div>
     
    );
}
 
export default NavBar;