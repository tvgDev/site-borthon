import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Mission from './components/Mission'
import Gallery from './components/Gallery'
import Values from './components/Values'
import Portfolio from './components/Portfolio'
import ProjectsDetail from './components/ProjectsDetail'
import './App.css'

function App() {
  return (
    <Layout>
      <Hero />
      <div className="relative">

        <Portfolio />
        <About />
        <Mission />
        <Gallery />
        <Values />
        <ProjectsDetail />
      </div>
    </Layout>
  )
}

export default App
