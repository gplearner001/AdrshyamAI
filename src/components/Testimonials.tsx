import { Star, Quote, TrendingUp, Clock, Users } from 'lucide-react';

const testimonials = [
  {
    company: 'TechFlow Solutions',
    industry: 'SaaS',
    logo: '🚀',
    quote: 'AdrshyamAI reduced our call audit time by 70% while improving quality scores across all agents. The invisible integration meant zero disruption to our existing workflows.',
    author: 'Sarah Chen',
    role: 'VP of Customer Success',
    metrics: [
      { icon: Clock, value: '70%', label: 'Faster Audits' },
      { icon: TrendingUp, value: '25%', label: 'Quality Improvement' }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    company: 'FinanceFirst Bank',
    industry: 'Financial Services',
    logo: '🏦',
    quote: 'The AI voice agents handle 80% of our routine inquiries flawlessly. Our customers love the instant response times, and our agents can focus on complex cases.',
    author: 'Michael Rodriguez',
    role: 'Head of Operations',
    metrics: [
      { icon: Users, value: '80%', label: 'Automated Calls' },
      { icon: TrendingUp, value: '45%', label: 'CSAT Increase' }
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    company: 'HealthCare Plus',
    industry: 'Healthcare',
    logo: '🏥',
    quote: 'HIPAA-compliant AI that actually understands medical terminology. Patient satisfaction is up 40% since implementing AdrshyamAI for appointment scheduling.',
    author: 'Dr. Emily Watson',
    role: 'Chief Medical Officer',
    metrics: [
      { icon: Users, value: '40%', label: 'Patient Satisfaction' },
      { icon: Clock, value: '60%', label: 'Scheduling Efficiency' }
    ],
    color: 'from-red-500 to-pink-500'
  }
];

const stats = [
  { number: '10,000+', label: 'Calls Processed Daily', color: 'from-blue-500 to-cyan-500' },
  { number: '99.2%', label: 'Customer Satisfaction', color: 'from-green-500 to-emerald-500' },
  { number: '65%', label: 'Average Cost Reduction', color: 'from-purple-500 to-pink-500' },
  { number: '<24hrs', label: 'Implementation Time', color: 'from-orange-500 to-red-500' }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies across industries are transforming their call operations 
            with AdrshyamAI's invisible intelligence platform.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.logo}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.company}</div>
                    <div className="text-sm text-gray-600">{testimonial.industry}</div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-gray-300 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {testimonial.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center p-3 bg-white rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <metric.icon className="w-4 h-4 text-gray-600 mr-1" />
                    </div>
                    <div className={`text-lg font-bold bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Platform Performance
            </h3>
            <p className="text-gray-300">
              Real results from real customers
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}