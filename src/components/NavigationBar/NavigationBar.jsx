import { useAuth } from 'hooks/useAuth';
import React from 'react'
import { NavLink } from 'react-router-dom';
import css from './NavigationBar.module.css';
// import Logo from 'components/Logo/Logo';

function NavigationBar() {
  const {isSuccesses} = useAuth();
  return (
    <>
      {isSuccesses ? <NavLink to='/contacts' className={({isActive}) => isActive ? css.active : css.link}>Contacts</NavLink> :
        <NavLink to='/login' className={({isActive}) => isActive ? css.active : css.link}>Login</NavLink>}
    </>
  );
};

export default NavigationBar   

// className={({isActive}) => isActive ? css.active : css.link}
