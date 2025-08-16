import { Button } from "./button"
import './navbar.css'

export function NavBar() {

  return (
    <>
    <div className="navbar">
      <nav>
        <div className="left-section">
          <h1>Jeet Dhali</h1>
        </div>
        <div className="right-section">
          <Button>About Me</Button>
          <Button>Contact Me</Button>
          <Button>Skills</Button>
          <Button>Qualification</Button>
        </div>
      </nav>
    </div>
    </>
  )
}

