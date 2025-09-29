'use client';

import { useState, useEffect } from 'react';
import { Wallet, Bitcoin, ShoppingBag, Users, Phone, Zap, Shield, TrendingUp } from 'lucide-react';

const screens = [
  {
    title: 'Dashboard',
    content: (
      <div className="p-4 space-y-4">
        <div className="text-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">Good Morning, Alex</h2>
          <p className="text-sm text-gray-600">Welcome back to FlowAfric</p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-xl text-white animate-pulse-glow">
            <Wallet className="h-6 w-6 mb-2" />
            <p className="text-xs opacity-90">Naira Wallet</p>
            <p className="text-lg font-bold">₦125,000</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl text-white animate-pulse-glow">
            <Bitcoin className="h-6 w-6 mb-2" />
            <p className="text-xs opacity-90">Crypto Wallet</p>
            <p className="text-lg font-bold">$2,450</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white animate-pulse-glow">
            <ShoppingBag className="h-6 w-6 mb-2" />
            <p className="text-xs opacity-90">FlowHub</p>
            <p className="text-xs">Marketplace</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl text-white animate-pulse-glow">
            <Users className="h-6 w-6 mb-2" />
            <p className="text-xs opacity-90">FlowConnect</p>
            <p className="text-xs">P2P Trading</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-xl text-white animate-pulse-glow">
          <div className="flex items-center justify-between">
            <div>
              <Phone className="h-6 w-6 mb-2" />
              <p className="text-sm font-medium">VoIP Calls</p>
              <p className="text-xs opacity-90">234 mins remaining</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">🇳🇬</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'FlowHub Marketplace',
    content: (
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">FlowHub</h2>
          <p className="text-sm text-gray-600">Secure marketplace with escrow</p>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">iPhone 14 Pro</p>
                <p className="text-xs text-gray-600">Verified Seller</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-emerald-600">₦850,000</p>
                <p className="text-xs text-gray-500">Escrow: 1%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">MacBook Air M2</p>
                <p className="text-xs text-gray-600">Premium Merchant</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-600">₦1,200,000</p>
                <p className="text-xs text-gray-500">Escrow Optional</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-3">
            <div className="text-center">
              <Zap className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-800">Instant Delivery</p>
              <p className="text-xs text-gray-600">Digital goods delivered immediately</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'FlowConnect P2P',
    content: (
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">FlowConnect</h2>
          <p className="text-sm text-gray-600">Instant P2P Balance Trading</p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-emerald-800">Maker Orders</span>
              <TrendingUp className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Buy USDT</span>
                <span className="font-bold">₦750/USDT</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sell BTC</span>
                <span className="font-bold">₦28M/BTC</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-800">Taker Mode</span>
              <Zap className="h-4 w-4 text-blue-600" />
            </div>
            <p className="text-xs text-blue-700 mb-3">Instant execution at market rates</p>
            <div className="flex space-x-2">
              <button className="flex-1 bg-emerald-600 text-white py-2 px-3 rounded-lg text-xs font-medium">
                Quick Buy
              </button>
              <button className="flex-1 bg-orange-600 text-white py-2 px-3 rounded-lg text-xs font-medium">
                Quick Sell
              </button>
            </div>
          </div>
          
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              💡 Makers set rates, Takers get instant trades
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'VoIP Calling',
    content: (
      <div className="p-4">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Phone className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-lg font-bold text-gray-800">VoIP Calling</h2>
          <p className="text-sm text-gray-600">Crystal clear international calls</p>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-green-600">🇺🇸</span>
                </div>
                <div>
                  <p className="font-medium text-sm">+1 (555) 123-4567</p>
                  <p className="text-xs text-gray-600">Recent call - 5 min</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <Phone className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">🇬🇧</span>
                </div>
                <div>
                  <p className="font-medium text-sm">+44 20 1234 5678</p>
                  <p className="text-xs text-gray-600">Family contact</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-lg">
            <div className="text-center">
              <p className="text-sm font-medium mb-1">Call Credit</p>
              <p className="text-2xl font-bold animate-pulse">234 mins</p>
              <p className="text-xs opacity-90">Remaining this month</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export function PhoneMockup() {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto animate-glow">
      {/* Phone Frame */}
      <div className="relative w-64 h-[520px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl ring-4 ring-emerald-500/20">
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="bg-white px-4 py-2 flex justify-between items-center text-xs font-medium border-b border-gray-100">
            <span>9:41</span>
            <span className="font-bold text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">FlowAfric</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2 bg-emerald-500 rounded-sm"></div>
              <span>100%</span>
            </div>
          </div>

          {/* Screen Content */}
          <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-500 ease-in-out">
            {screens[currentScreen].content}
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Screen Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentScreen(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentScreen === index ? 'bg-emerald-400 animate-pulse-glow' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
