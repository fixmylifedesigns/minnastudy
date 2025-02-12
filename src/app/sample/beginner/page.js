import React from "react";
import {Nav} from "../page";

export default function BeginnerPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
        <Nav />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Course Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Beginner Japanese (JLPT N5-N4)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your Japanese learning journey with our comprehensive
              beginner course. Master the basics and build a strong foundation
              for further study.
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
                  <span>12 weeks (2 lessons per week)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Level:</span>
                  <span>Complete beginner to basic conversation</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Goals:</span>
                  <span>
                    Master basic communication, read and write
                    hiragana/katakana, learn essential kanji
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Assessment:</span>
                  <span>Regular progress checks and JLPT N5 preparation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-rose-600 mb-4">
                What You&apos;ll Learn
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Complete hiragana and katakana writing systems</li>
                <li>• Basic kanji (100-300 essential characters)</li>
                <li>• Everyday conversations and greetings</li>
                <li>• Basic grammar patterns and sentence structure</li>
                <li>• Numbers, dates, and time expressions</li>
                <li>• Basic vocabulary for daily life</li>
                <li>• Introduction to Japanese culture</li>
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
                  <li>• Morning sessions: 8 AM - 12 PM (JST)</li>
                  <li>• Evening sessions: 6 PM - 10 PM (JST)</li>
                  <li>• Weekend intensive courses available</li>
                  <li>• 50-minute lesson duration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Course Packages</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 12-week full course: ¥120,000</li>
                  <li>• 8-week intensive: ¥90,000</li>
                  <li>• Pay-per-lesson: ¥6,000/lesson</li>
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
              Start Your Learning Journey
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
