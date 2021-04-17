import React, {useState} from 'react';
import NavbarItem from '../../components/navbarItem';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const NavbarContainer = () => {
    const {loggedIn, role, roles} = useSelector(state => state.userReducer);

    return (
      <NavbarItem>
        <div className="link-container d-flex">
          <Link to="/">Home</Link>
          {loggedIn && role === roles.creator ? <Link to="/create">Users panel</Link> : null}
          <Link to={`/schedule/${role || "student"}`}>Schedule</Link>
          <Link to="/login">Login</Link>
        </div>
      </NavbarItem>
    );
};

export default NavbarContainer;