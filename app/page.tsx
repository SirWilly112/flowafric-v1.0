import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneMockup } from '@/components/phone-mockup';
import { NewsletterForm } from '@/components/newsletter-form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { 
  Wallet, 
  Bitcoin, 
  ShoppingBag, 
  Users, 
  Phone, 
  Clock,
  Shield,
  TrendingDown,
  Code
} from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'Naira Wallet',
    description: 'Store and manage your Nigerian Naira funds locally with bank-grade security and instant access.',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Bitcoin,
    title: 'Crypto Wallet',
    description: 'Manage Bitcoin & USDT with advanced security features and real-time market tracking.',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    icon: ShoppingBag,
    title: 'FlowHub Marketplace',
    description: 'Browse verified merchants with optional escrow protection. Only 1% escrow fee for maximum security.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Users,
    title: 'FlowConnectBalance',
    description: 'Instant P2P cryptocurrency trading between makers and takers with competitive rates.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Phone,
    title: 'VoIP Calls',
    description: 'Crystal-clear internet-powered calling to anywhere in the world at affordable rates.',
    gradient: 'from-green-500 to-teal-600'
  },
  {
    icon: Clock,
    title: 'Fast Onboarding',
    description: 'Register and start using FlowAfric in seconds with our streamlined verification process.',
    gradient: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Shield,
    title: '99.95% Uptime',
    description: 'Bank-grade infrastructure ensures FlowAfric is always available when you need it most.',
    gradient: 'from-red-500 to-pink-600'
  },
  {
    icon: TrendingDown,
    title: '1% Merchant Fee',
    description: 'Lowest payment processing fees in Africa. More savings for merchants and customers.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Code,
    title: 'API for Developers',
    description: 'Integrate FlowAfric into your apps and websites with our comprehensive developer API.',
    gradient: 'from-cyan-500 to-blue-500'
  }
];

const stats = [
  {
    value: '500K+',
    label: 'Active Users',
    description: 'Africans trusting FlowAfric daily'
  },
  {
    value: '₦2.5B+',
    label: 'Transactions Processed',
    description: 'Secure payments and transfers'
  },
  {
    value: '99.95%',
    label: 'Uptime Guarantee',
    description: 'Always available when you need us'
  },
  {
    value: '50+',
    label: 'Countries Served',
    description: 'Across Africa and beyond'
  }
];

const testimonials = [
  {
    quote: "FlowAfric has revolutionized how I manage my business finances. The escrow system gives me peace of mind.",
    author: "Adebayo Johnson",
    role: "E-commerce Merchant, Lagos",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
  },
  {
    quote: "The P2P trading feature is incredible. I can trade crypto instantly without worrying about scams.",
    author: "Zara Ahmed",
    role: "Crypto Trader, Nairobi",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
  },
  {
    quote: "VoIP calls are crystal clear and affordable. Perfect for staying connected with family abroad.",
    author: "Kofi Mensah",
    role: "Student, Accra",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
  }
];

const faq = [
  {
    question: "Is FlowAfric available in my country?",
    answer: "FlowAfric is currently available in Nigeria, Kenya, Ghana, South Africa, and expanding to more African countries. Check our app for the latest availability."
  },
  {
    question: "How secure is my money on FlowAfric?",
    answer: "We use bank-grade security with 256-bit encryption, biometric authentication, and escrow protection for marketplace transactions. Your funds are protected by multiple layers of security."
  },
  {
    question: "What are the fees for using FlowAfric?",
    answer: "P2P trading is completely free. Merchant payments have a 1% fee, and escrow protection is optional at 1%. VoIP calls use affordable per-minute rates."
  },
  {
    question: "Can I use FlowAfric for international transfers?",
    answer: "Yes! Our P2P trading and crypto features allow you to send money internationally at competitive rates. VoIP calling also supports international numbers."
  },
  {
    question: "How do I get started with FlowAfric?",
    answer: "Download the app from Google Play or App Store, create your account with basic verification, and start using our features immediately. No complex setup required."
  },
  {
    question: "Is customer support available?",
    answer: "Yes, we provide 24/7 customer support through in-app chat, email, and phone. Our African-based support team understands your needs."
  }
];

const blogPosts = [
  {
    title: "The Future of Fintech in Africa: Trends to Watch",
    excerpt: "Explore how emerging technologies are reshaping financial services across the continent.",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
    link: "/blog/fintech-africa-future"
  },
  {
    title: "How P2P Trading is Democratizing Finance",
    excerpt: "Learn how peer-to-peer trading platforms are making financial services accessible to everyone.",
    date: "2024-01-10",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
    link: "/blog/p2p-trading-democratization"
  },
  {
    title: "Security Best Practices for Digital Wallets",
    excerpt: "Essential tips to keep your digital assets safe in an increasingly connected world.",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
    link: "/blog/digital-wallet-security"
  }
];

