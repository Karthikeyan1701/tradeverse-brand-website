import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyTradeverse from './components/WhyTradeverse';
import Quality from './components/Quality';
import Logistics from './components/Logistics';
import UKMarket from './components/UKMarket';
import BulkOrders from './components/BulkOrders';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Products />
        <WhyTradeverse />
        <Quality />
        <Logistics />
        <UKMarket />
        <BulkOrders />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
