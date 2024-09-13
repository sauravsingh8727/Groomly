import { Footer } from './Footer';
import { Header } from './Header';
import './style.scss';

export default function LandingPage_Template({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
