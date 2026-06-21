import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { Reviews } from './components/Reviews'
import { LoanPrograms } from './components/LoanPrograms'
import { AboutProcess } from './components/AboutProcess'
import { Credentials } from './components/Credentials'
import { ContactFaq } from './components/ContactFaq'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Reviews />
        <LoanPrograms />
        <AboutProcess />
        <Credentials />
        <ContactFaq />
      </main>
      <Footer />
    </div>
  )
}

export default App
