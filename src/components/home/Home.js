import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './Home.css'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Particles from 'react-tsparticles'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/praba.jpg'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <>
      <Helmet>
        <title>Prabakaran - Software Developer</title>
        <meta name="description" content="Learn more about Prabakaran, a passionate software developer with expertise in web app development, React, and full-stack technologies. Based in Tamil Nadu, India." />
        <meta name="keywords" content="Prabakaran, software developer background, web app developer experience, React JS developer" />
        <meta property="og:title" content="Prabakaran - Software Developer" />
        <meta property="og:description" content="Learn more Prabakaran, a passionate software developer with expertise in web app development, React, and full-stack technologies." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://www.prabakaran.site/praba.jpg" />
        <meta name="twitter:title" content="Prabakaran - Software Developer" />
        <meta name="twitter:description" content="Learn more Prabakaran, a passionate software developer with expertise in web app development." />
        <meta name="twitter:image" content="https://www.prabakaran.site/praba.jpg" />

        {/* Structured Data for Person */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Prabakaran",
            "jobTitle": "Software Developer",
            "description": "A passionate software developer with expertise in web app development, React, and full-stack technologies.",
            "url": "https://www.prabakaran.site",
            "image": "https://www.prabakaran.site/praba.jpg",
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Sethu Institue of Technology",
              "degree": "B.E"
            },
            "knowsAbout": [
              "React.js",
              "Next.js",
              "Angular",
              "JavaScript",
              "Web App Development",
              "MERN-Stack Development",
              "Full-Stack Development"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "knowsLanguage": "Tamil, English",
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Software Developer",
              "occupationLocation": {
                "@type": "Place",
                "name": "India"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="home-wrapper">
        <div className="home">
          <Particles className="particles" params={config.particles} />
          <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
            <img
              className="profile"
              alt="prabakaran profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Prabakaran</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'I like to develop new things',
                    'I love learning new tech.',
                    'I love meeting new people.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '_',
                  delay: 100,
                }}
              />
            </h1>
            <Bounce cascade>
              <div className="resume-container">
                <a
                  href="https://drive.google.com/file/d/12b69RJV21Lw55Bt9uF3SIW91qEnKi-Hy/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Prabakaran's resume"
                >
                  Download Resume
                </a>
              </div>
            </Bounce>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
                aria-label="Scroll to about section"
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default Home
