import './App.css'
import Blog from './components/Blog'
import Features from './components/Features'
import Footer from './components/Footer'
import Framework from './components/Framework'
import Hero from './components/Hero'
import Install from './components/Install'
import Navbar from './components/Navbar'
import Premise from './components/Premise'
import Pricing from './components/Pricing'
import Productive from './components/Productive'
import Support from './components/Support'
import Developer2 from './components/Developer2'
import Connect2 from './components/Connect2'

function App() {

  return (
    <>
      <div>
    <Navbar />
    <Hero />
    <Install />
    <Developer2/>
    <Support />
    <Productive />
    <Framework />
    <Premise />
    <Features />
   <Connect2 />
    <Pricing />
    <Blog />
    <Footer /> 
      </div>
    </>
  )
}

export default App
