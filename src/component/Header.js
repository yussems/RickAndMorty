import React from 'react'
import headerStyles from './header.module.css'
function Header() {
  return (
    <div className={headerStyles.container}>
      <h1>Rick And Morty</h1>
    </div>
  )
}

export default Header