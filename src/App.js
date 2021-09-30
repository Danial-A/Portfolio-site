import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import AboutSection from './components/AboutSection';





function App() {
 
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default App;
