import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const faqData = [
  {
    question: "What is FlowAfric?",
    answer: "FlowAfric is a comprehensive super app designed specifically for Africans. It combines multiple financial services including Naira and cryptocurrency wallets, P2P trading (FlowConnect), marketplace shopping (FlowHub), VoIP calling, and payment processing - all in one secure platform."
  },
  {
    question: "How secure is my money with FlowAfric?",
    answer: "FlowAfric employs bank-grade security measures including multi-layer encryption, secure multi-signature wallets, regular security audits, and compliance with international financial regulations. Your funds are protected with the highest security standards, and we maintain 99.95% uptime for reliability."
  },
  {
    question: "How does FlowConnect P2P trading work?",
    answer: "FlowConnect uses an innovative maker-taker model. Makers set their own exchange rates and terms, while Takers can instantly execute trades at posted rates. This enables competitive pricing and instant balance transfers between verified users, making P2P trading faster and more efficient than traditional methods."
  },
  {
    question: "What is FlowHub escrow and how much does it cost?",
    answer: "FlowHub escrow is an optional service that protects both buyers and sellers in marketplace transactions. For just 1% of the transaction value, escrow holds the buyer's funds until goods are delivered and verified. This ensures secure transactions and builds trust between parties. Escrow is optional - you can choose when to use it."
  },
  {
    question: "How much are FlowAfric's merchant fees?",
    answer: "FlowAfric charges only 1% for merchant payment processing - one of the lowest rates in Africa. This competitive fee structure helps merchants save money and offer better prices to customers while still maintaining world-class payment processing infrastructure."
  },
  {
    question: "Can developers integrate FlowAfric via API?",
    answer: "Yes! FlowAfric offers a comprehensive developer API that allows integration of all major features including wallet services, payment processing, P2P trading, and marketplace functionality. We provide extensive documentation, SDKs for popular programming languages, and a sandbox environment for testing."
  },
  {
    question: "Do you support international users?",
    answer: "While FlowAfric is primarily designed for African users, we do support international transactions, especially for cross-border trade and remittances. International users can participate in our marketplace and use our P2P trading features to transact with African users."
  },
  {
    question: "How do I contact FlowAfric support?",
    answer: `You can reach our support team through multiple channels:
    
    📞 Phone: ${process.env.NEXT_PUBLIC_SUPPORT_PHONE}
    📧 Email: ${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
    📍 Office: KM 5, Iworoko Road, behind Pathfinder Hotel, Ado-Ekiti, Ekiti State, Nigeria
    
    Our support team is available 24/7 to assist with any questions or issues.`
  },
  {
    question: "What currencies and cryptocurrencies does FlowAfric support?",
    answer: "FlowAfric supports Nigerian Naira (NGN) for local transactions and the major cryptocurrencies Bitcoin (BTC) and USDT for digital transactions. This hybrid approach allows users to manage both traditional and digital currencies in one convenient platform."
  },
  {
    question: "Is FlowAfric regulated and compliant?",
    answer: "Yes, FlowAfric operates in full compliance with Nigerian financial regulations and international standards. We implement KYC (Know Your Customer) and AML (Anti-Money Laundering) procedures, maintain proper licensing, and work closely with regulatory authorities to ensure full compliance."
  },
  {
    question: "Can I use FlowAfric for my business?",
    answer: "Absolutely! FlowAfric is perfect for businesses of all sizes. You can accept payments with our low 1% merchant fees, list products on FlowHub marketplace, use P2P trading for international business payments, and integrate our services via API. Many businesses use FlowAfric to reduce payment costs and expand their customer base."
  },
  {
    question: "What's on FlowAfric's roadmap for the future?",
    answer: "We're constantly innovating to serve our users better. Upcoming features include expanded cryptocurrency support, additional African currency integration, enhanced AI-powered trading tools, business lending services, advanced analytics, and expanded API capabilities. Follow our blog and social media for the latest updates on new features and improvements."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-glow">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about FlowAfric's features, security, 
            fees, and how to get the most out of our super app platform.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Common Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-white hover:text-emerald-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 whitespace-pre-line leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-6">
            Our support team is ready to help you with any additional questions about FlowAfric.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 transform hover:scale-105 transition-all duration-300">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-700 transform hover:scale-105 transition-all duration-300">
              <a href="https://flowafric.app" target="_blank" rel="noopener noreferrer">
                Try FlowAfric
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}