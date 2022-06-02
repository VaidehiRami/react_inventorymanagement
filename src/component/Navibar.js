import React from 'react';
import "./Navibar.css";
import {NavLink} from 'react-router-dom';


const Navibar = () => {
  return (
    <nav className='nav'>
     <NavLink to="/productlist" >ProductList</NavLink>
      <NavLink to="/addproduct" >AddProduct</NavLink>   
  </nav>
  )
}

export default Navibar