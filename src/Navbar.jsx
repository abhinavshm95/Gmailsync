import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <ul>
                        <li><NavLink exact activeClassName='active_class' to="/" >Home</NavLink> </li>
                        <li><NavLink exact activeClassName='active_class' to="/history">History Page</NavLink> </li>
                        <li><NavLink exact activeClassName='active_class' to="/create">Create/Edit mail</NavLink> </li>
                    </ul>
                </div>
                <div className="nav-right">
                    <button className='btn'>
                        <NavLink to='/login'>Login</NavLink>
                         </button>
                    <button className="btn"> <NavLink to='/sign'>Signin</NavLink> </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
