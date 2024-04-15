import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className='footer'>
      <footer className="group-footer">
        <div className="frame-child24"></div>
        <div className="feature-extractor">
          <div className="pattern-recognizer">
            <div className="yoursportz1">
              <span>Your</span>
              <span className="sportz1">Sportz</span>
            </div>
            <div className="value-calculator">
              <div className="frame-parent18">
                <div className="queue-manager-parent">
                  <div className="queue-manager">
                    <Link to="/social" className="social">Social</Link>
                  </div>
                  <div className="network-communicator">
                    <div className="time-series-processor">
                      <div className="communication-add-mail-parent">
                        <img
                          className="communication-add-mail"
                          loading="lazy"
                          alt=""
                          src="communication--add-mail.svg"
                        />

                        <div className="email">Email</div>
                      </div>
                    </div>
                    <div className="matrix-transformer-wrapper">
                      <div className="matrix-transformer">
                        <div className="signal-amplifier">
                          <img
                            className="signal-splitter-icon"
                            alt=""
                            src="vector-3.svg"
                          />
                        </div>
                        <div className="youtube">Youtube</div>
                      </div>
                    </div>
                    <div className="cluster-analyzer">
                      <img
                        className="cluster-analyzer-child"
                        loading="lazy"
                        alt=""
                        src="group-66.svg"
                      />

                      <div className="instagram-wrapper">
                        <div className="instagram">Instagram</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-wrapper10">
                  <div className="need-help-parent">
                    <div className="need-help">Need Help</div>
                    <div className="contact-us-parent">
                      <Link to="/contact" className="contact-us1">Contact Us</Link>
                      <Link to="/faq" className="faq">FAQ</Link>
                    </div>
                  </div>
                </div>
                <div className="legal-parent">
                  <div className="legal">Legal</div>
                  <div className="terms-of-use-parent">
                    <Link to="/terms" className="terms-of-use">Terms of use</Link>
                    <Link to="/privacy" className="privacy-policy">Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="apple-icon-21" alt="" src="appleicon-2-1@2x.png" />

        <div className="line-parent">
          <div className="line-div"></div>
          <div className="performance-evaluator">
            <div className="hyperparameter-tuner">
              <img className="group-icon" alt="" src="group.svg" />
            </div>
            <div className="yoursportz-by-navrekh">
              yoursportz by Navrekh Technologies PVT LTD
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
