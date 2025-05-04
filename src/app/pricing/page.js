"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("web");

  const webPlans = [
    {
      name: "Starter",
      description: "Quickly and easily meet your core design needs",
      price: "₹4999",
      features: [
        { name: "Responsive Design", included: true },
        { name: "Contact Integration", included: true },
        { name: "Whatsapp Chat Button", included: true },
        { name: "Analytics Integration", included: true },
        { name: "Basic SEO Optimization", included: true },
        { name: "Hosting", included: true },
        { name: "Custom Domain", included: true },
        { name: "Animations", included: false },
        { name: "Figma Design", included: false },
        { name: "Admin Dashboard", included: false },
        { name: "Customisations", included: false },
        { name: "30 Day After Service", included: false },
      ],
      color: "indigo",
      popular: false,
    },
    {
      name: "Pro",
      description: "Full-service creative for everything you need",
      price: "₹15999",
      features: [
        { name: "Responsive Design", included: true },
        { name: "Contact Integration", included: true },
        { name: "Whatsapp Chat Button", included: true },
        { name: "Analytics Integration", included: true },
        { name: "Basic SEO Optimization", included: true },
        { name: "Hosting", included: true },
        { name: "Custom Domain", included: true },
        { name: "Animations", included: true },
        { name: "Figma Design", included: false },
        { name: "Admin Dashboard", included: false },
        { name: "Customisations", included: false },
        { name: "30 Day After Service", included: false },
      ],
      color: "indigo",
      popular: true,
    },
    {
      name: "Premium",
      description: "Creative service for growth and performance marketing",
      price: "₹18999",
      features: [
        { name: "Responsive Design", included: true },
        { name: "Contact Integration", included: true },
        { name: "Whatsapp Chat Button", included: true },
        { name: "Analytics Integration", included: true },
        { name: "Basic SEO Optimization", included: true },
        { name: "Hosting", included: true },
        { name: "Custom Domain", included: true },
        { name: "Animations", included: true },
        { name: "Figma Design", included: true },
        { name: "Admin Dashboard", included: true },
        { name: "Customisations", included: true },
        { name: "30 Day After Service", included: true },
      ],
      color: "indigo",
      popular: false,
    },
  ];
  
  const appPlans = [
    {
      name: "Basic App",
      description: "Essential features for your mobile application",
      price: "₹49,999",
      features: [
        { name: "Native Android Development", included: true },
        { name: "User Authentication", included: true },
        { name: "Push Notifications", included: true },
        { name: "Basic UI/UX Design", included: true },
        { name: "App Store Submission", included: true },
        { name: "3 Months Support", included: true },
        { name: "Analytics Integration", included: true },
        { name: "In-App Purchases", included: false },
        { name: "Offline Mode", included: false },
        { name: "Custom Admin Panel", included: false },
        { name: "API Development", included: false },
        { name: "Multi-language Support", included: false },
      ],
      color: "indigo",
      popular: false,
    },
    {
      name: "Professional App",
      description: "Complete solution for business applications",
      price: "₹99,999",
      features: [
        { name: "Native Android & iOS Development", included: true },
        { name: "User Authentication", included: true },
        { name: "Push Notifications", included: true },
        { name: "Advanced UI/UX Design", included: true },
        { name: "App Store Submission", included: true },
        { name: "6 Months Support", included: true },
        { name: "Analytics Integration", included: true },
        { name: "In-App Purchases", included: true },
        { name: "Offline Mode", included: true },
        { name: "Custom Admin Panel", included: false },
        { name: "API Development", included: false },
        { name: "Multi-language Support", included: false },
      ],
      color: "indigo",
      popular: true,
    },
    {
      name: "Enterprise App",
      description: "Full-featured solution with custom backend",
      price: "₹1,49,999",
      features: [
        { name: "Native Android & iOS Development", included: true },
        { name: "User Authentication", included: true },
        { name: "Push Notifications", included: true },
        { name: "Premium UI/UX Design", included: true },
        { name: "App Store Submission", included: true },
        { name: "12 Months Support", included: true },
        { name: "Analytics Integration", included: true },
        { name: "In-App Purchases", included: true },
        { name: "Offline Mode", included: true },
        { name: "Custom Admin Panel", included: true },
        { name: "API Development", included: true },
        { name: "Multi-language Support", included: true },
      ],
      color: "indigo",
      popular: false,
    },
  ];

  return (
    <div className="pt-28 bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Transparent <span className="text-indigo-600">Pricing</span> Plans
            </h1>
            <p className="text-lg text-slate-600 mb-10">
              Choose the perfect plan that aligns with your business goals. No hidden fees, just clear value.
            </p>
            
            {/* Services Tab Toggle */}
            <div className="inline-flex items-center bg-slate-100 p-1 rounded-lg mb-10">
              <button
                onClick={() => setActiveTab("web")}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "web"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-700 hover:text-indigo-600"
                }`}
              >
                Web Development
              </button>
              <button
                onClick={() => setActiveTab("app")}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "app"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-700 hover:text-indigo-600"
                }`}
              >
                App Development
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeTab === "web" ? webPlans : appPlans).map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border ${
                  plan.popular ? 'border-indigo-500' : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-6 h-12">{plan.description}</p>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold text-slate-800">
                      {plan.price}
                    </span>
                    <span className="text-slate-500 ml-2">one-time</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`flex-shrink-0 mt-1 ${feature.included ? 'text-green-500' : 'text-red-500'}`}>
                          {feature.included ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className={`ml-3 text-sm ${feature.included ? 'text-slate-700' : 'text-slate-500 line-through'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={`/contact?plan=${plan.name}`}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {activeTab === "web" ? (
                <>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      What&apos;s included in the hosting?
                    </h3>
                    <p className="text-slate-600">
                      Our hosting includes fast servers, SSL certificate, security monitoring, and regular backups to ensure your website stays online and secure.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      What is the 30-day after service?
                    </h3>
                    <p className="text-slate-600">
                      After your website goes live, we provide 30 days of support for minor adjustments, bug fixes, and content updates at no additional cost.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      Can I upgrade my plan later?
                    </h3>
                    <p className="text-slate-600">
                      Yes, you can upgrade to a higher plan at any time. We'll simply charge the difference between your current plan and the new one.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      Do you offer custom solutions beyond these packages?
                    </h3>
                    <p className="text-slate-600">
                      Absolutely! If you have specific requirements that aren't covered in our standard packages, we offer custom solutions tailored to your needs. Contact us for a personalized quote.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      What platforms do you develop for?
                    </h3>
                    <p className="text-slate-600">
                      We develop native applications for Android and iOS platforms, as well as cross-platform solutions depending on your requirements and budget.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      What does the support period include?
                    </h3>
                    <p className="text-slate-600">
                      Our support includes bug fixes, minor updates, technical assistance, and compatibility updates for new OS versions released during the support period.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      How long does it take to develop an app?
                    </h3>
                    <p className="text-slate-600">
                      Development timelines vary based on complexity, but typically range from 3-4 months for basic apps to 6-9 months for more complex enterprise solutions.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      Do you offer custom app development beyond these packages?
                    </h3>
                    <p className="text-slate-600">
                      Absolutely! If you have specific requirements that aren't covered in our standard packages, we offer custom solutions tailored to your needs. Contact us for a personalized quote.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-indigo-100">
            Have questions about which plan is right for you? Our team is here to help you make the right choice for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-900 hover:bg-indigo-100 py-3 px-8 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <a
              href={`https://wa.me/+918089640469?text=Hello, I&apos;m interested in your ${activeTab === "web" ? "web" : "app"} development services.`}
              className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-lg font-semibold transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}