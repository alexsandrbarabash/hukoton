import React from 'react';
import NavbarItem from '../../components/navbarItem';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const NavbarContainer = () => {
    const role = useSelector((state) => state.userReducer.role);
    
    return (
      <NavbarItem>
        <div className="link-container d-flex">
          <Link to="/">Home</Link>
          <Link to={`/schedule/${role || "student"}`}>Schedule</Link>
          <Link to="/login">Login</Link>
        </div>
      </NavbarItem>
    );
};

export default NavbarContainer;