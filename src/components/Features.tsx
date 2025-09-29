import { Bot, BarChart3, Settings, Clock, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Invisible AI Voice Agent',
    description: '24/7 intelligent customer handling with natural conversation flow, context awareness, and seamless escalation to human agents when needed.',
    benefits: ['Zero wait times', 'Consistent quality', 'Multi-language support', 'Natural conversations'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BarChart3,
    title: 'Smart Call Auditing',
    description: 'Real-time insights, quality monitoring, and sentiment analysis that automatically scores every interaction and identifies improvement opportunities.',
    benefits: ['Real-time scoring', 'Sentiment analysis', 'Compliance monitoring', 'Performance insights'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Settings,
    title: 'Custom AI Solutions',
    description: 'Built specifically to meet your business needs with industry-specific training, custom workflows, and seamless integration capabilities.',
    benefits: ['Industry-specific', 'Custom workflows', 'API integration', 'Scalable architecture'],
    color: 'from-green-500 to-emerald-500'
  }
];

const additionalFeatures = [
  {
    icon: Clock,
    title: 'Instant Response',
    description: 'Sub-second response times with intelligent routing and priority handling.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, and GDPR-ready data handling.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Easy Integration',
    description: 'Plug-and-play setup with existing phone systems and CRM platforms.',
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful AI Features That Work Invisibly
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI capabilities designed to enhance your call operations without disrupting 
            your existing workflows or customer experience.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.color} p-2 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}