import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Why } from './components/Why';
import { Timer } from './components/Timer';
import { Benefits } from './components/Benefits';
import { SyncShowcase } from './components/SyncShowcase';
import { Workflow } from './components/Workflow';
import { Views } from './components/Views';
import { Details } from './components/Details';
import { Roadmap } from './components/Roadmap';
import { FAQ } from './components/FAQ';
import { CTA, Footer } from './components/Footer';
import { ThemeProvider } from './theme/ThemeProvider';

function LandingPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" tabIndex="-1">
        <div id="top"><Hero /></div>
        <Why />
        <div className="container"><Timer /></div>
        <Benefits />
        <SyncShowcase />
        <Workflow />
        <Views />
        <Details />
        <Roadmap />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return <ThemeProvider><LandingPage /></ThemeProvider>;
}
