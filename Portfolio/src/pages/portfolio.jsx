import { NavBar } from '../components/navbar'
import { Coffee } from '../components/coffee'
import { ContentBox } from '../components/ContentBox'
import amazonCloneImg from '../assets/Amazon-clone-ss.png';
import './portfolio.css'

function PortfolioPage() {

  return (
    <>
    <NavBar />
    <div className='intro'>
      <div className="intro-row">
        <h1>
          I am Jeet Dhali. I like to design my website using art and animations.<br />
          I feel minimalist UI design are good but adding art and animations make <br /> the website feel more alive and lively.
          I like game dev so I try to put my <br /> game dev  knowledge to my website to improve the UI/UX.
        </h1>
        <Coffee />
      </div>
    </div>

    <div className='skills'>
      <h1>Skills</h1>
        <div className="skills-list">
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">C++</span>
          <span className="skill">Python</span>
      </div>
    </div>

    <div className='projects'>
      <h1>Projects</h1>
      <div className='projects-container'>
        <div className='project-card'>
          <div className='project-img'>
            <img src={amazonCloneImg}></img>
          </div>
            <h2 className='project-name'>Amazon Clone</h2>
            <p>This is a amazon clone with fully functional auth system and backend and database</p>
            <div className='project-links'>
              <a href="https://github.com/Jeet-dhali/javascript-amazon-project-main" className="project-btn">View Code</a>
              <a href="https://amazon-clone-backend-71hb.onrender.com" className="project-btn">Live Demo</a>
            </div>
        </div>
      </div>
    </div>

    <div className='education'>
      <h1>Education</h1>
      <p>National Institute Of Technology Nagaland<br />
      B-Tech in Electrical and Electronics Engineering<br />
      2025-2029
      </p>
    </div>

    <div className='contact'>
      <h1>Contact Me</h1>
      <p className='contactpara'>Email: <a href="mailto:jeetproxy@gmail.com.com">jeetproxy@gmail.com</a></p>
      <p className='contactpara'>GitHub: <a href="https://github.com/Jeet-dhali">github.com/Jeet-dhali</a></p>
      <p className='contactpara'>LinkedIn: <a href="https://www.linkedin.com/in/jeet-dhali-401314360/">linkedin.com/in/jeet-dhali</a></p>
    </div>
    </>
  )
}

export default PortfolioPage