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
import AdminPanel from './components/AdminPanel';

export default function App() {
  // Simple routing logic: check if the URL path is '/admin'
  const isAdminPage = window.location.pathname === '/admin';

  if (isAdminPage) {
    return <AdminPanel />;
  }

  return (
    <div className="bg-[#fbf7ee] text-[#2e211b] font-sans antialiased">
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
