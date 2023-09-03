import React from 'react'
import { NavLink } from 'react-router-dom';
// import Logo from 'components/Logo/Logo';

function NavigationBar() {
  return (
    <>
      {/* <Link to='/'><Logo/></Link> */}
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contacts' >Contacts</NavLink>
        <NavLink to='/login' >Login</NavLink>
    </>
  )
};

export default NavigationBar   

// className={({isActive}) => isActive ? css.active : css.link}