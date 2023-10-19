import './App.css'
import Blog from './components/Blog'
import Dev_Tabs from './components/Dev_Tabs'
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
import Connect from './components/connect'
import Developer from './components/developer'

function App() {

  return (
    <>
      <div>
    <Navbar />
    <Hero />
    <Install />
    <Developer/>
    <Support />
    <Productive />
    <Framework />
    <Premise />
    <Features />
    <Connect />
    <Pricing />
    <Blog />
    <Footer /> 
      </div>
    </>
  )
}

export default App
