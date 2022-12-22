import React, { useContext } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from 'react-router-dom';
import "./navbar.scss";
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';


const Navbar = () => {

  const { darkMode, toggle } = useContext(DarkModeContext);
  const {currentUser}  = useContext(AuthContext);
  


  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>AbhiCodex</span>

        </Link>
        <HomeOutlinedIcon />
        {darkMode ? <LightModeOutlinedIcon style={{ cursor: "pointer" }} onClick={toggle} /> : <DarkModeOutlinedIcon style={{ cursor: "pointer" }} onClick={toggle} />}

        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search...' />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePicture} alt='' />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar