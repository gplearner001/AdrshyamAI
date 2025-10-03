import { ArrowRight, Play, Phone, BarChart3, Zap } from 'lucide-react';
import BookDemoModal from './BookDemoModal';
import { useBookDemo } from '../hooks/useBookDemo';

export default function Hero() {
  const { isModalOpen, openModal, closeModal } = useBookDemo();

  return (
    <>
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium">
                🤖 AI Voice & Call Intelligence Platform
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Invisible Assistant.
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {' '}Visible Success.
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your voice operations with AI that works silently in the background. 
                24/7 intelligent call handling, real-time auditing, and custom solutions that 
                enhance customer experience without disruption.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💰 Best-in-Class Pricing*</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-green-600">₹4/min*</div>
                    <div className="text-sm text-gray-600">AI Voice Assistant</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600">₹0.50/min*</div>
                    <div className="text-sm text-gray-600">AI Call Audit</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">*Basic pricing. Contact us for custom enterprise rates.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openModal}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
              >
                <span>Book a Demo</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">AI Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">70%</div>
                <div className="text-sm text-gray-600">Faster Audits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Live Call Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Active</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">AI Voice Agent</div>
                        <div className="text-sm text-gray-600">Handling customer inquiry</div>
                      </div>
                    </div>
                    <div className="text-blue-600 font-semibold">Active</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-medium text-gray-900">Call Auditing</div>
                        <div className="text-sm text-gray-600">Real-time quality analysis</div>
                      </div>
                    </div>
                    <div className="text-purple-600 font-semibold">98%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-gray-900">Response Time</div>
                        <div className="text-sm text-gray-600">Average handling time</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold">1.2s</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
        </div>
      </section>
      
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}