import { NavBar } from '../components/navbar'
import { Coffee } from '../components/coffee'
import { ContentBox } from '../components/ContentBox'
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
    </>
  )
}

export default PortfolioPage