import React, { useState, useEffect } from 'react';
import Header from './utils/Header';
import Footer from './utils/Footer';


function Landing() {

  const [faqData, setFaqData] = useState([]);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  useEffect(() => {
    fetch('https://yoursportz.in/api/faqs/')
      .then(response => response.json())
      .then(data => setFaqData(data))
      .catch(error => console.error('Error fetching FAQ data:', error));
  }, []);
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
    setIsHovered2(false);
    setIsHovered3(false);
    setIsHovered4(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered1(false);
    setIsHovered2(true);
    setIsHovered3(false);
    setIsHovered4(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered1(false);
    setIsHovered2(false);
    setIsHovered3(true);
    setIsHovered4(false);
  };

  const handleMouseEnter4 = () => {
    setIsHovered1(false);
    setIsHovered2(false);
    setIsHovered3(false);
    setIsHovered4(true);
  };

  const handleMouseLeave = () => {
    setIsHovered1(false);
    setIsHovered2(false);
    setIsHovered3(false);
    setIsHovered4(false);
  };
  return (
    <>
      <Header />
      <div className='banner-section container'>
        <div className='row d-flex align-items-center pd-56'>
          <div className='col-12 col-md-6 col-lg-6'>
            <div className='banner-content text-center'>
              <h2>Game it your way</h2>
              <p>Stream, Score, Soar: Your Local Football Arena in Your Pocket. Track Your Performance, Discover Tournaments, and Team Up. All in One Dynamic App</p>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-6'>
            <img src="/mobiles.png" className="img-fluid" alt="Mobiles"></img>
          </div>
        </div>

        <div className='row pd-56'>
          <div className='col-12 extra-pd-space'>
            <img src="imgpsh_fullsize_anim (1).png" className="img-fluid" alt=""></img>
          </div>
        </div>

        <div className='row d-flex align-items-center justify-content-center pd-56'>
          <div className='col-12 col-md-12 col-lg-12'>
            <div className="text-center">
              <div className='third-content'>
                <h2 className='one-line'>Why YourSportz Stands Out</h2>
                <p>YourSportz, the dynamic football app, offers a plethora of health and lifestyle benefits. Let’s delve into how it can enhance your well-being</p>
              </div>
            </div>
          </div>
        </div>

        <div className='row pd-56 d-flex align-items-center justify-content-center'>
          <div className='col-12 col-md-5 col-lg-5'>
            <img src="phone-1.png" className="img-fluid" alt="Mobiles"></img>
          </div>
          <div className='col-12 col-md-7 col-lg-7'>
            <div className='wrap-do' style={{ position: 'relative' }}>
              <div
                className='do-first'
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave}
              >
                <div className='do-img mb-2 d-flex align-items-center'>
                  <img className="img-fluid h-chnge" src="did-you-know.png" alt="Did you know"></img>
                  <h5 className='ms-2'>Do we know</h5>
                </div>
                <h4 className='int'>
                  Intuitive Match Scoring Interface
                </h4>
                <h5 className='more-text'>
                  Direct the game's score with a single touch using our scorer app. Accurately log goals, fouls, and more, with an 'Undo' feature for corrections. Simple, swift, and precise—be the game's definitive scorekeeper.
                </h5>
              </div>
              {isHovered1 && (
                <div
                  className="most-wide"
                  // style={{
                  //   top: document.querySelector('.do-first').offsetHeight + 10, // Adjust the offset as needed
                  //   left: 0, // Adjust the left position as needed
                  //   width: '100%', // Adjust the width as needed
                  //   textAlign: 'center' // Center the content
                  // }}
                >
                  <h5 className='max-hover ms-4 p-3 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan </h5>
   </div>
              )}
            </div>
          </div>



        </div>
        <div className='row pd-56 d-flex align-items-center justify-content-center'>
        <div className='col-12 col-md-7 col-lg-7'>
            <div className='wrap-do-1' style={{ position: 'relative' }}>
            <div
              className='do-first-1'
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave}
            >
                <div className='do-img-1 mb-2 d-flex align-items-center justify-content-end'>
                  <img className="img-fluid h-chnge-1" src="did-you-know.png" alt="Did you know"></img>
                  <h5 className='ms-2' style={{ textAlign: 'right' }}>Do we know</h5>
                </div>
                <h4 className='int-1'>
                Intuitive Match Scoring Interface
                </h4>
                <h5 className='more-text-1'>
                  Direct the game's score with a single touch using our scorer app. Accurately log goals, fouls, and more, with an 'Undo' feature for corrections. Simple, swift, and precise—be the game's definitive scorekeeper.
                </h5>
              </div>
              {isHovered2 && (
                <div
                  className="most-wide-1"
                  style={{
                    top: document.querySelector('.do-first').offsetHeight + 10, // Adjust the offset as needed
                    right: 0, // Adjust the left position as needed
                    width: '100%', // Adjust the width as needed
                    textAlign: 'right' // Center the content
                  }}
                >
                  <h5 className='max-hover-1 ms-4 p-3 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan </h5>
   </div>
              )}
            </div>
          </div>
          <div className='col-12 col-md-5 col-lg-5'>
            <img src="phone-2.png" className="img-fluid" alt="Mobiles"></img>
          </div>
        </div>

        <div className='row pd-56  d-flex align-items-center justify-content-center'>
          <div className='col-12 col-md-5 col-lg-5'>
            <img src="/phone-3.png " className="img-fluid" alt="Mobiles"></img>
          </div>
          <div className='col-12 col-md-7 col-lg-7'>
            <div className='wrap-do' style={{ position: 'relative' }}>
              <div
                className='do-first'
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave}
              >
                <div className='do-img mb-2 d-flex align-items-center'>
                  <img className="img-fluid h-chnge" src="did-you-know.png" alt="Did you know"></img>
                  <h5 className='ms-2'>Do we know</h5>
                </div>
                <h4 className='int'>
                Go Live: Stream Football With Flair
                </h4>
                <h5 className='more-text'>
                  Direct the game's score with a single touch using our scorer app. Accurately log goals, fouls, and more, with an 'Undo' feature for corrections. Simple, swift, and precise—be the game's definitive scorekeeper.
                </h5>
              </div>
              {isHovered3 && (
                <div
                  className="most-wide"
                  // style={{
                  //   top: document.querySelector('.do-first').offsetHeight + 10, // Adjust the offset as needed
                  //   left: 0, // Adjust the left position as needed
                  //   width: '100%', // Adjust the width as needed
                  //   textAlign: 'center' // Center the content
                  // }}
                >
                  <h5 className='max-hover ms-4 p-3 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan </h5>
   </div>
              )}
            </div>
          </div>
        </div>

        <div className='row pd-56'>
        <div className='col-12 col-md-7 col-lg-7'>
            <div className='wrap-do-1' style={{ position: 'relative' }}>
              <div
                className='do-first-1'
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave}
              >
                <div className='do-img-1 mb-2 d-flex align-items-center justify-content-end'>
                  <img className="img-fluid h-chnge-1" src="did-you-know.png" alt="Did you know"></img>
                  <h5 className='ms-2' style={{ textAlign: 'right' }}>Do we know</h5>
                </div>
                <h4 className='int-1'>
                Every Game, Every Word
                </h4>
                <h5 className='more-text-1'>
                Embrace the excitement of sports in your language with our app. Enjoy live commentary, real-time updates, and all the highlights in your preferred language. Break down language barriers and connect with the game like never before.
                </h5>
              </div>
              {isHovered4 && (
                <div
                  className="most-wide-1"
                  style={{
                    top: document.querySelector('.do-first').offsetHeight + 10, // Adjust the offset as needed
                    right: 0, // Adjust the left position as needed
                    width: '100%', // Adjust the width as needed
                    textAlign: 'right' // Center the content
                  }}
                >
                  <h5 className='max-hover-1 ms-4 p-3 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan </h5>
   </div>
              )}
            </div>
          </div>
          <div className='col-12 col-md-5 col-lg-5'>
            <img src="/phone-4.png" className="img-fluid" alt="Mobiles"></img>
          </div>
        </div>

        <div className='row pd-56'>
          <div className='col-12 col-md-6 col-lg-6'>
            <img src="screenshot-android.png " className="img-fluid" alt="Mobiles"></img>
          </div>
          <div className='col-12 col-md-6 col-lg-6'>
            <img src="screenshot-ios.png" className="img-fluid" alt="Mobiles"></img>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="accordion" id="accordionExample">

          <div className="accordion" id="accordionExample">
            {faqData.map(item => (
              <div className="accordion-item" key={item.id}>
                <h2 className="accordion-header" id={`heading${item.id}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse${item.id}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${item.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${item.id}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      <Footer />
    </>
  );
}

export default Landing;

