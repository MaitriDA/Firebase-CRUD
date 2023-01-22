import React from 'react';
import '../style/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar_main'>
        <div className='navbar_logo'>SECQURAISE</div>
        <div className='navbar_count'>
            <div className='navbar_count_male_female male'>25</div>
            <div className='navbar_count_male_female female'>25</div>
        </div>
    </div>
  )
}

export default Navbar