import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import BookDemoModal from './BookDemoModal';
import { useBookDemo } from '../hooks/useBookDemo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isModalOpen, openModal, closeModal } = useBookDemo();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/AdrshyamAI Logo.png" 
              alt="AdrshyamAI" 
              className="h-20 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Solutions
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Features
            </a>
            <a href="#use-cases" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Use Cases
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Case Studies
            </a>
            <button 
              onClick={openModal}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Book a Demo
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Solutions
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Features
              </a>
              <a href="#use-cases" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Use Cases
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Case Studies
              </a>
              <button 
                onClick={openModal}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium w-fit"
              >
                Book a Demo
              </button>
            </nav>
          </div>
        )}
      </div>
      </header>
      
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}