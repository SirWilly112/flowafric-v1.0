import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8 text-white hover:text-emerald-400 hover:bg-slate-700">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-glow">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300">
            FlowAfric Ltd, Registered in Nigeria
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Last updated: January 2025
          </p>
        </div>

        {/* Privacy Content */}
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Your Privacy Matters</CardTitle>
            <p className="text-gray-300">
              This Privacy Policy explains how FlowAfric collects, uses, and protects your personal information.
            </p>
          </CardHeader>
          <CardContent className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Personal and financial information for wallet and payment functionality (e.g., deposits, withdrawals, transfers).</li>
                <li>Call and messaging metadata for billing and service delivery (message/call content is end-to-end encrypted).</li>
                <li>KYC/BVN verification data for compliance and fraud prevention.</li>
                <li>Location information for location-based services, such as displaying nearby merchants in FlowHub.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>To process wallet transactions, call charges, subscriptions, and crypto transactions.</li>
                <li>To provide and improve FlowAfric services.</li>
                <li>To maintain transaction history, call logs, and account records.</li>
                <li>To provide location-based merchant and service recommendations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Data Security</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>All sensitive data (wallet balances, KYC, transaction records) are encrypted both in transit and at rest.</li>
                <li>Data is stored securely and protected against unauthorized access.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. User Consent</h2>
              <p>
                By using FlowAfric, you consent to the collection and processing of your personal, financial, and location data as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Sharing & Third Parties</h2>
              <p>
                FlowAfric does not disclose your personal or financial information to third parties without consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Changes to Privacy Policy</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>FlowAfric Ltd reserves the right to update this Privacy Policy at any time.</li>
                <li>Continued use of the app constitutes acceptance of the updated policy.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* Data Rights */}
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-white">Your Data Rights</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p className="mb-4">You have the right to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              To exercise these rights, please contact our support team.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-4">Questions about Privacy?</h3>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us.
            </p>
            <Button asChild className="bg-gradient-to-r from-emerald-600 to-blue-600">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}