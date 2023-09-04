import NavigationBar from 'components/NavigationBar/NavigationBar'
import UserMenu from 'components/UserMenu/UserMenu'
import React from 'react'

import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <NavigationBar />
      <UserMenu />
    </header>
  );
}

export default Header