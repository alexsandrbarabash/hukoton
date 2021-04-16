import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import ProfilePreview from '../profilePreview';

const NavbarItem = ({children}) => {
    return (
        <Navbar className='shadow-sm'>
            <Container fluid>
                <Navbar.Brand href='#home'>
                    <Link to='/'>
                        <img src={logo} alt='logo'/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse className='justify-content-center'>
                    {children}
                </Navbar.Collapse>
                <ProfilePreview name='Alexey Harahan'/>
            </Container>
        </Navbar>
    );
};

export default NavbarItem;
