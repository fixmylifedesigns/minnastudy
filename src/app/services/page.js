import React from "react";
import {
  Globe,
  Code,
  Bot,
  Video,
  Image as ImageIcon,
  Calendar,
  Linkedin,
  Smartphone,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Website Development",
      description:
        "Get a professional teaching website that converts visitors into students. Includes SEO optimization and mobile-friendly design.",
      icon: Globe,
    },
    {
      title: "Booking System Integration",
      description:
        "Seamless integration with popular scheduling tools like Calendly, Google Calendar, or custom booking solutions.",
      icon: Calendar,
    },
    {
      title: "AI Content Creation Suite",
      description:
        "Learn to leverage AI tools for creating engaging educational content, social media posts, and teaching materials.",
      icon: Bot,
    },
    {
      title: "Social Media Integration",
      description:
        "Easily showcase all your social media profiles, including LINE, Instagram, LinkedIn, and more, directly on your website. Help students connect with you, stay updated on your content, and grow your teaching brand effortlessly.",
      icon: Linkedin,
    },
    {
      title: "Custom Teaching Apps",
      description:
        "Specialized applications for managing students, lessons, and educational content all in one place.",
      icon: Smartphone,
    },
    {
      title: "Content Production Training",
      description:
        "Learn to create professional videos, images, and educational materials using modern AI tools.",
      icon: Video,
    },
  ];

  const features = [
    {
      title: "Technical Expertise with Teaching Focus",
      description:
        "We understand both technology and education, creating solutions that work for teachers",
    },
    {
      title: "Future-Proof Solutions",
      description:
        "Stay ahead with AI integration and modern tech while keeping things simple to use",
    },
    {
      title: "Complete Digital Presence",
      description:
        "From websites to social media to content creation - everything you need to succeed online",
    },
    {
      title: "Ongoing Support",
      description:
        "Get help when you need it and learn to manage your digital presence confidently",
    },
  ];

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen text-black">
      {/* Hero Section */}
      <header className="w-full py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Digital Solutions for Modern Teachers
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Build your professional online presence with custom websites, apps,
            and AI-powered content creation tools
          </p>
          {/* <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/sample"
              className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Seea Template
            </a>
          </div> */}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Complete Digital Solutions for Teachers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 rounded-lg bg-white shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  {React.createElement(service.icon, {
                    className: "w-6 h-6 text-purple-600",
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Why Teachers Choose Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Get Your Professional Online Presence
          </h2>
          <div className="max-w-2xl mx-auto p-8 rounded-lg bg-white shadow-lg">
            <p className="text-lg text-center mb-6">
              We create custom digital solutions tailored to your teaching style
              and goals. Contact us to discuss your requirements and get a
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
                    <span>Integrated booking and payment systems</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>AI content creation tools and training</span>
                  </li>
                </ul>
              </div>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Your Teaching Business?
          </h2>
          <p className="text-gray-600 mb-6">
            Join other successful teachers with a professional online presence
          </p>
          <a
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors inline-block"
          >
            Start Building
          </a>
        </section>
      </main>
    </div>
  );
}
