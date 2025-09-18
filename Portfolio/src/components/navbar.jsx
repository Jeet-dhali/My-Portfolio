import { Button } from "./button"
import './navbar.css'

export function NavBar({introRef, skillsRef, contactRef, projectsRef, educationRef}) {

  return (
    <>
    <div className="navbar">
      <nav>
        <div className="left-section">
          <h1>Jeet Dhali</h1>
        </div>
        <div className="right-section">
          <Button onClick={() => {introRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'})}}>About Me</Button>
          <Button onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth' , block: 'center'})}}>Contact Me</Button>
          <Button onClick={() => {skillsRef.current?.scrollIntoView({behavior: 'smooth' , block: 'center'})}}>Skills</Button>
          <Button onClick={() => {projectsRef.current?.scrollIntoView({behavior: 'smooth' , block: 'center'})}}>Projects</Button>
          <Button onClick={() => {educationRef.current?.scrollIntoView({behavior: 'smooth' , block: 'center'})}}>Education</Button>
        </div>
      </nav>
    </div>
    </>
  )
}

