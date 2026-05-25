import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Areas from './components/Areas';
import AboutMe from './components/AboutMe';
import Approach from './components/Approach';
import Details from './components/Details';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'all' | 'email' | 'messenger'>('all');

  const openModal = (mode: any = 'all') => {
    if (mode === 'email' || mode === 'messenger') {
      setModalMode(mode);
    } else {
      setModalMode('all');
    }
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      <Header onOpenContact={openModal} />
      <Hero onOpenContact={openModal} />
      <AboutMe onOpenContact={openModal} />
      <Areas />
      <Approach onOpenContact={openModal} />
      <Details />
      <Footer onOpenContact={openModal} />
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} mode={modalMode} />
    </div>
  );
}
