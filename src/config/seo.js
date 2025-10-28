export const seoConfig = {
  default: {
    title: "Prabakaran - Software Developer",
    description: "Hey! I'm Prabakaran, a Software developer with a focus on Mobile App Development along with having knowledge of full-stack development.",
    keywords: "Prabakaran, Software developer, mobile app developer, React Native, full-stack developer, India, portfolio",
    author: "Prabakaran",
    url: "https://www.prabakaran.site",
    image: "https://www.prabakaran.site/profile.png",
    type: "website"
  },

  home: {
    title: "Prabakaran - Software Developer & Mobile App Developer | Home",
    description: "Hi! I'm Prabakaran, a passionate Software developer specializing in Mobile App Development.",
    keywords: "Prabakaran, Software developer, mobile app developer, React Native, portfolio, India, home"
  },

  about: {
    title: "Prabakaran - Software Developer & Mobile App Developer",
    description: "Learn more Prabakaran, a passionate Software developer with expertise in mobile app development.",
    keywords: "Prabakaran, Software developer background, mobile app developer experience"
  },

  skills: {
    title: "Skills & Technologies - Prabakaran | Software Developer",
    description: "Explore Prabakaran's technical skills including React Native, JavaScript, Node.js, and mobile app development.",
    keywords: "Prabakaran skills, React Native developer, JavaScript developer, mobile app development skills"
  }
};

// Structured data for different sections
export const structuredData = {
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prabakaran",
    "jobTitle": "Software Developer",
    "description": "A passionate Software Developer specializing in Mobile App Development with React Native and full-stack technologies.",
    "url": "https://www.prabakaran.site",
    "image": "https://www.prabakaran.site/profile.png",
    "sameAs": [
      "https://github.com/Praba0272",
      "https://linkedin.com/in/prabakaran0272"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "Mobile App Development",
      "React Native",
      "Full-Stack Development",
      "JavaScript",
      "Node.js",
      "Mobile Applications",
      "Web Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Computer Science and Engineering"
    }
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Prabakaran Portfolio",
    "description": "Personal portfolio website showcasing Prabakaran's skills, experience, and projects in software development.",
    "url": "https://www.prabakaran.site",
    "author": {
      "@type": "Person",
      "name": "Prabakaran"
    },
    "publisher": {
      "@type": "Person",
      "name": "Prabakaran"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.prabakaran.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
};

// Meta tags configuration for different sections
export const getMetaTags = (section = 'default') => {
  const config = seoConfig[section] || seoConfig.default;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    author: config.author,
    url: config.url,
    image: config.image,
    type: config.type,
    twitterHandle: config.twitterHandle,
    siteName: config.siteName
  };
};
