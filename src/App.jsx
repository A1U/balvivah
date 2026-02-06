import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'
import b1 from './assets/images/b1.png'
import b2 from './assets/images/b2.png'
import b3 from './assets/images/b3.png'
import b4 from './assets/images/b4.png'
import b5 from './assets/images/b5.png'
import b6 from './assets/images/b6.png'
import b7 from './assets/images/b7.png'
import b8 from './assets/images/b8.png'
import b9 from './assets/images/b9.png'
import b10 from './assets/images/b10.png'
// import Home from './pages/home'
import TopBar from './component/Navbar/TopBar'
import Bvmr from './Bvmr'
import MainNavbar from './component/Navbar/mainNavbar'
import Home from './pages/home'
import AboutHero from './pages/about'
import Champings from './component/Public/champings'
import Public_link from './component/Public/public_link'
import Public_dashboard from './component/Public/public_dashboard'
import Figure_at_glans from './pages/figure_at_glans'
import SuccesStory from './pages/succesStory'
import MediaGallery from './pages/Media/mediaGallery'
import VideosTab from './pages/Media/pages/videos'
import Campingts from './pages/Media/pages/campingts'
import EventsTab from './pages/Media/pages/events'
import PublicationsTab from './pages/Media/pages/publication'
import Login from './component/login'
import Faq from './pages/Resourse/faqs'
// import Pcma from './pages/Resourse/PCMA.JSX'
import SupremeCourt from './pages/Resourse/supremeCourt'
import Pcma from './pages/Resourse/pcmaa'
import Clpra from './pages/Resourse/clpra'
import LegalDisclaimer from './pages/legalDisclaimer'
import PrivacyPolicy from './pages/privacyPolicy'
import ReportChilMarriage from './pages/report_child_marriage'
import { LanguageProvider } from './context/languageContext'
import DCPUTable from './pages/capacityBuilding/other'
// import Pcma from './pages/Resourse/pcma'

function App() {

  return (
    <>
 
      <TopBar />
      <Bvmr />
      
      <MainNavbar   />

      <main id="main-content">
      
        <Routes>
   
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutHero />} />
          <Route path='/Campaigns' element={<Champings />} />
          <Route path='/public_link' element={<Public_link />} />
          <Route path='/public_dashboard' element={<Public_dashboard />} />
          <Route path='/figer_at_glans' element={<Figure_at_glans />} />
          <Route path='/success_story' element={<SuccesStory />} />
          <Route path='/photos' element={<MediaGallery />} />
          <Route path='/videos' element={<VideosTab />} />
          <Route path='/campings' element={<Campingts />} />
          <Route path='/events' element={<EventsTab />} />
          <Route path='/publication' element={<PublicationsTab />} />

          <Route path='/login' element={<Login />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/pcma' element={<Pcma />} />

          <Route path='/supreme-court-judgement-2024' element={<SupremeCourt />} />


          <Route path='/clpra' element={<Clpra />} />


          <Route path='/jj-act-2015' element={<Clpra />} />
          <Route path='/legal-disclaimer' element={<LegalDisclaimer />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/report_chile_marriage' element={<ReportChilMarriage />} />
                                <Route path='/other' element={<DCPUTable />} />

                



        </Routes>
      </main>

      {/* Government Logos Section */}
      <section className="government-logos-section">
        <Container>
          <div className="government-logos-container">
            <div className="government-logo-item">
              <img src={b1} alt="Sabka Saath Sabka Vikas" className="government-logo-img" />
            </div>
            <div className="government-logo-item">
              <img src={b2} alt="Beti Bachao Beti Padhao" className="government-logo-img" />
            </div>
            <div className="government-logo-item">
              <img src={b3} alt="POSHAN Abhiyaan" className="government-logo-img" />
            </div>
            <div className="government-logo-item">
              <img src={b4} alt="Pradhan Mantri Matru Vandana Yojana" className="government-logo-img" />
            </div>
            <div className="government-logo-item">
              <img src={b5} alt="India.gov.in" className="government-logo-img" />
            </div>
            <div className="government-logo-item">
              <img src={b6} alt="MyGov" className="government-logo-img" />
            </div>
            <div className="government-logo-item">
              <img src={b7} alt="Rashtriya Mahila Kosh" className="government-logo-img" />
            </div>
            <div className="government-logo-item">
              <img src={b8} alt="CARA" className="government-logo-img" />
            </div>
            <div className="government-logo-item">
              <img src={b9} alt="National Commission for Women" className="government-logo-img" />
            </div>
            <div className="government-logo-item">
              <img src={b10} alt="NCPCR" className="government-logo-img" />
            </div>
          </div>
        </Container>
      </section>

      <Footer />

    </>
  )
}

export default App
