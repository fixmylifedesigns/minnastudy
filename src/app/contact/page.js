'use client'
// pages/contact.js
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    languages: '',
    domain: '',
    features: [],
    additionalInfo: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, value]
        : prev.features.filter(feature => feature !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Error sending message');

      setStatus({
        type: 'success',
        message: 'Thank you! We will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        languages: '',
        domain: '',
        features: [],
        additionalInfo: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Professional Teaching Website
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let&apos;s create your online presence. Simple, professional, and effective.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teaching Language(s) *
                  </label>
                  <input
                    type="text"
                    name="languages"
                    required
                    value={formData.languages}
                    onChange={handleInputChange}
                    placeholder="e.g., Japanese, English"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Domain Option *
                  </label>
                  <select
                    name="domain"
                    required
                    value={formData.domain}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select domain preference</option>
                    <option value="subdomain">Free yourname.minnastudy.com subdomain</option>
                    <option value="custom">I want my own .com domain (additional cost)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Would you like to include: (optional)
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="Contact form"
                        checked={formData.features.includes('Contact form')}
                        onChange={handleCheckboxChange}
                        className="rounded text-blue-600 focus:ring-blue-500 mr-2"
                      />
                      <span>Contact form</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="Calendly integration"
                        checked={formData.features.includes('Calendly integration')}
                        onChange={handleCheckboxChange}
                        className="rounded text-blue-600 focus:ring-blue-500 mr-2"
                      />
                      <span>Calendly integration</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="Social media links"
                        checked={formData.features.includes('Social media links')}
                        onChange={handleCheckboxChange}
                        className="rounded text-blue-600 focus:ring-blue-500 mr-2"
                      />
                      <span>Social media links</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    rows="4"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your teaching style and what you'd like to highlight on your website..."
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`p-4 rounded-md ${
                    status.type === 'success' 
                      ? 'bg-green-50 text-green-800' 
                      : 'bg-red-50 text-red-800'
                  }`}>
                    {status.message}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 text-white px-6 py-3 rounded-md transition-colors font-medium
                      ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Get Started'}
                  </button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  Fields marked with * are required
                </p>
              </form>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">contact@stealthwork.app</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
