import { useRef } from 'react';
import { FaBars, FaTimes, FaUser, FaEnvelope, FaCamera, FaCode } from "react-icons/fa"; 
import "../Styles/main.css"

function Navbar(){
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <nav className='navbar' ref={navRef}>
                <div className='nav-icons'>
                <FaUser className='nav-icon' data-text='About Me'/>
                <FaCode className='nav-icon' data-text= 'Projects'/>
                <FaCamera className='nav-icon' data-text='Photography'/>
                <FaEnvelope className='nav-icon' data-text='Contact'/>

                </div>
                
                {/* <a href="/#">About Me</a>
                <a href="/#">Projects</a>
                <a href="/#">Photography</a>
                <a href="/href">Contact</a> */}
               
                <button className='nav- btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>   

            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>

    );
}

export default Navbar;