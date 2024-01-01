import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Work from "./components/Work"
function App() {
  return (
    <>
      <Navbar/>
      <div id="home">
      <Hero/>
      </div>
      <div id="about">
      <About/>
      </div>
      <div id="skills">
      <Skills/>
      </div>
      <div id="projects">
      <Work/>
      </div>
      <div id="contact">
      <Contact/>
      </div>
      <div id="footer">
      <Footer/>
      </div>
    </>
  )
}

export default App
