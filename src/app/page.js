import Hero from './Hero';
import About from './About';
import Blobs from './Blobs';
import Contact from './Contact';
import Nav from './Nav';
import Work from './Work';

export default function Home() {
  return (
    <>

      <Blobs />
      <Nav />

      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}
