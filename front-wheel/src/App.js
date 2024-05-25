import About from './components/About';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar'
import AllInone from './components/AllInOne'
import Pricing from './components/Pricing';
import Developer from './components/Developer';
import AuthPage from './components/Login';
function App() {
  return (
    <>
       <Navbar />
       <HeroSection />
       <AllInone/>
       <About />
       <Developer/>
       <Pricing />
       <Footer />
       <AuthPage/>

    </>
  );
}

export default App;
