'use client'
import React from "react";
import Link from "next/link";

export default function TeacherApplication() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      {/* Hero Section */}
      <header className="w-full py-16 bg-gradient-to-r from-indigo-500 to-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            MinnaStudy Creator Grant: Free Website Program for Teachers
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            We’re selecting a few teachers to receive a professional website—for
            free!
          </p>
          <Link
            href="/creatorgrant/apply"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply for MinnaStudy Creator Grant
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Program Details Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            What’s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Full Website Setup & Publishing
              </h3>
              <p className="text-gray-600">
                Normally ¥20,000 ($130), yours free!
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">
                6 Months Free Hosting
              </h3>
              <p className="text-gray-600">
                Enjoy 6 months of free hosting (normally ¥3,000 or $20 per
                month).
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">
                A Professional Website Template
              </h3>
              <p className="text-gray-600">
                Designed specifically for educators.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Domain & Upgrade Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">
                  Free Subdomain
                </h3>
                <p className="text-gray-600">
                  Get your free yourname.minnastudy.com domain.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">
                  Bring Your Own Domain
                </h3>
                <p className="text-gray-600">
                  Already have a domain? We’ll integrate it at no extra cost.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">
                  Upgrade Anytime
                </h3>
                <p className="text-gray-600">
                  Upgrade to a unique domain for ¥4,500 ($30) per month.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">
                  Don&apos;t have a domain?
                </h3>
                <p className="text-gray-600">
                  You can buy a unique domain with us and we will handle the rest
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information Section */}
        <section className="mb-20">
          <div className="max-w-2xl mx-auto p-8 rounded-lg bg-white shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Important Information
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                Upgrading to a unique domain within 6 months ends the free
                hosting period, and billing at ¥4,500 ($30) per month begins
                immediately.
              </li>
              <li>
                We also offer custom web designs and Stripe integration at an
                additional cost. Contact us for more details.
              </li>
              <li>
                This opportunity is limited to selected applicants and is not
                guaranteed for all submissions.
              </li>
            </ul>
          </div>
        </section>

        {/* Application CTA */}
        <section className="text-center bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-black">Apply Now</h2>
          <p className="text-gray-600 mb-6">
            Submit your application to be considered for our free website
            program.
          </p>
          <Link
            href="/creatorgrant/apply"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Apply for MinnaStudy Creator Grant
          </Link>
        </section>
      </main>
    </div>
  );
}
