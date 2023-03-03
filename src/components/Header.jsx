import React from 'react'

const Header = (props) => {
  return (
    <header>
        <h1>Mat Chandler</h1>
        {props.children}
    </header>
  )
}

export default Header
