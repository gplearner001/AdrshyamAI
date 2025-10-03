import { Languages as LanguagesIcon, Globe } from 'lucide-react';

const languages = [
  'English',
  'Hindi',
  'Bengali',
  'Gujarati',
  'Kannada',
  'Malayalam',
  'Marathi',
  'Odia',
  'Punjabi',
  'Tamil',
  'Telugu'
];

export default function Languages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 mb-6">
            <Globe className="w-8 h-8 text-blue-600" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Multi-Language
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}Support
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our AI Voice Assistant speaks your customers' language. Connect with diverse audiences
            across India and beyond with natural, fluent conversations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <LanguagesIcon className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">
                Supported Languages
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg px-4 py-3 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 text-center"
                >
                  <span className="text-gray-800 font-medium">{language}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-300">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">11+</div>
                  <div className="text-sm text-gray-600">Languages Supported</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">1B+</div>
                  <div className="text-sm text-gray-600">People Reached</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">99%</div>
                  <div className="text-sm text-gray-600">Recognition Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need support for additional languages?
              <button className="text-blue-600 hover:text-blue-700 font-medium ml-1 underline">
                Contact us
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
