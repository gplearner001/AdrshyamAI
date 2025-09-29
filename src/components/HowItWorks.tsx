import { ArrowRight, Settings, Brain, Rocket, BarChart3 } from 'lucide-react';
import BookDemoModal from './BookDemoModal';
import { useBookDemo } from '../hooks/useBookDemo';

const steps = [
  {
    icon: Settings,
    title: 'Integration',
    description: 'Seamless setup with your existing phone systems, CRM, and workflows in under 24 hours.',
    details: ['API integration', 'System compatibility check', 'Custom configuration'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'Training',
    description: 'AI learns your business processes, terminology, and customer interaction patterns.',
    details: ['Industry-specific training', 'Custom knowledge base', 'Voice pattern optimization'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Go live with intelligent voice agents and real-time call auditing capabilities.',
    details: ['Gradual rollout', 'Performance monitoring', '24/7 support'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Insights',
    description: 'Continuous optimization with detailed analytics and performance improvements.',
    details: ['Real-time dashboards', 'Performance metrics', 'Optimization recommendations'],
    color: 'from-orange-500 to-red-500'
  }
];

export default function HowItWorks() {
  const { isModalOpen, openModal, closeModal } = useBookDemo();

  return (
    <>
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How AdrshyamAI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From setup to success in four simple steps. Our invisible AI integration 
            ensures minimal disruption while maximizing results.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="group text-center">
                  {/* Step Number */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} p-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 z-20">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={openModal}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold"
          >
            Start Your Integration Today
          </button>
        </div>
        </div>
      </section>
      
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}