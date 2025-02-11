import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      {/* Hero Section */}
      <header className="w-full py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">MinnaStudy</h1>
          <p className="text-xl sm:text-2xl mb-8">
            Your Complete Japanese Learning Hub
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Start Learning
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white/10 transition-colors">
              For Teachers
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Section */}
        <section className="mb-20 text-black">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Learning Games</h3>
              <p className="text-gray-600">
                Engaging games that make mastering Japanese fun and effective
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Study Apps</h3>
              <p className="text-gray-600">
                Tools for vocabulary, kanji, and grammar practice
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Teacher Resources</h3>
              <p className="text-gray-600">
                Professional tools and websites for language educators
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose MinnaStudy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Interactive Learning</h3>
                  <p className="text-gray-600">
                    Engaging content that makes learning Japanese enjoyable
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Proven Methods</h3>
                  <p className="text-gray-600">
                    Based on effective learning methodologies
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Comprehensive Resources
                  </h3>
                  <p className="text-gray-600">
                    Everything you need in one place
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Community Support</h3>
                  <p className="text-gray-600">
                    Learn and grow with fellow Japanese learners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-50 rounded-xl p-8 mb-20">
          <h2 className="text-3xl font-bold mb-4 text-black">Start Your Journey Today</h2>
          <p className="text-gray-600 mb-6">
            Join our community of Japanese learners
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
            Get Started
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">MinnaStudy</h3>
              <p className="text-gray-600">Your Japanese learning companion</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="text-gray-600">
                <li className="mb-2">Learning Games</li>
                <li className="mb-2">Study Apps</li>
                <li className="mb-2">Teacher Tools</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="text-gray-600">
                <li className="mb-2">Email: hello@minnastudy.com</li>
                <li className="mb-2">Twitter: @minnastudy</li>
              </ul>
            </div>
          </div> */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2025 MinnaStudy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
