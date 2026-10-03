import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Timer } from './components/Timer';
import { Benefits } from './components/Benefits';
import { Details } from './components/Details';
import { Views } from './components/Views';
import { Workflow } from './components/Workflow';
import { CTA, Footer } from './components/Footer';
import { ThemeProvider } from './theme/ThemeProvider';

function LandingPage() {
  return <><a className="skip-link" href="#main-content">Skip to main content</a><Header /><main id="main-content" tabIndex="-1"><div id="top"><Hero /></div><div className="container"><Timer /></div><Benefits /><Workflow /><Views /><Details /><CTA /></main><Footer /></>;
}

export default function App() {
  return <ThemeProvider><LandingPage /></ThemeProvider>;
}
