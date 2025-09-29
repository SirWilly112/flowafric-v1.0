import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    slug: 'future-of-payments-in-africa',
    title: 'The Future of Payments in Africa',
    excerpt: 'Exploring how digital payments are revolutionizing financial inclusion across the African continent and what this means for the next generation.',
    author: 'Adebayo Johnson',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Fintech',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    slug: 'how-flowafric-empowers-merchants',
    title: 'How FlowAfric Empowers Merchants',
    excerpt: 'Discover how FlowAfric is helping African merchants grow their businesses with low-cost payment processing and comprehensive financial tools.',
    author: 'Kemi Adebayo',
    date: '2025-01-12',
    readTime: '6 min read',
    category: 'Business',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    slug: 'crypto-meets-naira-hybrid-wallet-advantage',
    title: 'Crypto Meets Naira: The Hybrid Wallet Advantage',
    excerpt: 'Learn why combining traditional currency with cryptocurrency in one wallet is the future of personal finance management in Nigeria.',
    author: 'Chioma Okafor',
    date: '2025-01-10',
    readTime: '7 min read',
    category: 'Cryptocurrency',
    image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    slug: 'building-trust-with-escrow-payments',
    title: 'Building Trust with Escrow Payments',
    excerpt: 'How FlowHub\'s escrow system is creating a safer marketplace environment for both buyers and sellers across Africa.',
    author: 'Emeka Nwachukwu',
    date: '2025-01-08',
    readTime: '5 min read',
    category: 'Security',
    image: 'https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    slug: 'why-p2p-trading-is-growing-in-africa',
    title: 'Why P2P Trading is Growing in Africa',
    excerpt: 'The rise of peer-to-peer cryptocurrency trading in Africa and how FlowConnect is leading this revolutionary movement.',
    author: 'Fatima Mohammed',
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Trading',
    image: 'https://images.pexels.com/photos/6802044/pexels-photo-6802044.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    slug: 'apis-backbone-of-african-fintech-innovation',
    title: 'APIs: The Backbone of African Fintech Innovation',
    excerpt: 'How FlowAfric\'s developer API is enabling the next generation of fintech innovations across the African continent.',
    author: 'Samuel Oluwaseun',
    date: '2025-01-03',
    readTime: '9 min read',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/6863479/pexels-photo-6863479.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-glow">
            FlowAfric Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, updates, and thoughts on the future of African fintech, 
            cryptocurrency, and digital payments.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-400 space-x-2">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-emerald-400 hover:text-emerald-300 font-medium text-sm group-hover:underline"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}