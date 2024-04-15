import React from 'react';
import Footer from './utils/Footer';
import Header from './utils/Header';
function Terms() {
    return (
        <>
        
        <Header />

            <section className='container'>
                <div className='row m-0 p-0 '>
                    <div className='col-md-8 col-lg-8 col-12 px-2 pd-56 '>
                        <h6 className='our-term mb-4'>Term and condition</h6>
                      
                        <div className='d-flex mb-3'>
                            <div className='my-1 mx-2'>
                                <img  src='circ.png'></img>
                            </div>
                            <div className='term-text'>
                                <h5>Term and condition:  </h5>
                                <p className='ps-2'>YourSportz app prohibits nudity, violence, or pornography content; violators will be banned.
    Users are solely responsible for posted content; YourSportz reserves the right to remove inappropriate content. 
    YourSportz isn't liable for technical issues; prompt resolution will be attempted. 
    Terms are subject to change; users will be notified of updates.
                                    .</p>
                            </div>

                        </div>
                        <div className='d-flex mb-3'>
                            <div className='my-1 mx-2'>
                                <img src='circ.png'></img>
                            </div>
                            <div className='term-text'>
                                <h5>Privacy Policy:  </h5>
                                <p className='ps-2'>Cookies enhance user experience by remembering preferences.
                                    Types include essential, analytics, and advertising cookies.
                                    Users can manage cookies in app settings; disabling may affect functionality.
                                    .</p>
                            </div>

                        </div>
                        <div className='d-flex mb-3 '>
                            <div className='my-1 mx-2'>
                                <img  src='circ.png'></img>
                            </div>
                            <div className='term-text'>
                                <h5>Privacy and Refund Policy:  </h5>
                                <p className='ps-2'>      User data is collected for statistics and insights, secured with encryption, and retained as necessary.
                                    Users consent to data collection, usage, and retention by using the app.
                                    Refunds are not issued for prepaid transactions unless services are defective or required by law.</p>
                            </div>

                        </div>
                        <div className='d-flex mb-3'>
                            <div className='my-1 mx-2'>
                                <img  src='circ.png'></img>
                            </div>
                            <div className='term-text'>
                                <h5>YourSportz App Refund Policy: </h5>
                                <p className='ps-2'>      Prepaid transactions are non-refundable once services are utilized.
                                    Refunds may be considered for defective services within 7 days of usage.
                                    Legal obligations may necessitate refunds as per applicable laws or regulations.</p>
                            </div>

                        </div>
                        <div className='end-content ms-5 my-5'>
                        <p>For any assistance, contact our customer support at contact@yoursportz.in. </p>
                        <h6>Thank you for choosing YourSportz!</h6>
                        </div>
                       
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}

export default Terms;

