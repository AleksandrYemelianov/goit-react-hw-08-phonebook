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
      <NavLink to='/'>Home</NavLink>
      <NavigationBar />
      {isSuccesses && <UserMenu />}
    </header>
  );
}

export default AppBar