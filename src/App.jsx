import React from 'react';
import TopBanner from './components/TopBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Categories from './components/Categories';
import CTA from './components/CTA';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <TopBanner />
      <Header />
      <Hero />
      <Featured />
      <Categories />
      <CTA />
      <About />
      <Newsletter />
      <Footer />
    </>
  );
}