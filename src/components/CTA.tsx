import { ArrowRight, CheckCircle, Calendar, Phone, Mail } from 'lucide-react';
import BookDemoModal from './BookDemoModal';
import { useBookDemo } from '../hooks/useBookDemo';

const benefits = [
  'Free 14-day trial with full features',
  'No setup fees or hidden costs',
  'White-glove onboarding included',
  '24/7 technical support'
];

const ctaOptions = [
  {
    icon: Calendar,
    title: 'Book a Demo',
    description: 'See AdrshyamAI in action with a personalized demonstration',
    action: 'Schedule Demo',
    primary: true
  },
  {
    icon: Phone,
    title: 'Speak with Expert',
    description: 'Discuss your specific needs with our AI specialists',
    action: 'Call Now',
    primary: false
  },
  {
    icon: Mail,
    title: 'Get Proposal',
    description: 'Receive a custom proposal tailored to your business',
    action: 'Request Proposal',
    primary: false
  }
];

export default function CTA() {
  const { isModalOpen, openModal, closeModal } = useBookDemo();

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Call Operations?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join hundreds of companies already using AdrshyamAI to deliver exceptional 
            customer experiences with invisible AI intelligence.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-700">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {ctaOptions.map((option, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                option.primary 
                  ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 hover:border-blue-300 hover:shadow-xl' 
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl p-3 mb-4 ${
                option.primary 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                  : 'bg-gray-100'
              }`}>
                <option.icon className={`w-6 h-6 ${option.primary ? 'text-white' : 'text-gray-600'}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {option.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {option.description}
              </p>

              <button 
                onClick={index === 0 ? openModal : undefined}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                option.primary
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                  : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                <span>{option.action}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">
            Trusted by 500+ companies worldwide • SOC 2 Type II Certified • GDPR Compliant
          </p>
          <div className="flex items-center justify-center space-x-8 text-xs text-gray-400">
            <span>🔒 Enterprise Security</span>
            <span>⚡ 99.9% Uptime SLA</span>
            <span>🌍 Global Infrastructure</span>
            <span>📞 24/7 Support</span>
          </div>
        </div>
        </div>
      </section>
      
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}