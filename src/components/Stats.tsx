const stats = [
  { number: '10M+', label: 'API Calls Daily', color: 'from-blue-500 to-cyan-500' },
  { number: '99.99%', label: 'Uptime SLA', color: 'from-green-500 to-emerald-500' },
  { number: '150+', label: 'Countries Served', color: 'from-purple-500 to-pink-500' },
  { number: '<50ms', label: 'Average Response', color: 'from-orange-500 to-red-500' }
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300">
            Powering AI solutions for companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}