import Hero from './components/Hero';
import Numbers from './components/Numbers';
import Solutions from './components/Solutions';
import Clients from './components/Clients';
import Sustainability from './components/Sustainability';
import GlobalFootprint from './components/GlobalFootprint';
import CTABanner from './components/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <Numbers />
      <Solutions />
      <Sustainability />
      <GlobalFootprint />
      <CTABanner />
    </>
  );
}