const contactInfo = [
  {
    type: "email",
    label: "Email Support",
    value: "support@flowafric.com",
    icon: "📧",
    description: "24/7 email support"
  },
  {
    type: "phone",
    label: "Phone Support",
    value: "+234 123 456 7890",
    icon: "📞",
    description: "Mon-Fri 9AM-6PM WAT"
  },
  {
    type: "address",
    label: "Headquarters",
    value: "Lagos, Nigeria",
    icon: "📍",
    description: "KM 5, Iworoko Road, Ado-Ekiti"
  },
  {
    type: "social",
    label: "Social Media",
    value: "@flowafric",
    icon: "🌐",
    description: "Follow us for updates"
  }
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid xl:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <div className="inline-flex justify-center xl:justify-start mb-6">
                  <Image 
                    src="/flowafric-logo-tagline.png"
                    alt="FlowAfric - Connect, Call, Pay" 
                    width={800}
                    height={200}
                    className="w-56 sm:w-64 md:w-80 lg:w-[22rem] h-auto max-w-full animate-pulse-glow"
                    priority
                  />
                </div>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  The ultimate super app for Africans. Manage your Naira & crypto wallets, 
                  trade P2P, make VoIP calls, and shop with escrow protection - all in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-6 animate-glow transform hover:scale-105 transition-all duration-300"
                  >
                    <a href="https://flowafric.app" target="_blank" rel="noopener noreferrer">
                      Launch App →
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="glass-effect text-white border-white/20 hover:bg-white/10 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300"
                  >
                    <a href="#features">Learn More</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="animate-float">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Thousands Across Africa
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the growing community of Africans who trust FlowAfric for their financial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AO</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Adebayo Ogundimu</h4>
                    <p className="text-sm text-gray-400">Lagos, Nigeria</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "FlowAfric has revolutionized how I manage my finances. The P2P trading feature 
                  helped me save 40% on international transfers."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">KA</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Kemi Adebayo</h4>
                    <p className="text-sm text-gray-400">Abuja, Nigeria</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "As a small business owner, the 1% merchant fee has saved me thousands. 
                  FlowHub's escrow system gives my customers confidence to buy."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">EN</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Emeka Nwachukwu</h4>
                    <p className="text-sm text-gray-400">Port Harcourt, Nigeria</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The VoIP calling feature is crystal clear and so affordable. 
                  I can stay connected with family abroad without breaking the bank."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              FlowAfric combines the best of fintech, communication, and e-commerce 
              to create the perfect super app for modern Africans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              FlowAfric by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Growing fast across Africa with trust and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bank-Grade Security & Trust
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your security is our priority. FlowAfric employs the highest standards 
              of financial security and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">99.95% Uptime</h3>
              <p className="text-gray-300 text-sm">Always available when you need it</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">256-bit Encryption</h3>
              <p className="text-gray-300 text-sm">Military-grade data protection</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Escrow Protected</h3>
              <p className="text-gray-300 text-sm">Safe marketplace transactions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Regulated & Compliant</h3>
              <p className="text-gray-300 text-sm">Full regulatory compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent, Affordable Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees, no surprises. Just honest, competitive pricing 
              that helps you save money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">P2P Trading</h3>
                <div className="text-4xl font-black mb-4">FREE</div>
                <p className="mb-6">No fees for peer-to-peer cryptocurrency trading</p>
                <ul className="text-left space-y-2 text-emerald-100">
                  <li>✓ Unlimited P2P trades</li>
                  <li>✓ Instant balance transfers</li>
                  <li>✓ Maker-taker system</li>
                  <li>✓ Real-time market rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Merchant Payments</h3>
                <div className="text-4xl font-black mb-4">1%</div>
                <p className="mb-6">Lowest merchant processing fees in Africa</p>
                <ul className="text-left space-y-2 text-blue-100">
                  <li>✓ Accept Naira & crypto</li>
                  <li>✓ Instant settlements</li>
                  <li>✓ API integration</li>
                  <li>✓ Real-time analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Escrow Protection</h3>
                <div className="text-4xl font-black mb-4">1%</div>
                <p className="mb-6">Optional escrow for secure marketplace transactions</p>
                <ul className="text-left space-y-2 text-purple-100">
                  <li>✓ Buyer protection</li>
                  <li>✓ Seller guarantee</li>
                  <li>✓ Dispute resolution</li>
                  <li>✓ Trust building</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about FlowAfric. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-800 border border-slate-700 rounded-lg px-6">
                <AccordionTrigger className="text-left text-white hover:text-emerald-400 py-6 text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with insights on fintech, African finance, and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="text-emerald-400 hover:text-emerald-300 p-0 h-auto font-medium">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
              <a href="/blog">
                View All Posts
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions? Need support? Our team is here to help you succeed with FlowAfric.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{contact.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-emerald-400 font-medium mb-2">
                    {contact.value}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Ready to start your FlowAfric journey?
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
              <a href="/contact">
                Contact Us Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See FlowAfric in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how FlowAfric transforms financial management across Africa.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-2 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">FlowAfric Demo Video</h3>
                <p className="text-gray-300">Coming Soon - Full product walkthrough</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 newsletter-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with FlowAfric
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get the latest updates on new features, African fintech insights, 
            and exclusive offers delivered to your inbox.
          </p>
          <NewsletterForm />
          <p className="text-sm text-purple-200 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Life?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of Africans already using FlowAfric to manage their money, 
            trade crypto, and stay connected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold transform hover:scale-105 transition-all duration-300"
            >
              <a href="https://flowafric.app" target="_blank" rel="noopener noreferrer">
                Launch FlowAfric →
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 font-semibold transform hover:scale-105 transition-all duration-300"
            >
              <a href={process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
                📱 Download Android
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 font-semibold transform hover:scale-105 transition-all duration-300"
            >
              <a href={process.env.NEXT_PUBLIC_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                🍎 Download iOS
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cookie banner now rendered globally in layout via <CookieBanner /> */}
    </div>
  );
}