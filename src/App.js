import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import the necessary components
import Header from './components/main/utils/Header'; // Adjust the import path as per your project structure
import './assets/main.css';
import './assets/global.css';
import './assets/tailwind.css'
import Landing from './components/main/Landing';
import Footer from './components/main/utils/Footer';
import Login from './components/main/Login';
import Register from './components/main/Register';
import PaymentGateway from './components/main/PaymentGateway';
import PricingGeneral from './components/main/PricingGeneral';
import About from './components/main/About';
import Contact from './components/main/Contact';
import Privacy from './components/main/Privacy';
import Terms from './components/main/Terms';
import Dashboard from './components/main/utils/Dashboard';
import Switcher from './components/main/utils/Switcher'


function App() {
  return (
    <Router>
      <div className="App">
    
      
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} /> 
          <Route path="/" element={<Landing />} />
          <Route path="/payment" element={<PaymentGateway />} />
          <Route path="/pricing" element={<PricingGeneral/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/switch" element={<Switcher/>} />
          {/* Add other routes here */}
        </Routes>

      </div>
    </Router> 
  );
}

export default App;
