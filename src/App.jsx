import './App.css'
import Hero from './Components/Hero/Hero'
import Skill from './Components/Skill/Skill'
import About from "./Components/About/About"
import Projects from './Components/Projects/Projects'

function App() {

  return (
    <div className='bg-[#091630]'>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
    </div>
  )
}

export default App
