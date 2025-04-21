import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import BookingSummary from './pages/BookingSummary/BookingSummary';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentCancel from './pages/PaymentCancel';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignInButton, setShowSignInButton] = useState(true);
    const [userFirstName, setUserFirstName] = useState("");
    const location = useLocation();

    // Determine whether to show the menu based on the current route
    const showMenu = !(
        location.pathname.startsWith('/product/') || 
        location.pathname === '/booking-summary'
    );

    return (
        <AuthProvider setShowSignInButton={setShowSignInButton} setUserFirstName={setUserFirstName}>
            {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
            <div className="app">
                <Navbar setShowLogin={setShowLogin} showMenu={showMenu} showSignInButton={showSignInButton} userFirstName={userFirstName} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/booking-summary" element={<BookingSummary />} />
                    <Route path="/payment-success" element={<PaymentSuccess />} />
                    <Route path="/payment-cancel" element={<PaymentCancel />} />
                </Routes>
            </div>
            {!location.pathname.startsWith('/product/') && <Footer />}
        </AuthProvider>
    );
};

export default App;