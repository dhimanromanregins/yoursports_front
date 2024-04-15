import React, { useState } from 'react';
import Footer from './utils/Footer';
import Header from './utils/Header';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState({
        fullName: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = { ...errors };

        Object.keys(formData).forEach((key) => {
            if (formData[key].trim() === '') {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                isValid = false;
            }
        });

        // Check if the message has at least 200 words
        if (formData.message.trim().split(/\s+/).length < 200) {
            newErrors.message = 'Message must be at least 200 words';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            try {
                setIsLoading(true); // Set isLoading to true when submitting the form
                const response = await fetch('https://yoursportz.in/api/contacts/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                const notify = () => toast.success("Message sent successfully!");
                const notify2 = () => toast.error("Unable to send message Please try again later!");
                if (response.ok) {
                    setTimeout(() => {
                        setIsLoading(false);
                        notify();
                        setFormData({
                            fullName: '',
                            phone: '',
                            email: '',
                            subject: '',
                            message: ''
                        });
                    }, 2000);
                    
                } else {
                    // If there was an error, display an error message
                    notify2();
                }
            } catch (error) {
                console.error('Error sending message:', error);
                alert('Failed to send message. Please try again.');
            }
        }
    };

    return (
        <>
            <Header />
            <ToastContainer />

            <section className='container'>
                <div className='contact-wrap'>
                    <h2 className='my-4'>Get in Touch!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                            {errors.fullName && <div className="error">{errors.fullName}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                            {errors.phone && <div className="error">{errors.phone}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                            {errors.subject && <div className="error">{errors.subject}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Type your Message" rows="5" value={formData.message} onChange={handleChange}></textarea>
                            {errors.message && <div className="error">{errors.message}</div>}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className="float-end mb-3" type="submit" disabled={isLoading}>
                                    {isLoading ? <ClipLoader color="#ffffff" loading={isLoading} size={20} /> : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;
