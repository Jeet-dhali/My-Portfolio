import { NavBar } from '../components/navbar'
import { Coffee } from '../components/coffee'
import amazonCloneImg from '../assets/Amazon-clone-ss.png'
import {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'
import './portfolio.css'

function PortfolioPage() {

  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
    <NavBar introRef={introRef} skillsRef={skillsRef} projectsRef={projectsRef} educationRef={educationRef} contactRef={contactRef} />
    <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
    
    ref={introRef} className='intro'>
      <div className="intro-row">
        <motion.h1 
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I am Jeet Dhali. I like to design my website using art and animations.<br />
          I feel minimalist UI design are good but adding art and animations make <br /> the website feel more alive and lively.
          I like game dev so I try to put my <br /> game dev  knowledge to my website to improve the UI/UX.
        </motion.h1>
        <Coffee />
      </div>
    </motion.div>

    <div ref={skillsRef} className='skills'>
      <h1>Skills</h1>
        <div className="skills-list">
          <span className="skill"><FontAwesomeIcon icon={faHtml5} size="2x" /></span>
          <span className="skill"><FontAwesomeIcon icon={faCss3Alt} size="2x" /></span>
          <span className="skill"><FontAwesomeIcon icon={faJs} size="2x" /></span>
          <span className="skill"><FontAwesomeIcon icon={faReact} size="2x" /></span>
          <span className="skill"><span style={{ marginTop: '6px', marginBottom: '6px' }}>C++</span></span>
          <span className="skill"><FontAwesomeIcon icon={faPython} size="2x" /></span>
      </div>
    </div>

    <div ref={projectsRef} className='projects'>
      <h1>Projects</h1>
      <div className='projects-container'>
        <div className='project-card'>
          <h2 className='project-name'>Amazon Clone</h2>
          <div className='project-img'>
            <a href="https://amazon-clone-backend-71hb.onrender.com"><img src={amazonCloneImg} /></a>
          </div>
            <p>This is a amazon clone with fully functional auth system and backend and database</p>
            <div className='project-links'>
              <a href="https://github.com/Jeet-dhali/javascript-amazon-project-main" className="project-btn">View Code</a>
              <a href="https://amazon-clone-backend-71hb.onrender.com" className="project-btn">Live Demo</a>
            </div>
        </div>
      </div>
    </div>

    <div ref={educationRef} className='education'>
      <h1>Education</h1>
      <p>National Institute Of Technology Nagaland<br />
      B-Tech in Electrical and Electronics Engineering<br />
      2025-2029
      </p>
    </div>

    <div ref={contactRef} className='contact'>
      <h1>Contact Me</h1>
      <p className='contactpara'>Email: <a href="mailto:jeetproxy@gmail.com.com">jeetproxy@gmail.com</a></p>
      <p className='contactpara'>GitHub: <a href="https://github.com/Jeet-dhali">github.com/Jeet-dhali</a></p>
      <p className='contactpara'>LinkedIn: <a href="https://www.linkedin.com/in/jeet-dhali-401314360/">linkedin.com/in/jeet-dhali</a></p>
    </div>
    </>
  )
}

export default PortfolioPage