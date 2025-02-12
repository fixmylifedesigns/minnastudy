"use client";
import React, { useState } from "react";
import {
  Book,
  MessageCircle,
  Calendar,
  Star,
  Globe,
  Users,
  ChevronDown,
} from "lucide-react";

export function Nav() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-t border-gray-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-rose-600">
            先生の日本語教室
            <span className="block text-sm text-gray-600">
              Sensei&apos;s Japanese Class
            </span>
          </h1>

          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a href="/sample" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li className="relative">
                <button
                  className="flex items-center text-gray-600 hover:text-gray-800"
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                >
                  Courses
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isSubmenuOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <li>
                      <a
                        href="/sample/beginner"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Beginner JLPT N5-N4
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sample/intermediate"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Intermediate JLPT N3
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sample/advanced"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Advanced JLPT N2-N1
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="/sample/contact"
                  className="inline-block bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700"
                >
                  Book Trial Lesson
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function JapaneseTeacherDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Nav />
      {/* Banner */}
      <section className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            日本語を学びましょう！
            <span className="block text-2xl mt-2">
              Let&apos;s Learn Japanese!
            </span>
          </h2>
          <p className="text-xl mb-8">
            Experience personalized Japanese lessons with a certified native
            teacher
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/sample/contact"
              className="bg-white text-rose-600 px-6 py-3 rounded-md hover:bg-gray-100"
            >
              Free Trial Lesson
            </a>
            <a
              href="/sample/courses"
              className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-rose-600"
            >
              View Courses
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-black">
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Book className="mx-auto h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Structured Curriculum</h3>
              <p className="text-gray-600">
                Comprehensive JLPT-aligned lessons from N5 to N1 levels. Learn
                reading, writing, speaking, and listening with native materials.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <MessageCircle className="mx-auto h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
              <p className="text-gray-600">
                Practice conversation with a native speaker. Regular speaking
                exercises and real-world scenarios to build confidence.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Calendar className="mx-auto h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Book lessons at your convenience. Morning and evening slots
                available to accommodate different time zones.
              </p>
            </div>
          </div>

          {/* Course Levels */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Course Levels
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <Star className="h-8 w-8 text-rose-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Beginner (N5-N4)</h3>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Basic greetings and conversations</li>
                    <li>• Hiragana and Katakana mastery</li>
                    <li>• Essential kanji (100-300 characters)</li>
                    <li>• Basic grammar patterns</li>
                  </ul>
                  <a
                    href="/sample/beginner"
                    className="inline-block border-2 border-rose-600 text-rose-600 px-4 py-2 rounded-md hover:bg-rose-600 hover:text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <Globe className="h-8 w-8 text-rose-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Intermediate (N3)</h3>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Complex conversation skills</li>
                    <li>• Business Japanese basics</li>
                    <li>• Intermediate kanji (500-800 characters)</li>
                    <li>• Advanced grammar patterns</li>
                  </ul>
                  <a
                    href="/sample/intermediate"
                    className="inline-block border-2 border-rose-600 text-rose-600 px-4 py-2 rounded-md hover:bg-rose-600 hover:text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <Users className="h-8 w-8 text-rose-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Advanced (N2-N1)</h3>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Native-level discussions</li>
                    <li>• Professional Japanese</li>
                    <li>• Advanced kanji (1500+ characters)</li>
                    <li>• Cultural context and nuances</li>
                  </ul>
                  <a
                    href="/sample/advanced"
                    className="inline-block border-2 border-rose-600 text-rose-600 px-4 py-2 rounded-md hover:bg-rose-600 hover:text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Your Japanese Journey Today
            </h2>
            <p className="text-gray-300 mb-8">
              Book a free 30-minute trial lesson and experience personalized
              Japanese learning
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700"
                >
                  Book Trial
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Sensei&apos;s Japanese Class. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
