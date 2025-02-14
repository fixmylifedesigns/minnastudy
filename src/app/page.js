import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      {/* Hero Section */}
      <div className="w-full bg-yellow-400 text-black text-center py-2 font-semibold">
        🎉 Apply for our Creator Grant for a chance to get a free professional
        website!{" "}
        <Link href="/creatorgrant" className="underline">
          Learn more
        </Link>
      </div>

      <header className="w-full py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Your Professional Website, Built for You
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Showcase your pricing, plans, and experience with a custom website.
            Get a personalized .com or a subdomain like yourname.minnastudy.com
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/sample"
              className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              See a template
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Section */}
        <section className="mb-20 text-black">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Everything You Need for a Professional Online Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Website</h3>
              <p className="text-gray-600">
                Fully designed website tailored to your brand and teaching style
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Your Domain</h3>
              <p className="text-gray-600">
                Choose your own .com or use our free yourname.minnastudy.com
                domain
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">SEO Optimized</h3>
              <p className="text-gray-600">
                Help potential students find you easily through search engines
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Why Language Teachers Trust Minna Study
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-black">
                    Teacher-Focused Design
                  </h3>
                  <p className="text-gray-600">
                    We understand what teachers need – focused on showcasing
                    your services effectively
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-black">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    No Technical Skills Needed
                  </h3>
                  <p className="text-gray-600">
                    We handle everything for you - just share your content
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
                  <h3 className="font-semibold mb-2 text-black">
                    Easy Contact Integration
                  </h3>
                  <p className="text-gray-600 text-black">
                    Connect with LINE, Instagram, Email, and more
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-black">
                    Booking Integration
                  </h3>
                  <p className="text-gray-600">
                    Optional scheduling with Google Calendar, Calendly, or LINE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20 ">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Get Your Custom Website
          </h2>
          <div className="max-w-2xl mx-auto p-8 rounded-lg bg-white shadow-lg text-black">
            <p className="text-lg text-center mb-6">
              We create custom websites tailored to your teaching needs and
              budget. Contact us to discuss your requirements and get a
              personalized quote.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">
                  Available Options Include:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Custom domain or free minnastudy.com subdomain</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Personalized pages for your services</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Booking system integration</span>
                  </li>
                </ul>
              </div>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Contact Us for Details
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-50 rounded-xl p-8 mb-20">
          <h2 className="text-3xl font-bold mb-4 text-blackFlexible Schedule Options text-black">
            Get Your Website Today
          </h2>
          <p className="text-gray-600 mb-6">
            Join other successful language teachers online
          </p>
          <Link
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Building
          </Link>
        </section>
      </main>
    </div>
  );
}
