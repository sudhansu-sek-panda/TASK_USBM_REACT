import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
  <div className="navbar-container">
        <h2>Assignments</h2>

<nav>
    <ul>
        <li>
            <Link to="/">To-Do List</Link>
        </li>
        <li>
            <Link to="userauthentication">Use Authentication</Link>
        </li>  
    </ul>

    <ul>
    <li>
            <Link to="completeecommerce">Complete E Commerce</Link>
        </li>
        <li>
            <Link to="countercontex"> Counter Context</Link>
        </li>
    </ul>

    <ul>
    <li>
            <Link to="blogapp">Blog App</Link>
        </li>
       
        <li>
            <Link to="fetchdisplay">Fetch Display</Link>
        </li>
    </ul>

    <ul>
    <li>
            <Link to="weather">Weather App</Link>
        </li>
        <li>
            <Link to="multistepform"> Multi Step Form</Link>
        </li>
    </ul>

    <ul>
    <li>
            <Link to="darkmodetoggle">Dark Mode Toggle</Link>
        </li>
        <li>
            <Link to="ecommcart"> E Comm Cart</Link>
        </li>
      
    </ul>
</nav>  
</div>
</>)
}

export default NavBar