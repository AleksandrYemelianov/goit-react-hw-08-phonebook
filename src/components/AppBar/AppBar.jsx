import NavigationBar from 'components/NavigationBar/NavigationBar'
import UserMenu from 'components/UserMenu/UserMenu'
import { useAuth } from 'hooks/useAuth';
import React from 'react'
import { NavLink } from 'react-router-dom';


import css from './AppBar.module.css';



function AppBar() {
  const {isSuccesses} = useAuth();

  return (
    <header className={css.header}>
      <nav className={css.container}>
        <NavLink to='/' className={({isActive}) => isActive ? css.active : css.link}>Home</NavLink>
        <NavigationBar />
        {isSuccesses && <UserMenu />}
      </nav>
    </header>
  );
}

export default AppBar