import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, Phone, Github, Menu, X, Quote } from 'lucide-react';
import photo from "./Photo.jpg";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const skills = {
    'Back-end': [
      { name: 'PHP Development', level: 90 },
      { name: 'Server-side Scripting', level: 85 },
      { name: 'C++', level: 60 },
      { name: 'MySQL', level: 80 }
    ],
    'Web Technologies': [
      { name: 'HTML/CSS', level: 75 },
      { name: 'JavaScript', level: 65 },
      { name: 'SEO', level: 60 },
      { name: 'Adobe After Effects', level: 50 }
    ]
  };

  const experience = [
    {
      title: 'Web Developer',
      company: 'Elevatus Pvt Ltd',
      period: 'Sept 2021 - Present',
      description: [
        'Develop and maintain web applications using PHP and MySQL',
        'Create server-side logic and database interactions for company web solutions',
        'Assist in implementing basic front-end designs and functionality',
        'Support ongoing web application maintenance and troubleshooting',
        'Collaborate with team members to deliver reliable software solutions'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Aumento Performers Solutions PVT. LTD.',
      period: 'July 2018 - Aug 2021',
      description: [
        'Implemented server-side web application features using PHP',
        'Developed database-driven web applications with MySQL',
        'Worked closely with clients to understand and translate requirements into technical solutions',
        'Maintained and optimized existing web applications',
        'Supported front-end development with basic JavaScript and HTML/CSS implementations'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      school: 'Albertian Institute of Science and Technology',
      period: '2014 - 2018',
      location: 'Kalamassery, Kerala'
    }
  ];

  const projects = [
    {
      name: 'Delhi Mar Thoma Public School Website',
      link: 'https://www.delhimarthomaschoolgzb.org',
      description: [
        'Developed a responsive, SEO-optimized educational website',
        'Created user-friendly navigation with cross-browser compatibility',
        'Implemented optimal design responsiveness'
      ]
    },
    {
      name: 'Boanerges Avenues Website',
      link: 'https://www.boanergesavenues.com',
      description: [
        'Created a custom real estate website with intuitive user interface',
        'Developed a high-performance, responsive web solution',
        'Utilized HTML5, CSS3, and JavaScript'
      ]
    },
    {
      name: 'Text Detection and Recognition in Imagery',
      description: [
        'Developed an advanced text recognition system',
        'Implemented complex image processing algorithms',
        'Used technologies: Python, OpenCV, Machine Learning Algorithms'
      ]
    }
  ];

  const clientAppreciations = [
    {
      name: "Company Management",
      company: "Elevatus Pvt Ltd",
      quote: "Habeeb has been instrumental in developing robust web solutions that meet our complex business requirements.",
      role: "Management Team"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ section }) => (
    <button
      onClick={() => {
        document.getElementById(section.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }}
      className={`transition-colors duration-300 ${
        activeSection === section.toLowerCase()
          ? 'text-blue-400'
          : 'text-gray-300 hover:text-blue-400'
      }`}
    >
      {section}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Habeeb.</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map(section => (
                <NavLink key={section} section={section} />
              ))}
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64' : 'max-h-0'
          }`}>
            <div className="py-4 space-y-4">
              {['Home', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map(section => (
                <div key={section} className="px-4">
                  <NavLink section={section} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Hi, I'm Habeeb Khassin
                <div className="text-xl md:text-2xl text-blue-400 mt-2">
                  PHP Developer | Full Stack Web Developer
                </div>
              </h1>
              <p className="text-gray-300">
                Dedicated Software Developer with 5+ years of experience in web application development, 
                specializing in back-end technologies and server-side programming. 
                Proven expertise in PHP, MySQL, and full-stack web development with a strong 
                foundation in creating functional and efficient web solutions.
              </p>
              <div className="flex gap-4">
              <a href="https://drive.google.com/uc?export=download&id=1MqPdbBFSIszgr5bvhzTCODiUJ468verC" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Download CV
                  </button>
                </a>
                <button className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500/10 transition-colors">
                  Let's Connect
                </button>
              </div>
              <div className="flex space-x-6">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/habeeb-khassin-172bbb2b0" },
                  { Icon: Mail, href: "mailto:habeebkhassin@gmail.com" },
                  { Icon: Phone, href: "tel:+916282609167" },
                  { Icon: Github, href: "#" }
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img 
                  src={photo}
                  alt="Habeeb Khassin Profile Photo"
                  className="rounded-full w-full h-full object-cover border-4 border-blue-500/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="border border-blue-500/30 rounded-lg p-6 bg-blue-500/5 hover:border-blue-500 transition-colors">
                <div className="text-blue-400 mb-2">{item.period}</div>
                <div className="text-xl font-semibold mb-2">{item.title}</div>
                <div className="text-gray-400 mb-4">{item.company}</div>
                <ul className="space-y-2">
                  {item.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-blue-950/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl mb-6 capitalize">{category}</h3>
                <div className="space-y-6">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-blue-500/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notable Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-blue-500/30 rounded-lg p-6 bg-blue-500/5 hover:border-blue-500 transition-colors">
                <div className="text-xl font-semibold mb-2">{project.name}</div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 mb-4 block"
                  >
                    {project.link}
                  </a>
                )}
                <ul className="space-y-2">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-blue-950/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {education.map((item, index) => (
              <div key={index} className="border border-blue-500/30 rounded-lg p-6 bg-blue-500/5 hover:border-blue-500 transition-colors">
                <div className="text-blue-400 mb-2">{item.period}</div>
                <div className="text-xl font-semibold mb-2">{item.degree}</div>
                <div className="text-gray-400 mb-2">{item.school}</div>
                <p className="text-gray-300">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-950/30">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 
                  focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 
                  focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 
                focus:outline-none focus:border-blue-500 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-blue-500/5 border border-blue-500/30 rounded-lg p-3 
                focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 px-8 py-3 rounded-lg hover:bg-blue-600 
                transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          © {new Date().getFullYear()} Habeeb Khassin. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
