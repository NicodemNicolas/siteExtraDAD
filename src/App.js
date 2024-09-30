
import style from './index.css';
import Promo from "./components/promo/Promo.jsx"
import Header from "./components/header/header.jsx"
import Hero from "./components/hero/hero.jsx"
import Footer from "./components/footer/Footer.jsx"
import Sectiors from "./components/sectors/Sectors.jsx"

function App() {
  return (
    <>
      <Promo />
      <Header />
      <Hero />
      <Sectiors />
      <Footer />
    </>
  );
}

export default App;
