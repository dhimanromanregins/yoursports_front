import React, { useState, useEffect } from 'react';
import Footer from './utils/Footer';
import Header from './utils/Header';
import { useNavigate } from 'react-router-dom';

const PaymentGeneral = () => {
  const [isSchool, setIsSchool] = useState(true);
  const [pricingData, setPricingData] = useState(null);
  const [pricingData_corporate, setPricingData_corporate] = useState(null);

  const toggleMode = () => {
    setIsSchool(!isSchool);
  };

  useEffect(() => {
    fetch('https://yoursportz.in/api/price/general/')
      .then(response => response.json())
      .then(data => setPricingData(data))
      .catch(error => console.error('Error fetching pricing data:', error));
  }, []);

  useEffect(() => {
    fetch('https://yoursportz.in/api/price/corporate/')
      .then(response => response.json())
      .then(data => setPricingData_corporate(data))
      .catch(error => console.error('Error fetching pricing data:', error));
  }, []);

  const navigate = useNavigate();

  const handleChoose = () => {
    navigate('/payment');
  };

  return (
    <>
      <Header />
      <section className="centered-section">
        <h2>Pick a plan that’s right <br />for you</h2>
        <p>Pay as you go service, cancel anytime</p>
        <div className="d-flex justify-center mb-4 bg-btnn add-width ">
          <div className="bg-gray-200 rounded-full px-2 py-2 d-flex items-center ">
            <button
              type='button'
              className={`${isSchool
                ? " bg-white text-gray-600 shadow-md"
                : "bg-gray-200 text-gray-800"
                } rounded-full px-4 py-2 transition-colors duration-500 focus:outline-none school-btn`}
              onClick={toggleMode}
            >
              General
            </button>
            <button
              type='button'
              className={`${!isSchool
                ? "bg-white text-gray-600 shadow-md"
                : "bg-gray-200 text-gray-800 "
                } rounded-full px-4 py-2 transition-colors duration-500 focus:outline-none school-btn `}
              onClick={toggleMode}
            >
              School/Corporate
            </button>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='row m-0 p-0'>
          {isSchool ? (
            <>
              {pricingData && pricingData.map(pricing => (
                <div className='col-md-6 col-lg-3 col-12' key={pricing.id}>
                 
                  <div className="pricing-card pricing-one ">
             
                    <div className='per-unit' dangerouslySetInnerHTML={{ __html: pricing.header  }} />
                     <div dangerouslySetInnerHTML={{ __html: pricing.amount }} />
                    <div className="checkbox-container">
                    <div dangerouslySetInnerHTML={{ __html: pricing.description  }} />
                    </div>
                    <button onClick={handleChoose} className="button">choose</button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className='row p-0 align-items-center justify-content-center'>
                {/* Pricing card for non-school mode */}
                {pricingData_corporate && pricingData_corporate.map(pricing => (
                <div className='col-md-6 col-lg-3 col-12'>
                  <div className="pricing-card ">
                    {/* Pricing details */}
                    <div className='d-flex'>
                    <div dangerouslySetInnerHTML={{ __html: pricing.header  }} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: pricing.amount }} />

                    {/* Features checkboxes */}
                    <div dangerouslySetInnerHTML={{ __html: pricing.description  }} />
                    {/* Choose button */}
                    <button onClick={handleChoose} className="button">choose</button>
                  </div>
                </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <section className='container'>
        <div className='centered-section'>
          <h6>Payment Methods</h6>
          <img src='visa.png' alt='Visa logo' />
          <p>We accept Visa, American Express, Mastercard, Paypal and Crypto</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PaymentGeneral;
