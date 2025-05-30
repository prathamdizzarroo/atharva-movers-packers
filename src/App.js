import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="App relative min-h-screen bg-gray-50">
      <AnimatedBackground />
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <About />
          <WhyUs />
          <Services />
          <Process />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
