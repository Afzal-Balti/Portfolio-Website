import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SpotHighlight from './components/SpotHighlight'

export default function App() {
  return (
    <>
      <SpotHighlight />
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
