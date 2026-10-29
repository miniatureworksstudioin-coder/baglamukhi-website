import Hero from '../components/Hero';
import About from '../components/About';
import PanchangWidget from '../components/PanchangWidget'; 
import PujaList from '../components/PujaList';
import AboutPuja from '../components/AboutPuja';
import Process from '../components/Process';
import Temple from '../components/Temple';
import Gallery from '../components/Gallery';
import VideoGallery from '../components/VideoGallery'; 
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import BookingForm from '../components/BookingForm';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <PanchangWidget /> 
      <PujaList />
      <AboutPuja />
      <Process />
      <Temple />
      <Gallery />
      <VideoGallery /> 
      <Reviews />
      <FAQ />
      <BookingForm />
    </div>
  );
}
