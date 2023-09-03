import NavigationBar from 'components/NavigationBar/NavigationBar'
import UserMenu from 'components/UserMenu/UserMenu'
import React from 'react'

function Header() {
  return (
    <>
      <NavigationBar />
      <UserMenu />
    </>
  );
}

export default Header