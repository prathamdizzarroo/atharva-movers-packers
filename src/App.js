import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTopButton from './components/ScrollToTopButton';
import LiveChatWhatsApp from './components/LiveChatWhatsApp';

const About = lazy(() => import('./components/About'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const Services = lazy(() => import('./components/Services'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function SkeletonSection() {
  return (
    <div className="animate-pulse py-20 px-4 max-w-5xl mx-auto">
      <div className="h-8 w-1/3 bg-gray-200 rounded mb-6"></div>
      <div className="h-6 w-1/2 bg-gray-100 rounded mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-40 bg-gray-100 rounded" />
        <div className="h-40 bg-gray-100 rounded" />
        <div className="h-40 bg-gray-100 rounded" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App relative min-h-screen bg-gray-50">
      <Helmet>
        <title>Atharva Movers & Packers | Indore, MP - Home, Office, Car Relocation</title>
        <meta name="description" content="Atharva Movers & Packers offers professional packing, moving, and relocation services in Indore, Madhya Pradesh. Trusted, safe, and affordable home and office shifting." />
        <meta name="keywords" content="movers, packers, relocation, home shifting, office shifting, car transport, warehousing, packing, moving company, Indore, MP, Madhya Pradesh, Atharva Movers" />
        <meta property="og:title" content="Atharva Movers & Packers - Indore, MP" />
        <meta property="og:description" content="Professional packing, moving, and relocation services in Indore, Madhya Pradesh. Trusted by 10,000+ customers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atharvamovers.com/indore" />
        <meta property="og:image" content="/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Atharva Movers & Packers - Indore, MP" />
        <meta name="twitter:description" content="Professional packing, moving, and relocation services in Indore, Madhya Pradesh." />
        <meta name="twitter:image" content="/logo512.png" />
      </Helmet>
      <AnimatedBackground />
      <ScrollToTopButton />
      <LiveChatWhatsApp />
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<SkeletonSection />}>
            <About />
            <WhyUs />
            <Services />
            <Process />
            <Testimonials />
            <FAQ />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
