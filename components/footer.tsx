import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image 
                src="/flowafric-1.png"
                alt="FlowAfric" 
                width={200}
                height={56}
                className="h-14 w-auto animate-pulse-glow"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connect • Call • Pay - The ultimate super app for Africans. Manage your finances, trade cryptocurrencies, make calls, and shop securely.
            </p>
            <div className="flex space-x-4">
              <a
                href={process.env.NEXT_PUBLIC_TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">📍 KM 5, Iworoko Road</span>
                <span className="block">behind Pathfinder Hotel</span>
                <span className="block">Ado-Ekiti, Ekiti State, Nigeria</span>
              </li>
              <li className="text-gray-300">
                📞 {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
              </li>
              <li className="text-gray-300">
                📧 {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <p className="text-center text-gray-400">
            © {currentYear} FlowAfric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}