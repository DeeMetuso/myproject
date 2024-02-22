
import React from 'react';


function Projects() {
  return (
    <div className='projects'>
          <div className="projects container">
    <div className="projects-header">
        <h1 className="section-title">Recent <span>Projects</span></h1>
    </div>
    <div className="all-projects">
        <div className="project-item">
            <div className="project-info">
                <h1>Tax financial calculator</h1>
                <h2>Java</h2>
                <p>The task was to develop a Tax Calculator System using the Waterfall Model. Tax obligations
                    are calculated based on individuals' annual income.
                    Employing Java as our programming language, known for its reliability, the aim is to deliver
                    a transparent and user-friendly system.
                    The project scope encompasses adhering to specified requirements, ensuring accurate tax
                    calculations.
                    To undertake this project we followed the Waterfall Model meticulously to provide an
                    efficient tax calculator.
                </p>
            </div>
            <div className="project-img">
                <img src="src\java-logo-black-and-white-1 (1).png"  />
            </div>
        </div>
        <div className="project-item">

        <div className="project-img">
                <img src="src\python-logo-black-and-white.png" alt="img" />
            </div>
            <div className  ="project-info">
                <h1>Banking App</h1>
                <h2>Python</h2>
                <p>The project was to create a user-friendly GUI (Graphical User Interface) application using
                    Python-Tkinter for efficient bank account management.
                    Users can easily register and log in to access their accounts, providing essential details
                    during registration.
                    The application facilitates various transactions, including balance inquiries and credit or
                    debit operations.
                    It offers a secure and straightforward experience for users to manage their finances.
                    The goal was to deliver a reliable and accessible tool that enhances the banking experience
                </p>
            </div>
            
        </div>
        <div className="project-item">
            <div className="project-info">
                <h1>Midnight Coders website</h1>
                <h2>HTML CSS and Javascript</h2>
                <p> This project required the creation of a website
                    featuring the classic Tic Tac Toe game, developed using HTML, JavaScript,
                    and CSS. Leveraging my skills in front-end technologies. 
                    Using JavaScript and Node JS to enable multiplayer
                    and real-time feedback for players.
                    Through this project, I gained practical experience in web-based game development,
                    JavaScript programming, and user-centric design principles, while delivering an engaging
                    and interactive gaming experience for users.</p>
            </div>
            <div className="project-img">
                <img src="src\html-css-javascript.jpg" alt="img" />
            </div>
        </div>

    </div>



  </div>

    </div>

  );
}

export default Projects;