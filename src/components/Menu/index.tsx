import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <h1>React Boilerplate</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        <Link to="/">Home</Link> |{' '}
        <Link to="/login">Login</Link> |{' '}
        <Link to="/signup">Sign Up</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Menu