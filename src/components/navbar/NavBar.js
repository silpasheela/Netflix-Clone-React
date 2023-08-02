// import React from 'react'
// import "./NavBar.css"
// import "../../App.css"

// function NavBar() {
//   return (
//     <div className='navbar'>
//         <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
//         <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
//     </div>
//   )
// }

// export default NavBar

import React, { useEffect, useState } from 'react';
import './NavBar.css';
import '../../App.css';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'opaque' : 'transparent'}`}>
    <div>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      /></div>
<div className='menu'>

          <span className='span'>Home</span>
          <span className='span'>TV Shows</span>
          <span className='span'>Movies</span>
          <span className='span'>New & Popular</span>
          <span className='span'>My List</span>
          <span className='span'>Browse by Languages</span>

</div>
<div>
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      /></div>
    </div>
  );
}

export default NavBar;


