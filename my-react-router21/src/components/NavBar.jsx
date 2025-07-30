
import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';


const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <img src={logo} alt='' width={'100px'}/>
            
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/products'><li>Products</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
                <NavLink to='/jobs'><li>Jobs</li></NavLink>
            </ul>
            {/*

            //using Link
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
            */}
            <button onClick={() => navigate('/contact', {replace:true})}>Get Started</button>
        </div>
    )
}

export default NavBar