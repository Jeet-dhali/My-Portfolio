import { Button } from "./button"
import './navbar.css'

export function NavBar() {

  return (
    <>
    <div className="navbar">
      <nav>
        <Button>About Me</Button>
        <Button>Contact Me</Button>
        <Button>Skills</Button>
        <Button>Qualification</Button>
      </nav>
    </div>
    </>
  )
}

