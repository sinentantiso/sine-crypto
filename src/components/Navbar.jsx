import React from 'react';
import {Link} from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import {AiOutlineMenu} from 'react-icons/ai';



const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <h1>Sine-crypto</h1>
      </Link>
      <div>
        <ThemeToggle />
      </div>
      <div>
        <Link to="signin">Sign In</Link>
        <Link to="signup">Sign Up</Link>
      </div>
      {/*Mobile icons */}
      <div>
        <AiOutlineMenu />
      </div>
      {/*Mobil menu */}
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Account</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <div>
          <Link to='signin'>
            <button>Signin</button>
          <Link>
          <Link to='signup'>
            <button>Signup</button>
          <Link>
        <div>
      </div>
    </div>    
  )
}

export default Navbar