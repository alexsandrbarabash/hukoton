import React from 'react';
import NavbarItem from '../../components/navbarItem';
import { Link } from 'react-router-dom';

const NavbarContainer = () => {
    return (
        <NavbarItem>
            <div className='link-container d-flex'>
                <Link to='/'>Home</Link>
                <Link to='/schedule'>Schedule</Link>
                <Link to='/about'>About</Link>
            </div>
        </NavbarItem>
    );
};

export default NavbarContainer;