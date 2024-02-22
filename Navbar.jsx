

import { useRef, useState } from 'react';
import { FaUser, FaCode, FaCamera, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa';
import "../Styles/main.css";
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] =useState(false)
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
        
    }
    return (
        <header>
            <nav ref={navRef}>
                
                <ul>
                    <li>
                        <Link to="./Pages/About"><FaUser className='nav-icon' /></Link>
                    </li>
                    <li>
                        <Link to="./Pages/Projects"><FaCode className='nav-icon' /></Link>
                    </li>
                    <li>
                        <Link to="./Pages/Photography"><FaCamera className='nav-icon' /></Link>
                    </li>
                    <li>
                        <Link to="./Pages/Contact"><FaEnvelope className='nav-icon' /></Link>
                    </li>
                </ul>    
                    
                
            </nav>
            <button className='nav-close-btn' onClick={showNavbar}>
                <FaBars className='nav-bagga' />
                <FaTimes className='nav-times' />
                
                    
                </button>
            <button className='nav-btn' onClick={showNavbar}>
                
                
            </button>
        </header>
    );
}



export default Navbar;



