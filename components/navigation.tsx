'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsSmall(window.innerWidth < 640);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const logoSrc = '/flowafric-1.png';

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src={logoSrc}
                alt="FlowAfric" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-white hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="text-white hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-white hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
              <a href="https://flowafric.app" target="_blank" rel="noopener noreferrer">
                Launch App
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-800 p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-t border-slate-700">
            <Link href="/" className="text-white hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-white hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
            <Link href="/faq" className="text-white hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="text-white hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <div className="pt-4">
              <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-blue-600">
                <a href="https://flowafric.app" target="_blank" rel="noopener noreferrer">
                  Launch App
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}