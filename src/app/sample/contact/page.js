import React from "react";
import {Nav} from "../page";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50  text-black">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Contact Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
              <span className="block text-2xl text-rose-600 mt-2">
                お問い合わせ
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch to schedule your free trial lesson or ask any
              questions about our courses.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Level Interest
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500">
                    <option value="">Select a level</option>
                    <option value="beginner">Beginner (N5-N4)</option>
                    <option value="intermediate">Intermediate (N3)</option>
                    <option value="advanced">Advanced (N2-N1)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Schedule
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500">
                    <option value="">Select a time slot</option>
                    <option value="morning">Morning (8 AM - 12 PM JST)</option>
                    <option value="afternoon">
                      Afternoon (1 PM - 5 PM JST)
                    </option>
                    <option value="evening">Evening (6 PM - 10 PM JST)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Tell us about your Japanese learning goals..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-rose-600 text-white px-6 py-3 rounded-md hover:bg-rose-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">contact@senseiclass.com</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Hours (JST)
                </h3>
                <p className="text-gray-600">Mon-Fri: 8:00 - 22:00</p>
                <p className="text-gray-600">Sat-Sun: 10:00 - 18:00</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Location
                </h3>
                <p className="text-gray-600">Online Lessons via Zoom</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
