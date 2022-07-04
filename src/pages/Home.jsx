import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { ArrowDown } from 'phosphor-react'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Projectss from '../components/Projects'
import Contact from '../components/Contact'

function Home() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container">
        <div className="bg"></div>

        <Header />

        <div className='bio-container'>
          <div className="bio-wrapper" data-aos="fade-down">
            <div className="about-me">
              <h1>
                FERNANDO
              </h1>
              <span>
                FRONT END DEVELOPER
              </span>
            </div>
            <ArrowDown size={40} />
          </div>
        </div>
      </div>

      <AboutMe />

      <div className="bg-2"></div>

      <Projectss />

      <Contact />
    </>
  )
}

export default Home
