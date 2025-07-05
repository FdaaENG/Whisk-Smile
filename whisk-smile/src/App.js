import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BirthdayPage from './pages/BirthdayPage';
import CakeDetails from './pages/CakeDetails';
import CookieDetails from './pages/CookieDetails';
import CookiesPage from './pages/CookiesPage';
import CakePage from './pages/CakePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import CartPage from './pages/CartPage';
import CompleteCheckout from './pages/CompleteCheckout'; 


function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="/cake/:id" element={<CakeDetails />} />
        <Route path="/cookie/:id" element={<CookieDetails />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/cakes" element={<CakePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/checkout" element={<CartPage />} />
<Route path="/place-order" element={<CompleteCheckout />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
