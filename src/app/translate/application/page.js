"use client";
import React, { useState } from "react";

export default function BetaTesterForm() {
  const [formData, setFormData] = useState({
    // Basic Information
    name: "",
    email: "",
    country: "",
    age: "",
    primaryLanguage: "",
    otherLanguages: [],
    // Testing Information
    devices: [],
    translationFrequency: "",
    usage: [],
    currentTools: [],
    problems: "",
    useProfessionally: "",
    // Preferences
    preferredFeatures: [],
    languagesWanted: "",
    // Payment Preferences
    pay: "",
    price: "",
    adsOrPaid: "",
    payForDialect: "",
    // Testing Commitment
    feedback: "",
    testingFrequency: "",
    contactPermission: "",
    // Additional Information
    comments: "",
    referral: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    try {
      const response = await fetch("/api/beta-testers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to submit form");
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });

      // Reset form data
      setFormData({
        name: "",
        email: "",
        country: "",
        age: "",
        primaryLanguage: "",
        otherLanguages: [],
        devices: [],
        translationFrequency: "",
        usage: [],
        currentTools: [],
        problems: "",
        useProfessionally: "",
        preferredFeatures: [],
        languagesWanted: "",
        pay: "",
        price: "",
        adsOrPaid: "",
        payForDialect: "",
        feedback: "",
        testingFrequency: "",
        contactPermission: "",
        comments: "",
        referral: "",
      });
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message || "Failed to submit form. Please try again.",
      });
    }
  };

  // Render checkbox options for multiple select fields
  const renderCheckboxOptions = (name, options, label) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={formData[name].includes(option)}
              onChange={handleMultiSelectChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  // Custom component for radio button group
  const RadioGroup = ({ name, options, label, required = false }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option}
              checked={formData[name] === option}
              onChange={handleChange}
              required={required}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2 text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Join Our Translation App Beta Program
          </h1>
          <p className="text-xl sm:text-2xl">
            Help us build the future of translation technology and get early
            access to our innovative features
          </p>
        </div>
      </header>

      {/* Form Section */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {status.submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Application Submitted!
            </h2>
            <p className="text-green-700">
              Thank you for signing up as a beta tester. We&apos;ll review your
              application and be in touch soon.
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6">
            {" "}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">
                Become a Beta Tester
              </h2>
              <div className="text-indigo-700 space-y-3">
                <p>
                  We&apos;re in the beta phase of our AI-powered translation
                  software and looking for real-world testers to help us improve
                  it.
                </p>
                <p>
                  As a beta tester, you&apos;ll receive either free translation
                  credits or limited-time free access. In exchange, we ask for
                  your honest feedback and bug reports. If you come across any
                  issues, a screenshot would be especially helpful!
                </p>
                <p className="font-semibold">
                  Sign up now and help us make our app even better!
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Basic Information
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="primaryLanguage"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Primary Language <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="primaryLanguage"
                      name="primaryLanguage"
                      required
                      value={formData.primaryLanguage}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {renderCheckboxOptions(
                    "otherLanguages",
                    [
                      "English",
                      "Spanish",
                      "French",
                      "German",
                      "Chinese",
                      "Japanese",
                      "Korean",
                      "Russian",
                      "Portuguese",
                      "Arabic",
                      "Other",
                    ],
                    "Other Languages You Speak"
                  )}
                </div>
              </section>

              {/* Testing Information */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Translation Usage
                </h2>
                <div className="space-y-4">
                  {renderCheckboxOptions(
                    "devices",
                    ["Android", "iPhone", "Tablet", "Desktop"],
                    "Device(s) for Testing"
                  )}

                  <RadioGroup
                    name="translationFrequency"
                    options={["Daily", "Weekly", "Occasionally"]}
                    label="How often do you need translations?"
                    required={true}
                  />

                  {renderCheckboxOptions(
                    "usage",
                    [
                      "Work",
                      "Travel",
                      "Studying",
                      "Casual",
                      "Content Creation",
                      "Other",
                    ],
                    "What do you use translations for?"
                  )}

                  {renderCheckboxOptions(
                    "currentTools",
                    [
                      "Google Translate",
                      "DeepL",
                      "Papago",
                      "Apple Translate",
                      "Microsoft Translator",
                      "None",
                      "Other",
                    ],
                    "Current Translation Tools Used"
                  )}

                  <div>
                    <label
                      htmlFor="problems"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      What&apos;s the biggest problem with current tools?
                    </label>
                    <textarea
                      id="problems"
                      name="problems"
                      value={formData.problems}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe any issues you face with existing translation tools..."
                    />
                  </div>

                  <RadioGroup
                    name="useProfessionally"
                    options={["Yes", "No"]}
                    label="Would you use AI-generated translations professionally?"
                    required={true}
                  />
                </div>
              </section>

              {/* Preferences */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Feature Preferences
                </h2>
                <div className="space-y-4">
                  {renderCheckboxOptions(
                    "preferredFeatures",
                    [
                      "Standard Translations",
                      "Dialect-Specific Translations",
                      "Voice-to-Text",
                      "AI Voice Generation",
                      "Offline Mode",
                      "Translation Chatbot",
                    ],
                    "Preferred Features"
                  )}

                  <div>
                    <label
                      htmlFor="languagesWanted"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Languages/Dialects You Want Supported
                    </label>
                    <textarea
                      id="languagesWanted"
                      name="languagesWanted"
                      value={formData.languagesWanted}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please list any specific languages or dialects you'd like to see supported..."
                    />
                  </div>
                </div>
              </section>

              {/* Payment Preferences */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Payment Preferences
                </h2>
                <div className="space-y-4">
                  <RadioGroup
                    name="pay"
                    options={["Yes", "No"]}
                    label="Would you pay for this app?"
                    required={true}
                  />

                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      How much would you pay? (in USD)
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 3.99"
                    />
                  </div>

                  <RadioGroup
                    name="adsOrPaid"
                    options={["Free with ads", "Paid without ads"]}
                    label="Would you prefer free with ads or paid without ads?"
                    required={true}
                  />

                  <RadioGroup
                    name="payForDialect"
                    options={["Yes", "No"]}
                    label="Would you pay extra for dialect-specific translations?"
                    required={true}
                  />
                </div>
              </section>

              {/* Testing Commitment */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Testing Commitment
                </h2>
                <div className="space-y-4">
                  <RadioGroup
                    name="feedback"
                    options={["Yes", "No"]}
                    label="Are you willing to provide feedback?"
                    required={true}
                  />

                  <RadioGroup
                    name="testingFrequency"
                    options={["Daily", "Weekly", "Occasionally"]}
                    label="How often can you test the app?"
                    required={true}
                  />

                  <RadioGroup
                    name="contactPermission"
                    options={["Yes", "No"]}
                    label="Can we contact you for feedback?"
                    required={true}
                  />
                </div>
              </section>

              {/* Additional Information */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Additional Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="comments"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Additional Comments
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Any other information you'd like to share..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="referral"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      How did you hear about us?
                    </label>
                    <input
                      type="text"
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>
              {status.error && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800">{status.error}</p>
                </div>
              )}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? "Submitting..." : "Submit Application"}
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Fields marked with <span className="text-red-500">*</span> are
                  required
                </p>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
