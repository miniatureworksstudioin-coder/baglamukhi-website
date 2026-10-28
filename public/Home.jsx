import Hero from '../components/Hero';
import About from '../components/About';
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
      {/* THIS IS THE ULTIMATE TEST */}
      <div className="bg-green-500 text-white text-center py-20 text-6xl font-bold">
        HOME.JSX IS WORKING!
      </div>

      <Hero />
      <About />
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
