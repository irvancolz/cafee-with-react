import React from 'react'
import { Link } from 'react-router-dom'

export  function Navigation() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/favourite">Favourite</Link>
            </li>
            <li>
                <Link to="/restaurants">restaurants</Link>
            </li>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/restaur">unknown</Link>
            </li>
            <li>
                <Link to="/restaurants/1">resto 1</Link>
            </li>
        </ul>
    </nav>
  )
}
