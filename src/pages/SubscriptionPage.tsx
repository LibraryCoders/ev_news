import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ZapIcon, MailIcon, NewspaperIcon, TrendingUpIcon } from 'lucide-react';
const SubscriptionPage = () => {
  return <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Unlock{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Exclusive EV Insights
          </span>
        </h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Stay ahead of the curve with premium access to in-depth analysis,
          market trends, and exclusive content.
        </p>
      </div>
      <div className="relative max-w-xl mx-auto">
        {/* Glowing card effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30"></div>
        {/* Subscription card */}
        <div className="relative backdrop-blur-xl bg-[#0c1018]/90 border border-blue-800/50 rounded-2xl overflow-hidden">
          {/* Card header */}
          <div className="bg-gradient-to-r from-blue-900/60 to-indigo-900/60 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <ZapIcon className="h-6 w-6 text-blue-400" />
                  <div className="absolute inset-0 blur-md bg-blue-400/50 rounded-full"></div>
                </div>
                <span className="text-lg font-bold text-white">
                  Premium Plan
                </span>
              </div>
              <span className="bg-blue-600/30 text-blue-300 text-xs font-semibold py-1 px-3 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <div className="flex items-end mb-2">
              <span className="text-4xl font-bold text-white">$9.99</span>
              <span className="text-blue-300 ml-2">/month</span>
            </div>
            <p className="text-blue-200 text-sm">
              Cancel anytime. No commitment required.
            </p>
          </div>
          {/* Card body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                What's Included
              </h3>
              <ul className="space-y-3">
                <FeatureItem icon={<NewspaperIcon className="h-5 w-5" />} text="Access to 25 premium articles daily (instead of 5)" />
                <FeatureItem icon={<MailIcon className="h-5 w-5" />} text="Daily email updates with transcripts of the latest articles" />
                <FeatureItem icon={<TrendingUpIcon className="h-5 w-5" />} text="Enhanced real-time currency graphs with advanced insights" />
                <FeatureItem icon={<ZapIcon className="h-5 w-5" />} text="Early access to breaking news and market analysis" />
              </ul>
            </div>
            <button className="w-full relative overflow-hidden group py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-700/30">
              <span className="relative z-10">Subscribe Now</span>
              <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-blue-400/20 to-transparent"></div>
            </button>
            <p className="text-center text-xs text-blue-300">
              By subscribing, you agree to our{' '}
              <Link to="/terms" className="underline hover:text-blue-200">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="underline hover:text-blue-200">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Testimonial quote="Electric News Premium has been invaluable for staying ahead of EV market trends. The insights are top-notch." author="Alex Morgan" role="Tesla Investor" />
        <Testimonial quote="The in-depth analysis and early access to breaking news has completely changed how I approach the EV market." author="Sarah Chen" role="Industry Analyst" />
        <Testimonial quote="Worth every penny. The enhanced graphs and daily updates have improved my investment decisions significantly." author="Michael Rodriguez" role="Portfolio Manager" />
      </div>
      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FAQItem question="How is premium different from free access?" answer="Premium subscribers get access to 25 articles daily instead of 5, receive daily email updates, and can view enhanced market graphs with advanced insights." />
          <FAQItem question="Can I cancel my subscription anytime?" answer="Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period." />
          <FAQItem question="Do you offer a free trial?" answer="Yes, we offer a 7-day free trial for new subscribers. You can experience all premium features before being charged." />
          <FAQItem question="What payment methods do you accept?" answer="We accept all major credit cards, PayPal, and Apple Pay for subscription payments." />
        </div>
      </div>
    </div>;
};
const FeatureItem = ({
  icon,
  text
}) => <li className="flex items-start">
    <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-blue-400">{icon}</div>
    <span className="text-blue-100">{text}</span>
  </li>;
const Testimonial = ({
  quote,
  author,
  role
}) => <div className="backdrop-blur-sm bg-blue-900/10 border border-blue-800/30 rounded-xl p-6">
    <div className="flex-1">
      <p className="text-blue-100 mb-4">"{quote}"</p>
      <div>
        <p className="font-medium text-white">{author}</p>
        <p className="text-sm text-blue-400">{role}</p>
      </div>
    </div>
  </div>;
const FAQItem = ({
  question,
  answer
}) => <div className="backdrop-blur-sm bg-blue-900/10 border border-blue-800/30 rounded-xl p-6">
    <h3 className="text-lg font-medium text-white mb-2">{question}</h3>
    <p className="text-blue-200 text-sm">{answer}</p>
  </div>;
export default SubscriptionPage;