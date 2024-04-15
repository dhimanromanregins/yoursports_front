import React, { useState } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    termsChecked: false,
    keepLoggedIn: false,
    errors: {}
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
      errors: { ...formData.errors, [name]: '' }
    });
  };

  const handleTermsClick = () => {  
    navigate('/Terms');
  };  

  const handlePrivacyClick = () => {
    navigate('/Privacy');
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required.";
    }
    if (!formData.password) {
      errors.password = "Password is required.";
    }
    if (!formData.termsChecked) {
      errors.termsChecked = "Please accept the Terms of Service and Privacy Policy.";
    }
    if (Object.keys(errors).length > 0) {
      setFormData({ ...formData, errors });
      return;
    }

    // Send the form data to the API
    try {
      setIsLoading(true);
      const response = await fetch('https://yoursportz.in/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const showToastMessage = () => {
        toast.success("Login Success")
      };
      const showToastMessage2 = () => {
        toast.error("Invalid Credentials")
      };
      if (response.ok) {
        setTimeout(() => {
          setIsLoading(false);
          showToastMessage();
          navigate('/dashboard');
        }, 2000);
      } else {
        setIsLoading(false);
        showToastMessage2();
        // alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      alert('An error occurred. Please try again later.');
    }
  };
  return (
    <> <ToastContainer />

      <section className='container' >
        <div className='row pd-login'>
          <div className='col-12 col-md-6 col-lg-6'>
            <div className='first'>
              <h2 className='mb-3'>Welcome back!</h2>
              <h6 className='mb-3'>Nice to see you again</h6>
              <p className='mb-3'>YourSportz, the dynamic football app, offers a plethora of health and lifestyle<br></br> benefits. Let’s delve into how it can enhance your well-being</p>
              <img className="img-fluid" src="image 208.png" alt="Welcome back" />
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-6'>
            <div className='second-section'>
              <h4 className='mb-4'>Login</h4>
              <form className='login-content' onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your E-mail" />
                  {formData.errors.email && <p className="error-text">{formData.errors.email}</p>}
                </div>
                <div className='form-group'>
                  <div className='pass-main'>
                    <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
                    {showPassword ? (
                      <span className="toggle-password" onClick={toggleShowPassword}>
                        <img src="hide.png" alt="Hide Password" />
                      </span>
                    ) : (
                      <span className="toggle-password" onClick={toggleShowPassword}>
                        <img src="eye-icon.png" alt="Show Password" />
                      </span>
                    )}
                    {formData.errors.password && <p className="error-text">{formData.errors.password}</p>}
                  </div>
                </div>
                <div className='form-group'>
                  <div className='logged-in'>
                    <label className="d-flex" htmlFor="keepLoggedIn">
                      <input type="checkbox" id="keepLoggedIn" name="keepLoggedIn" checked={formData.keepLoggedIn} onChange={handleChange} /> Keep me logged in
                    </label>
                    <a className="or-color" href="#">Forgot password?</a>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="terms" className="checkbox-label my-5">
                    <input type="checkbox" id="terms" name="termsChecked" checked={formData.termsChecked} onChange={handleChange} />
                    <span>I agree to the <a onClick={handleTermsClick} target="_blank">Terms of Service</a> and <a onClick={handlePrivacyClick} target="_blank">Privacy Policy</a></span>
                    {formData.errors.termsChecked && <p className="error-text">{formData.errors.termsChecked}</p>}
                  </label>
                </div>
                <div className="form-group">
                  <button type="submit" className="login-btn" disabled={isLoading}>
                    {isLoading ? <ClipLoader color="#ffffff" loading={isLoading} size={20} /> : 'Login'}
                  </button>
                </div>
                <div className="form-group">
                  <p className='text-center'>Don’t have an account?<span style={{ cursor: "pointer" }} className='or-color' onClick={() => navigate('/register')}> Register</span></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='last-section col-12'>

        <div>
          <img src="one .jpg" alt="Left Image" className="page-start-image" />
        </div>

        <div>
          <img src="purple.png" alt="Image" className="page-end-image" />
        </div>
      </section>


    </>
  );
}

export default Login;
