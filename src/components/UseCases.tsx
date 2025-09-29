import { Headphones, CreditCard, Heart, ShoppingCart, Phone, Building } from 'lucide-react';
import BookDemoModal from './BookDemoModal';
import { useBookDemo } from '../hooks/useBookDemo';

const industries = [
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Transform support operations with AI agents that handle inquiries 24/7, escalate complex issues intelligently, and maintain consistent service quality.',
    useCases: ['Technical support automation', 'Order status inquiries', 'Account management', 'Complaint resolution'],
    stats: { metric: '85%', label: 'Faster Resolution' },
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CreditCard,
    title: 'Fintech',
    description: 'Secure, compliant AI solutions for financial services with fraud detection, account verification, and personalized financial guidance.',
    useCases: ['Account verification', 'Fraud detection calls', 'Payment disputes', 'Financial advisory'],
    stats: { metric: '92%', label: 'Fraud Detection' },
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'HIPAA-compliant AI agents for appointment scheduling, prescription refills, and patient follow-ups with medical terminology expertise.',
    useCases: ['Appointment scheduling', 'Prescription refills', 'Insurance verification', 'Patient follow-ups'],
    stats: { metric: '60%', label: 'Reduced Wait Times' },
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Boost sales with AI agents that handle product inquiries, process orders, manage returns, and provide personalized recommendations.',
    useCases: ['Product recommendations', 'Order processing', 'Return management', 'Inventory inquiries'],
    stats: { metric: '35%', label: 'Sales Increase' },
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Phone,
    title: 'Telecom',
    description: 'Streamline telecom operations with AI that handles service inquiries, technical support, billing questions, and service activations.',
    useCases: ['Service activation', 'Technical troubleshooting', 'Billing inquiries', 'Plan upgrades'],
    stats: { metric: '70%', label: 'Cost Reduction' },
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Building,
    title: 'Enterprise',
    description: 'Custom AI solutions for large organizations with complex workflows, multi-department routing, and enterprise-grade security.',
    useCases: ['Internal helpdesk', 'Vendor management', 'Employee onboarding', 'Compliance monitoring'],
    stats: { metric: '50%', label: 'Efficiency Gain' },
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function UseCases() {
  const { isModalOpen, openModal, closeModal } = useBookDemo();

  return (
    <>
      <section id="use-cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry-Specific AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AdrshyamAI adapts to your industry's unique requirements, compliance needs, 
            and operational challenges with specialized AI agents and auditing capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${industry.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                    {industry.stats.metric}
                  </div>
                  <div className="text-sm text-gray-600">{industry.stats.label}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {industry.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {industry.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 text-sm">Key Use Cases:</h4>
                {industry.useCases.map((useCase, useCaseIndex) => (
                  <div key={useCaseIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see your industry? We create custom AI solutions for any business vertical.
          </p>
          <button 
            onClick={openModal}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold"
          >
            Discuss Your Use Case
          </button>
        </div>
        </div>
      </section>
      
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}