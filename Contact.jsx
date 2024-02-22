import React from 'react';
import "../../Styles/main.css";
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    
    <div className="footer container">
      <div className='social-icons'>
        <ul>
        
          <li style={{color: '00AFB5'}}><Link to="https://twitter.com/@DeeMetuso"><FaTwitter /></Link></li>
          <li style={{color: '00AFB5'}}><Link to="https://github.com/@DeeMetuso"><FaGithub /></Link></li>
          <li style={{color: '00AFB5'}}><Link to="https://www.linkedin.com/in/makabongwe-metuso-9328b1252/"><FaLinkedin /></Link></li>
        </ul>
      </div>
              
    <p style={{color: '#00AFB5'}}>Copyright © 2024 All rights reserved <a href="https://twitter.com/@DeeMetuso" target='_blank'>Makabongwe Metuso</a>. Made with ❤ in Cape Town</p>
    </div>
  )
}

export default Contact;