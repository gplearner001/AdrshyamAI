import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const footerLinks = {
  Solutions: ['AI Voice Agents', 'Call Auditing', 'Custom AI', 'API Integration'],
  Industries: ['Customer Support', 'Fintech', 'Healthcare', 'E-commerce', 'Telecom'],
  Resources: ['Documentation', 'Case Studies', 'Blog', 'Help Center', 'API Docs'],
  Company: ['About Us', 'Careers', 'Press', 'Partners', 'Contact']
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/AdrshyamAI Logo.png" 
                alt="AdrshyamAI" 
                className="h-20 w-auto"
              />
            </div>
            
            <p className="text-gray-400 max-w-md leading-relaxed">
              The invisible intelligence platform that transforms voice operations 
              with AI-powered call agents and real-time auditing capabilities.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>support@adrshyamai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} />
                <span>+91 6360154904</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>India</span>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 AdrshyamAI. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>SOC 2 Certified</span>
                </span>
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>GDPR Compliant</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}