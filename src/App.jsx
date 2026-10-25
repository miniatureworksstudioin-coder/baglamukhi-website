import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PujaList from './components/PujaList';
import Process from './components/Process';
import Temple from './components/Temple';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#fbf7ee] text-[#2e211b] font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <PujaList />
        <Process />
        <Temple />
        <Gallery />
        <Reviews />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
