
import React, { useState, useEffect } from 'react';
import { User, Code, Github, Linkedin, Mail, MapPin, Phone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  const skills = [
    { name: 'Java', level: 73 },
    { name: 'JavaScript', level: 78 },
    { name: 'HTML/CSS', level: 84 },
    { name: 'Spring Boot', level: 45 },
    { name: 'React', level: 76 },
    { name: 'Node.js', level: 70 },
    { name: 'SQL', level: 80 },
    { name: 'Git', level: 70 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-lg sm:text-xl">
              PK
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-white hover:text-sky-400 transition-colors duration-300 text-sm lg:text-base ${
                    activeSection === item.toLowerCase() ? 'text-sky-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 animate-slide-in-left order-2 lg:order-1">
                <div className="space-y-2">
                  <p className="text-sky-400 text-base sm:text-lg">👋 Hi I'm Pradeep Kumar</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    A FULL-STACK
                    <br />
                    <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">JAVA DEVELOPER</span>
                  </h1>
                  <p className="text-gray-300 text-base sm:text-lg max-w-lg">
                    As a dedicated professional with a passion for Java development, I bring hands-on experience in full-stack technologies throughout my academic journey.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-sky-500 hover:bg-sky-600 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    onClick={() => window.open('#', '_blank')}
                  >
                    RESUME
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center animate-slide-in-right order-1 lg:order-2">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-1 shadow-2xl animate-float">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                      <img 
                        src="/uploads/c37c01af-d2a1-4523-8dad-3c38a2108a13.png" 
                        alt="Pradeep Kumar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-sky-400 rounded-full flex items-center justify-center shadow-lg">
                    <Code size={20} className="text-white sm:hidden" />
                    <Code size={32} className="text-white hidden sm:block" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-sky-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl">Background</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4 text-sm sm:text-base">
                <p>
                  I am a third-year Computer Engineering student with a keen interest in Java development and full-stack technologies. My journey in software development has been driven by curiosity and a passion for creating innovative solutions.
                </p>
                <p>
                  Currently pursuing my B.Tech in Computer Science at Gurugram University, I've built a strong foundation in programming fundamentals and am actively expanding my expertise in modern development frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4 text-sm sm:text-base">
                <div>
                  <h4 className="text-sky-400 font-semibold">B.Tech, Computer Science and Engineering</h4>
                  <p>Gurugram University, Haryana</p>
                  <p className="text-sm opacity-80">2022-2026</p>
                </div>
                <div>
                  <h4 className="text-sky-400 font-semibold">CBSE Schooling</h4>
                  <p>Strong academic foundation with focus on mathematics and sciences</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-sky-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                  <span className="text-sky-400 text-sm sm:text-base">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 sm:h-3">
                  <div 
                    className="bg-gradient-to-r from-sky-400 to-blue-500 h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-center animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-sky-400 text-lg sm:text-xl">Languages</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm sm:text-base">
                <p>Java, JavaScript, HTML, CSS</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-center animate-fade-in">
              <CardHeader>
                <CardTitle className="text-sky-400 text-lg sm:text-xl">Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm sm:text-base">
                <p>Spring Boot, React, Node.js</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-center animate-slide-in-right sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-sky-400 text-lg sm:text-xl">Tools</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm sm:text-base">
                <p>VS Code, IntelliJ IDEA, Git, SQL</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-sky-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 group hover:transform hover:scale-105 transition-all duration-300 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-white text-lg sm:text-xl">Weather App</CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base">
                  Real-time Weather Data Application
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4 text-sm sm:text-base">
                <p>
                  Built using HTML, CSS, JavaScript, and React. Fetches and displays real-time weather data with an intuitive user interface and responsive design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs sm:text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm">CSS</span>
                </div>
                <Button 
                  variant="outline"
                  className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white w-full sm:w-auto text-sm sm:text-base"
                  onClick={() => window.open('https://github.com/pradeepkumar823', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 group hover:transform hover:scale-105 transition-all duration-300 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-white text-lg sm:text-xl">E-Commerce Website</CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base">
                  Full-Stack E-Commerce Platform (Not Complete-Working)
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4 text-sm sm:text-base">
                <p>
                  Complete e-commerce solution with React frontend and Java Spring Boot backend. Features include user authentication, product management, and secure payment integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs sm:text-sm">Spring Boot</span>
                  <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs sm:text-sm">React</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs sm:text-sm">SQL</span>
                </div>
                <Button
                  variant="outline"
                  className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white w-full sm:w-auto text-sm sm:text-base"
                  onClick={() => window.open('https://github.com/pradeepkumar823', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
            <div className="w-20 h-1 bg-sky-400 mx-auto rounded-full"></div>
          </div>

          <Card className="bg-white/5 backdrop-blur-lg border-white/10 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-white text-xl sm:text-2xl">Software Development Intern</CardTitle>
              <CardDescription className="text-sky-400 text-lg sm:text-xl">Micro IT</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4 text-sm sm:text-base">
              <p>
                Currently gaining hands-on experience in Java development through real-world projects and team collaboration. 
                Working on enterprise-level applications and learning industry best practices for software development workflows.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 pl-4">
                <li>Developing Java applications using Spring Boot framework</li>
                <li>Collaborating with senior developers on project planning and implementation</li>
                <li>Learning agile development methodologies and version control practices</li>
                <li>Contributing to code reviews and quality assurance processes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-sky-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">Phone</p>
                      <p className="text-gray-300 text-sm sm:text-base break-all">7870682477</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">Email</p>
                      <p className="text-gray-300 text-sm sm:text-base">pksinghgolu76310@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white"
                    onClick={() => window.open('https://github.com/pradeepkumar823', '_blank')}
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                    onClick={() => window.open('https://www.linkedin.com/in/kumarpradeep23/', '_blank')}
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm sm:text-base resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white text-sm sm:text-base"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-t from-gray-900 to-gray-800 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Brand Section */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">PK</span>
                </div>
                <span className="text-white font-bold text-lg sm:text-xl">Pradeep Kumar</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Full-Stack Java Developer passionate about creating innovative solutions and building amazing web experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-sky-400 transition-colors duration-300 text-xs sm:text-sm text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Technologies</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li>Java & Spring Boot</li>
                <li>React & JavaScript</li>
                <li>HTML & CSS</li>
                <li>SQL & Git</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Mail size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-xs sm:text-sm break-all">pksinghgolu76310@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={14} className="text-sky-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs sm:text-sm">7870682477</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={14} className="text-sky-400 flex-shrink-0" />
                  <span className="text-gray-400 text-xs sm:text-sm">Gurugram, Haryana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/10 space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-sky-400 hover:bg-sky-400/10 w-8 h-8 sm:w-10 sm:h-10"
                onClick={() => window.open('https://github.com/pradeepkumar823', '_blank')}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 w-8 h-8 sm:w-10 sm:h-10"
                onClick={() => window.open('https://www.linkedin.com/in/kumarpradeep23/', '_blank')}
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-sky-400 hover:bg-sky-400/10 w-8 h-8 sm:w-10 sm:h-10"
                onClick={() => window.open('mailto:pksinghgolu76310@gmail.com')}
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm text-center">
              <span>© 2024 Pradeep Kumar. Made with</span>
              <Heart size={14} className="text-red-600 fill-current" />
              <span>and lots of ☕</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
