import React from "react";
import { Nav } from "../page";

export default function AdvancedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Course Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Japanese (JLPT N2-N1)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master advanced Japanese with our comprehensive N2-N1 course.
              Achieve professional-level fluency and cultural understanding.
            </p>
          </div>

          {/* Course Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-rose-600 mb-4">
                Course Overview
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-bold mr-2">Duration:</span>
                  <span>24 weeks (2 lessons per week)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Level:</span>
                  <span>N3 to professional N1 level</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Goals:</span>
                  <span>
                    Professional fluency, advanced reading/writing, native-level
                    discussions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Prerequisites:</span>
                  <span>JLPT N3 level or equivalent</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-rose-600 mb-4">
                What You&apos;ll Learn
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Advanced kanji (1500+ characters)</li>
                <li>• Complex linguistic concepts</li>
                <li>• Professional and academic Japanese</li>
                <li>• Advanced writing techniques</li>
                <li>• Literature and media comprehension</li>
                <li>• Cultural nuances and expressions</li>
                <li>• Business negotiation skills</li>
              </ul>
            </div>
          </div>

          {/* Schedule and Pricing */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-rose-600 mb-6">
              Schedule & Pricing
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Flexible Schedule Options
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Individual scheduling available</li>
                  <li>• Professional course timing</li>
                  <li>• Intensive preparation options</li>
                  <li>• 90-minute lesson duration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Course Packages</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24-week full course: ¥280,000</li>
                  <li>• 16-week intensive: ¥220,000</li>
                  <li>• Professional Japanese: ¥320,000</li>
                  <li>• Custom packages available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/sample/contact"
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-md hover:bg-rose-700 transition-colors"
            >
              Achieve Professional Fluency
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
