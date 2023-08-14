import React from 'react'
import { NavLink , Outlet} from 'react-router-dom'

function Education() {
  return (
    <>  
        <div className='education'>
        <NavLink className='btn1' to='/Education'>EDUCATION</NavLink>
        <NavLink className='btn2' to='/Education/Internship'>INTERNSHIP</NavLink>
        </div>

        <Outlet/>
    </>
  )
}

export default Education
