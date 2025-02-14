import React from "react";
import { Globe, CheckCircle, Layers, Code } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      title: "Basic Plan (Template-Based)",
      price: "$20/month + $120 setup",
      description:
        "For teachers who want a simple, professional website using our template.",
      features: [
        "One-page template website",
        "Customizable pricing/lesson plan cards",
        "Social media links & email button",
        "Hosted on a Minna Study subdomain (ex: yourname.minnastudy.com)",
        "Basic SEO setup",
        "Access to add-ons for customization",
      ],
      icon: Globe,
    },
    {
      title: "Domain Plan",
      price: "$30/month + setup",
      description:
        "For teachers who want their own domain and extra features. You can purchase a domain from us or provide your own.",
      features: [
        "Everything in the Basic Plan",
        "Custom domain intergration (ex: yourname.com)",
        "Working contact form",
        "Separate pages (About, Lessons, Contact, etc.)",
        "Stripe integration (Checkout button for payments)",
        "Optional Calendly link for scheduling",
        "Option to use a template for a $120 setup fee or get a custom quote for full customization",
      ],
      icon: Layers,
    },
    {
      title: "Custom Website Development",
      price: "Custom Quote Required",
      description:
        "For teachers who need a fully custom-built website tailored to their specific needs. Pricing depends on the level of customization required.",
      features: [
        "Fully custom website design",
        "Advanced features tailored to your needs",
        "E-commerce integration (if needed)",
        "Student portals and advanced booking systems",
        "SEO optimization and analytics",
        "Custom branding and design options",
      ],
      icon: Code,
    },
  ];

  const addOns = [
    { title: "Extra Pages", description: "$50 per page" },
    { title: "Logo & Branding Package", description: "$80" },
    { title: "SEO Deep Optimization", description: "$100" },
    { title: "Priority Support", description: "$10/month" },
  ];

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen text-black">
      {/* Hero Section */}
      <header className="w-full py-16 bg-gradient-to-r from-indigo-500 to-primary-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Get a professional website tailored for your teaching business.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Pricing Plans Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="p-6 rounded-lg bg-white shadow-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  {React.createElement(plan.icon, {
                    className: "w-6 h-6 text-primary-600",
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-lg font-bold text-primary-600 mb-4">
                  {plan.price}
                </p>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="self-start text-primary-600 w-6 h-6 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons Section */}
        {/* <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Customize Your Plan with Add-Ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addOn, index) => (
              <div key={index} className="p-4 rounded-lg bg-white shadow-lg">
                <h3 className="text-lg font-semibold mb-2">{addOn.title}</h3>
                <p className="text-gray-600">{addOn.description}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Call-to-Action Section */}
        <section className="text-center bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Choose your plan and build your professional online presence today!
          </p>
          <a
            href="/contact"
            className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </section>
      </main>
    </div>
  );
}
