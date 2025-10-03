import { Check, ArrowRight } from 'lucide-react';
import BookDemoModal from './BookDemoModal';
import { useBookDemo } from '../hooks/useBookDemo';

const plans = [
  {
    name: 'Lite',
    price: 599,
    minutes: 100,
    description: 'Perfect for small teams getting started',
    features: [
      '100 minutes included',
      'AI Voice Assistant',
      'Basic Analytics',
      'Email Support',
      'Standard Response Time'
    ]
  },
  {
    name: 'Standard',
    price: 1299,
    minutes: 275,
    description: 'Ideal for growing businesses',
    popular: true,
    features: [
      '275 minutes included',
      'AI Voice Assistant',
      'Advanced Analytics',
      'Priority Support',
      'Custom Workflows',
      'CRM Integration'
    ]
  },
  {
    name: 'Pro',
    price: 2499,
    minutes: 550,
    description: 'For high-volume operations',
    features: [
      '550 minutes included',
      'AI Voice Assistant',
      'Real-time Analytics',
      'Dedicated Support',
      'Advanced Workflows',
      'All Integrations',
      'API Access'
    ]
  },
  {
    name: 'Max',
    price: 3999,
    minutes: 800,
    description: 'Enterprise-grade solution',
    features: [
      '800 minutes included',
      'AI Voice Assistant',
      'Enterprise Analytics',
      '24/7 Premium Support',
      'Custom Development',
      'Unlimited Integrations',
      'API Access',
      'White-glove Onboarding'
    ]
  }
];

export default function Pricing() {
  const { isModalOpen, openModal, closeModal } = useBookDemo();

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. Scale up or down anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-xl scale-105'
                    : 'bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {plan.minutes} minutes included
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check
                        size={20}
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-blue-600' : 'text-gray-400'
                        }`}
                      />
                      <span className="ml-3 text-gray-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openModal}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              All plans include a 14-day free trial • No credit card required
            </p>
            <p className="text-sm text-gray-500">
              Need more minutes? Additional minutes available at competitive rates.
            </p>
          </div>
        </div>
      </section>

      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
