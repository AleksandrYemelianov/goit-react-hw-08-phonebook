import { useAuth } from 'hooks/useAuth';
import React from 'react'
import { NavLink } from 'react-router-dom';

// import Logo from 'components/Logo/Logo';

function NavigationBar() {
  const {isSuccesses} = useAuth();
  return (
    <>
      {isSuccesses ? <NavLink to='/contacts' >Contacts</NavLink> :
        <NavLink to='/login' >Login</NavLink>}
    </>
  );
};

export default NavigationBar   

// className={({isActive}) => isActive ? css.active : css.link}
