import Header from './components/Header';
import Hero from './components/Hero';
import PujaList from './components/PujaList';
import BookingForm from './components/BookingForm';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PujaList />
        <BookingForm />
      </main>
    </>
  );
}
