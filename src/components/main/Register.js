import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import Terms from './Terms';
import Privacy from './Privacy';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



function Register() {
  const [formData, setFormData] = useState({
    full_name: '',
    institution: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsChecked: false,
    is_school: true,
    is_corporate: false,
    errors: {}
  });
  const [isLoading, setIsLoading] = useState(false);



  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();

  const handleTermsClick = () => {  
    navigate('/Terms');
  };  

  const handlePrivacyClick = () => {
    navigate('/Privacy');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, errors: { ...formData.errors, [name]: '' } });
  };
  const [isSchool, setIsSchool] = useState(true);

  const toggleMode = () => {
    setIsSchool(!isSchool);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!formData.full_name) {
      errors.full_name = "Full name is required.";
    }
    if (!formData.institution) {
      errors.institution = "Institution is required.";
    }
    if (!formData.address) {
      errors.address = "Address is  required.";
    }
    if (!formData.email) {
      errors.email = "Email is required.";
    }
    if (!formData.password) {
      errors.password = "Password is required. ";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.termsChecked) {
      errors.termsChecked = "Please accept the Terms of Service and Privacy Policy.";
    }

    if (Object.keys(errors).length > 0) {
      setFormData({ ...formData, errors });
      return;
    }
    setIsLoading(true);

    // Send the form data to the API
    try {
      const response = await fetch('https://yoursportz.in/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const notify = () => toast.success("Registration successfull!");
      const notify2 = () => toast.error("Registration failed. Please try again later.");
      if (response.ok) {
        setTimeout(() => {
          setIsLoading(false);
          notify();
          navigate('/login');
        }, 2000);
      } else {
        notify2();
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="container">
        <div className='row pd-login '>
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
              <form className='login-content' onSubmit={handleSubmit}>
                {/* <div className='bg-btnn d-flex'>
                  <button type="button" className="btn btn-general">General</button>
                  <button type="button" className="btn btn-school-corporate">School/Corporate</button>
                </div> */}
                <div className="d-flex justify-center mb-4 bg-btnn  ">
                  <div className="bg-gray-200 rounded-full px-2 py-2 d-flex items-center ">
                    <button type='button'
                      className={`${isSchool
                        ? " bg-white text-gray-600 shadow-md"
                        : "bg-gray-200 text-gray-800"
                        } rounded-full px-4 py-2 transition-colors duration-500 focus:outline-none school-btn`}
                      onClick={toggleMode}
                    >
                      School
                    </button>
                    <button type='button'
                      className={`${!isSchool
                        ? "bg-white text-gray-600 shadow-md"
                        : "bg-gray-200 text-gray-800 "
                        } rounded-full px-4 py-2 transition-colors duration-500 focus:outline-none school-btn `}
                      onClick={toggleMode}
                    >
                      Corporate
                    </button>
                  </div>
                </div>
                <div className='form-group'>
                  <label className='lb-color'>Full name</label>
                  <input type="text" id="full_name" name="full_name" value={formData.full_name} onChange={handleChange} />
                  {formData.errors.full_name && <p className="error-text">{formData.errors.full_name}</p>}
                </div>
                <div className='form-group'>
                  <label className='lb-color'>{isSchool ? 'Institution' : 'Company'}</label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}

                  />
                  {formData.errors.institution && <p className="error-text">{formData.errors.institution}</p>}
                </div>
                <div className='form-group'>
                  <label className='lb-color'>Address</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
                  {formData.errors.address && <p className="error-text">{formData.errors.address}</p>}
                </div>
                <div className='form-group'>
                  <label className='lb-color'>Email account</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                  {formData.errors.email && <p className="error-text">{formData.errors.email}</p>}
                </div>
                <div className='form-group'>
                  <div className='pass-main'>
                    <label className='lb-color'>Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <img
                      src={showPassword ? 'eye-icon.png' : 'hide.png'}
                      alt="Toggle Password Visibility"
                      className="eye-icon"
                      onClick={togglePasswordVisibility}
                    />
                    {formData.errors.password && <p className="error-text">{formData.errors.password}</p>}
                  </div>
                </div>
                <div className='form-group'>
                  <div className='pass-main'>
                    <label className='lb-color'>Confirm Password</label>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <img
                      src={showConfirmPassword ? 'eye-icon.png' : 'hide.png'}
                      alt="Toggle Password Visibility"
                      className="eye-icon"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                    {formData.errors.confirmPassword && <p className="error-text">{formData.errors.confirmPassword}</p>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="terms" className="checkbox-label my-5">
                    <input type="checkbox" id="terms" name="terms" checked={formData.termsChecked} onChange={() => setFormData({ ...formData, termsChecked: !formData.termsChecked })} />
                    <span>
      I agree to the <span onClick={handleTermsClick}>Terms of Service</span> and{' '}
      <span onClick={handlePrivacyClick}>Privacy Policy</span>
    </span>
                  </label>
                  {formData.errors.termsChecked && <p className="error-text">{formData.errors.termsChecked}</p>}
                </div>
                <div className="form-group">
                  <button type="submit" className="login-btn" disabled={isLoading}>
                    {isLoading ? <ClipLoader color="#ffffff" loading={isLoading} size={20} /> : 'Register'}
                  </button>
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
const override = css`
  display: block;
  margin: 0 auto;
`;
export default Register;