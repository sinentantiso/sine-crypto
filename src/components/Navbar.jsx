import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <h1>Sine-crypto</h1>
      </Link>
      <div>
        <ThemeToggle />
      </div>
    </div>    
  )
}

export default Navbar