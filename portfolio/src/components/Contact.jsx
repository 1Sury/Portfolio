// src/components/Contact.jsx
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setSubmitStatus('loading');
      
      // Mock API call
      setTimeout(() => {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, 1000);
    }
  };
  
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            I'm interested in freelance opportunities and collaborations. If you have a project that needs help or if you'd like to discuss potential collaborations, don't hesitate to reach out!
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <strong>Name:</strong> Shubhanshi Suryavanshi
            </div>
            <div className="contact-item">
              <strong>Email:</strong> shubhanshiofficial12@gmail.com
            </div>
            <div className="contact-item">
              <strong>Based in:</strong> India
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shubhanshi-suryavanshi-482821241/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://github.com/1Sury" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <div className="error-message">{errors.message}</div>}
            </div>
            
            <button 
              type="submit" 
              className={`btn submit-btn ${submitStatus === 'loading' ? 'loading' : ''}`}
              disabled={submitStatus === 'loading'}
            >
              {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                Your message has been sent. I'll get back to you soon!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;