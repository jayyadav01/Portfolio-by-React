import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <>
        <div className='head'>
            <ul>
                <li ><NavLink to='/'><HomeIcon/></NavLink></li>
                <li ><NavLink to='/About'><PermIdentityIcon/></NavLink></li>
                <li ><NavLink to='/Code'><IntegrationInstructionsIcon/></NavLink></li>
                <li ><NavLink to='/Work'><WorkIcon/></NavLink></li>
                <li ><NavLink to='/Education'><SchoolIcon/></NavLink></li>
                <li ><NavLink to='/Portfolio'><ContentCopyIcon/></NavLink></li>
                <li ><NavLink to='/Contact'><ContactPageIcon/></NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default Header
