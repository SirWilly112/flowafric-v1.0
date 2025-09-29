import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-posts';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | FlowAfric Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} | FlowAfric Blog`,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      authors: [post.author],
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | FlowAfric Blog`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Back Button */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button asChild variant="ghost" className="mb-4 text-white hover:text-emerald-400 hover:bg-slate-700">
            <Link href="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
            {post.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-shadow-glow">
            {post.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video overflow-hidden rounded-xl mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300 prose-blockquote:border-l-emerald-500 prose-blockquote:bg-slate-800/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-2">About the Author</h3>
            <p className="text-gray-300">
              <strong>{post.author}</strong> is a fintech expert and contributor to FlowAfric's blog, 
              sharing insights on African financial technology, cryptocurrency, and digital payments.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Experience FlowAfric?
          </h3>
          <p className="text-emerald-100 mb-6">
            Join thousands of Africans already using FlowAfric for their financial needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
          >
            <a href="https://flowafric.app" target="_blank" rel="noopener noreferrer">
              Launch App →
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}