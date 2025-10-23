"use client";

import { useState } from "react";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Auto-hide success message after 30 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 30000);
        
        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our games or need support? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Legal Entity:</strong> Naolito Games SL</p>
                  <p><strong>Commercial Name:</strong> Spark Games</p>
                  <p><strong>VAT Number:</strong> B75552836</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Office Address</h3>
                <div className="text-gray-700">
                  <p>Sor teresa prat 15</p>
                  <p>Polo de contenidos digitales</p>
                  <p>Málaga (Spain) 29003</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@naolito.com" className="text-blue-600 hover:text-blue-700">
                      contact@naolito.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Support Categories</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Game technical support</li>
                  <li>• Account and billing issues</li>
                  <li>• Privacy and data protection</li>
                  <li>• Business inquiries</li>
                  <li>• Press and media</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Response Time:</strong> We typically respond to inquiries within 24-48 hours during business days.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Message Sent Successfully! ✅</h3>
                    <p className="text-green-700 mb-2">
                      Thank you for contacting Spark Games. We have received your message and our team will review it shortly.
                    </p>
                    <p className="text-green-600 text-sm">
                      <strong>Expected response time:</strong> 24-48 hours during business days.<br />
                      <strong>Reference:</strong> {new Date().toISOString().slice(0, 10)}-{Math.random().toString(36).substr(2, 5).toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-6 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Message Failed to Send ❌</h3>
                    <p className="text-red-700 mb-2">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                    <p className="text-red-600 text-sm">
                      <strong>Alternative:</strong> Send us an email directly to{' '}
                      <a href="mailto:contact@naolito.com" className="underline font-medium">
                        contact@naolito.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              netlify="true"
              data-netlify="true"
              name="contact"
              method="POST"
            >
              {/* Hidden field for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="account-billing">Account & Billing</option>
                  <option value="privacy-data">Privacy & Data Protection</option>
                  <option value="business-inquiry">Business Inquiry</option>
                  <option value="press-media">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Please describe your inquiry in detail..."
                />
              </div>

              <div className="text-sm text-gray-600">
                <p>
                  By submitting this form, you agree to our <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700">Privacy Policy</a> and consent to the processing of your personal data for the purpose of responding to your inquiry.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Game Support</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Q: How do I report a bug in your games?</strong></p>
                <p>A: Please use the contact form above with "Technical Support" as the subject and provide detailed information about the issue.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy & Data</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Q: How can I delete my account data?</strong></p>
                <p>A: Contact us with "Privacy & Data Protection" as the subject, and we'll help you with your data deletion request.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
