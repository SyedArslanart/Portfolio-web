import React, { useState } from 'react';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-[5vw] bg-[#0f0c1a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white hover:underline hover:text-[#8245ec] cursor-pointer">Contact</h2>
          <p className="text-[#8245ec] mt-2">Let's discuss your project</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full pl-10 pr-4 py-3 bg-[#0a0618] border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:border-[#8245ec] focus:ring-2 focus:ring-[#8245ec]/50 outline-none transition-all text-white`}
              />
              {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full pl-10 pr-4 py-3 bg-[#0a0618] border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:border-[#8245ec] focus:ring-2 focus:ring-[#8245ec]/50 outline-none transition-all text-white`}
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="relative">
              <div className="absolute top-3 left-3">
                <FiMessageSquare className="text-gray-400" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className={`w-full pl-10 pr-4 py-3 bg-[#0a0618] border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:border-[#8245ec] focus:ring-2 focus:ring-[#8245ec]/50 outline-none transition-all text-white`}
              ></textarea>
              {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#8245ec] hover:bg-[#6a3ac7] text-white font-medium rounded-lg transition-all duration-300"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>

            {submitSuccess && (
              <div className="p-3 mt-4 bg-green-900/30 border border-green-500 text-green-400 rounded-lg text-center">
                Message sent successfully! I'll contact you soon.
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 bg-[#0a0618] border border-gray-800 rounded-lg hover:border-[#8245ec] transition-all">
              <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#8245ec] mt-1">✉️</span>
                  <span>arslanshah0506@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8245ec] mt-1">📱</span>
                  <span>+92 317 1983246</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8245ec] mt-1">📍</span>
                  <span>Lahore, Pakistan</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[#0a0618] border border-gray-800 rounded-lg hover:border-[#8245ec] transition-all">
              <h3 className="text-xl font-semibold text-white mb-3">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#8245ec]/10 hover:bg-[#8245ec]/20 text-[#8245ec] rounded-full transition-all">
                  <FiGithub className="text-xl" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#8245ec]/10 hover:bg-[#8245ec]/20 text-[#8245ec] rounded-full transition-all">
                  <FiLinkedin className="text-xl" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#8245ec]/10 hover:bg-[#8245ec]/20 text-[#8245ec] rounded-full transition-all">
                  <FiTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;