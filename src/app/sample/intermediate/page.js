import React from "react";
import { Nav } from "../page";

export default function IntermediatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Course Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Intermediate Japanese (JLPT N3)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your Japanese to the next level with our intermediate course.
              Develop natural conversation skills and master complex grammar
              patterns.
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
                  <span>16 weeks (2 lessons per week)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Level:</span>
                  <span>N4 to confident N3 level</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Goals:</span>
                  <span>
                    Natural conversation, business Japanese basics, intermediate
                    kanji mastery
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Prerequisites:</span>
                  <span>JLPT N4 level or equivalent</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-rose-600 mb-4">
                What You&apos;ll Learn
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Complex grammar patterns and expressions</li>
                <li>• Intermediate kanji (500-800 characters)</li>
                <li>• Business Japanese fundamentals</li>
                <li>• Natural conversation techniques</li>
                <li>• Reading comprehension strategies</li>
                <li>• Formal and casual speech styles</li>
                <li>• Japanese culture and business etiquette</li>
              </ul>
            </div>
          </div>

          {/* Schedule and Pricing */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-rose-600 mb-6">
              Schedule & Pricing
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-black">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Flexible Schedule Options
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Morning sessions: 8 AM - 12 PM (JST)</li>
                  <li>• Evening sessions: 6 PM - 10 PM (JST)</li>
                  <li>• Business course options available</li>
                  <li>• 60-minute lesson duration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Course Packages</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 16-week full course: ¥180,000</li>
                  <li>• 12-week intensive: ¥150,000</li>
                  <li>• Business Japanese add-on: ¥50,000</li>
                  <li>• Materials included</li>
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
              Elevate Your Japanese
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
