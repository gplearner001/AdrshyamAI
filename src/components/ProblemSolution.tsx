import { AlertCircle, CheckCircle, Clock, TrendingDown, Users } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Long Call Wait Times',
    description: 'Customers abandon calls due to extended hold periods, leading to lost revenue and poor satisfaction.',
    color: 'text-red-500'
  },
  {
    icon: TrendingDown,
    title: 'Inconsistent Support Quality',
    description: 'Human agents provide varying levels of service, creating unpredictable customer experiences.',
    color: 'text-orange-500'
  },
  {
    icon: AlertCircle,
    title: 'Manual Audit Processes',
    description: 'Time-consuming manual call reviews miss critical insights and delay quality improvements.',
    color: 'text-yellow-500'
  }
];

const solutions = [
  {
    icon: CheckCircle,
    title: '24/7 AI Voice Agents',
    description: 'Intelligent agents handle calls instantly, eliminating wait times and providing consistent, high-quality support around the clock.',
    color: 'text-green-500'
  },
  {
    icon: CheckCircle,
    title: 'Smart Call Auditing',
    description: 'Real-time AI analysis provides instant quality scores, sentiment analysis, and actionable insights for every interaction.',
    color: 'text-blue-500'
  },
  {
    icon: CheckCircle,
    title: 'Custom AI Solutions',
    description: 'Tailored AI implementations designed specifically for your business needs, industry requirements, and operational goals.',
    color: 'text-purple-500'
  }
];

export default function ProblemSolution() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From Pain Points to Performance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional call operations face critical challenges. AdrshyamAI's invisible intelligence 
            transforms these obstacles into competitive advantages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center lg:justify-start">
                <AlertCircle className="w-6 h-6 text-red-500 mr-2" />
                Common Challenges
              </h3>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="p-6 border border-red-200 rounded-xl bg-red-50/50">
                  <div className="flex items-start space-x-4">
                    <problem.icon className={`w-6 h-6 ${problem.color} flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{problem.title}</h4>
                      <p className="text-gray-600">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                AdrshyamAI Solutions
              </h3>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="p-6 border border-green-200 rounded-xl bg-green-50/50">
                  <div className="flex items-start space-x-4">
                    <solution.icon className={`w-6 h-6 ${solution.color} flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{solution.title}</h4>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}