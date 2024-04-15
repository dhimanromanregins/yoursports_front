import React from 'react';
import Header from './utils/Header';
import Footer from './utils/Footer';
const PaymentGateway = () => {
  return (
    <>
        <Header />
      <div className='full-back-wrap py-3'>
        <section className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-8 col-12'>
              <div className='payment-first my-3'>
                <h2>
                  Let’s Make Payment
                </h2>
                <h6 className='pb-3'>To start your subscription, input your card details to make payment.
                  You will be redirected to your banks authorization page . </h6>
                <form className='payment-card mt-5'>
                  <div class="form-group ">
                    <label for="cardHolderName">Cardholder’s Name</label>
                    <input type="text" id="cardHolderName" name="cardHolderName" required />
                  </div>
                  <div class="form-group">
                    <label for="cardNumber">Card Number</label>
                    <div class="card-number-container">
                      <input type="text" id="cardNumber" name="cardNumber" required />
                      <img class="card-image" src="mastercard 1.png" alt="Visa Card Image" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="expiryDate">Expiry </label>
                      <input type="text" id="expiryDate" name="expiryDate" required />
                    </div>
                    <div class="form-group col-6">
                      <label for="cvc">CVC</label>
                      <input type="text" id="cvc" name="cvc" required />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="discountCode" class="discount-code">Discount Code</label>
                    <div class="discount-code-input">
                      <input type="text" id="discountCode" name="discountCode" />
                      <span class="apply-text">Apply</span>
                    </div>
                  </div>

                  <button className='btn btn-success payment-button' type="submit ">Pay</button>
                </form>

              </div>
            </div>
            <div className='col-md-6 col-lg-4 col-12'>
              <div class="payment-amnt-crd my-5" >

                <h4>You’re paying,</h4>
                <h2>₹25,000</h2>
                <div className='pt-5 d-flex justify-content-between'>
                <div>
                <h4 >Per member, per Year </h4>
                  <span>
                    Includes 30 Free Live Matches
                  </span>
                </div>
                <div>
                  <h3 className='amnt'>₹25,000 </h3>
                </div>
                </div>
                <div className=' d-flex justify-content-between sc-space'>
                <div>
                <h4 > Discounts & Offers</h4>
                
                </div>
                <div>
                  <h3 className='amnt'>₹0,00 </h3>
                </div>
                </div>
                <hr></hr>
                <div className='pt-4 d-flex justify-content-between'>
                <div>
                <h4 >Tax </h4>
                
                </div>
                <div>
                  <h4 className='amnt'>₹ 0.00 </h4>
                </div>
                </div>
                <div className='pt-4 d-flex justify-content-between'>
                <div>
                <h4 >Total </h4>
                
                </div>
                <div>
                  <h4 className='amnt'>₹ 0.00 </h4>
                </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>


  );
};

export default PaymentGateway;
