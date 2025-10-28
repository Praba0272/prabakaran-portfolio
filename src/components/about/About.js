import React from 'react'
import { Helmet } from 'react-helmet-async'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Coding from '../../lottie/coding.json'
import DisplayLottie from '../DisplayLottie'

const About = () => {
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

      <Section title="About">
        <div className="about-content">
          <Fade duration={1000}>
            <div className="about-text">
              <h2>Who am I?</h2>
              <p>
                I'm Prabakaran{' '}
                <span role="img" aria-label="lightning">
                  😄
                </span>{' '}
              </p>
              <p>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                Hey! I'm a software developer with a focus on Web App Development along with having knowledge of full-stack development. I am passionate about learning new things from new people.
              </p>
              <p>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I have done <b>B. E</b> from <b>Sethu Institue of Technology.</b>
              </p>
              <p>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I work with React.js, Next.js, javascript.
              </p>
              <div className="typewriter">
                <p className="typewriter-start">
                  <span role="img" aria-label="lightning">
                    ⚡
                  </span>{' '}
                  I love
                </p>
                <Typewriter
                  options={{
                    strings: [
                      'learning new technologies',
                      'solving complex problems',
                      'fixing hard-to-fix bugs',
                      'trying new things',
                      'collaborating with others',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <p>.</p>
              </div>
              <p>
                Since 2020 - I've spent my time seeking and learning new
                technologies in Web App Development. This has led to me
                working on some amazing world-class{' '}
                <Link
                  className="textLink"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  aria-label="View projects section"
                >
                  projects
                </Link>
                , worked at some{' '}
                <Link
                  className="textLink"
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={500}
                  aria-label="View experience section"
                >
                  amazing places
                </Link>
                , and worked with some great people.
              </p>
              <div className="location-wrapper">
                <svg
                  className="octicon octicon-location"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
                <p>Tamil Nadu, India</p>
              </div>
            </div>
          </Fade>
          {/* <Skills /> */}
          <div className="lottie-icon">
            <DisplayLottie animationData={Coding} />
          </div>
        </div>
      </Section>
    </>
  )
}

export default About
