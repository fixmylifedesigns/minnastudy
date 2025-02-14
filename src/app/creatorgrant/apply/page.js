"use client";
import React, { useState } from "react";

export default function TeacherApplication() {
  const [formData, setFormData] = useState({
    // Contact Info
    name: "",
    email: "",
    phone: "",
    location: "",
    // Social Media
    currentWebsite: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    twitch: "",
    // Teaching Profile
    teachingSubject: "",
    teachingExperience: "",
    teachingFormat: "",
    studentAgeGroups: [],
    studentsPerMonth: "",
    // Website Goals
    websiteGoals: "",
    websiteUse: "",
    specificFeatures: "",
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

  const handleAgeGroupChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      studentAgeGroups: checked
        ? [...prev.studentAgeGroups, value]
        : prev.studentAgeGroups.filter((group) => group !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    try {
      const formBody = new URLSearchParams();
      Object.keys(formData).forEach((key) => {
        formBody.append(
          key,
          Array.isArray(formData[key])
            ? formData[key].join(", ")
            : formData[key]
        );
      });

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwSoD6lWAwuFTX7ko3zKDJ_eah_vYDJZF4nasJOigXvE-QFucP8O1vdNhRIVRrza__igA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        currentWebsite: "",
        instagram: "",
        tiktok: "",
        youtube: "",
        twitch: "",
        teachingSubject: "",
        teachingExperience: "",
        teachingFormat: "",
        studentAgeGroups: [],
        studentsPerMonth: "",
        websiteGoals: "",
        websiteUse: "",
        specificFeatures: "",
      });
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to submit form. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <header className="w-full py-16 bg-gradient-to-r from-indigo-500 to-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            MinnaStudy Creator Grant: Free Website Program for Teachers
          </h1>
          <p className="text-xl sm:text-2xl">
            We’re selecting a few teachers to receive a professional website—for
            free!
          </p>
          <p className="text-xl sm:text-2xl">
            Fill out the form below to apply
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
              Thank you for your application. We&apos;ll review it and get back
              to you soon.
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6">
            {status.error && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">{status.error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
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
                      Email Address *
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
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, Country"
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Social Media */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Social Media & Online Presence
                </h2>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="currentWebsite"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Current Website
                    </label>
                    <input
                      type="url"
                      id="currentWebsite"
                      name="currentWebsite"
                      value={formData.currentWebsite}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="instagram"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Instagram
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="@username"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="tiktok"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        TikTok
                      </label>
                      <input
                        type="text"
                        id="tiktok"
                        name="tiktok"
                        value={formData.tiktok}
                        onChange={handleChange}
                        placeholder="@username"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="youtube"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        YouTube
                      </label>
                      <input
                        type="text"
                        id="youtube"
                        name="youtube"
                        value={formData.youtube}
                        onChange={handleChange}
                        placeholder="Channel URL or @handle"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="twitch"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Twitch
                      </label>
                      <input
                        type="text"
                        id="twitch"
                        name="twitch"
                        value={formData.twitch}
                        onChange={handleChange}
                        placeholder="username"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Teaching Profile */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Teaching Profile
                </h2>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="teachingSubject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      What do you teach? *
                    </label>
                    <input
                      type="text"
                      id="teachingSubject"
                      name="teachingSubject"
                      required
                      value={formData.teachingSubject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="teachingExperience"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Teaching Experience *
                      </label>
                      <select
                        id="teachingExperience"
                        name="teachingExperience"
                        required
                        value={formData.teachingExperience}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select years of experience</option>
                        <option value="0-1">Less than 1 year</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">More than 10 years</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="teachingFormat"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Teaching Format *
                      </label>
                      <select
                        id="teachingFormat"
                        name="teachingFormat"
                        required
                        value={formData.teachingFormat}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select teaching format</option>
                        <option value="online">Online Only</option>
                        <option value="in-person">In-person Only</option>
                        <option value="hybrid">
                          Both Online and In-person
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Student Age Groups *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Kids (under 12)",
                        "Teens (13-17)",
                        "Adults (18+)",
                        "Business Professionals",
                      ].map((group) => (
                        <label key={group} className="flex items-center">
                          <input
                            type="checkbox"
                            name="studentAgeGroups"
                            value={group}
                            checked={formData.studentAgeGroups.includes(group)}
                            onChange={handleAgeGroupChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-gray-700">{group}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="studentsPerMonth"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Average Number of Students per Month
                    </label>
                    <input
                      type="number"
                      id="studentsPerMonth"
                      name="studentsPerMonth"
                      value={formData.studentsPerMonth}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Website Goals */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Website Goals
                </h2>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="websiteGoals"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Why are you interested in getting a website? *
                    </label>
                    <textarea
                      id="websiteGoals"
                      name="websiteGoals"
                      required
                      value={formData.websiteGoals}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your main reasons for wanting a website..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="websiteUse"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      How would a website benefit your teaching? *
                    </label>
                    <textarea
                      id="websiteUse"
                      name="websiteUse"
                      required
                      value={formData.websiteUse}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Explain how you plan to use the website..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="specificFeatures"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Are there any specific features you&apos;re interested in?
                    </label>
                    <textarea
                      id="specificFeatures"
                      name="specificFeatures"
                      value={formData.specificFeatures}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="List any specific features or functionality you'd like (e.g., booking system, blog, course platform)..."
                    />
                  </div>
                </div>
              </section>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
