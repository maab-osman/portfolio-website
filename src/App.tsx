import Nav from './components/Nav';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Learning from './components/Learning';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <Hero />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Stack />
      <div className="divider" />
      <Learning />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  );
}
