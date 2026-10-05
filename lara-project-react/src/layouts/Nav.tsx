import React from 'react'
import { Link } from 'react-router'

export default function Nav() {
  return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/about">About</Link>
            <span> | </span>
            <Link to="/contact">Contact</Link>
        </nav>
    </>
  )
}
