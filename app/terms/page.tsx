import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-300">
            FlowAfric Ltd, Registered in Nigeria
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Last updated: January 2025
          </p>
        </div>

        {/* Terms Content */}
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Welcome to FlowAfric!</CardTitle>
            <p className="text-gray-300">
              By using our app, you agree to the following rules and responsibilities:
            </p>
          </CardHeader>
          <CardContent className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Account & Wallet</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Users can deposit, withdraw, and transfer funds within the FlowAfric app.</li>
                <li>All wallet balances are securely stored and can only be used for services offered in the app.</li>
                <li>Users are responsible for keeping their account credentials secure.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Payments & Fees</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Merchant transactions incur a 1% fee.</li>
                <li>Other service fees (including calls, subscriptions, and crypto transactions) are deducted from wallet balance according to the published pricing inside the app.</li>
                <li>Users must have sufficient wallet balance to use any service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. VoIP & Calls</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Users can make calls to PSTN numbers and other FlowAfric users.</li>
                <li>Call charges are deducted directly from the wallet.</li>
                <li>Call quality may vary depending on network conditions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Subscriptions</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>FlowAfric may offer subscription plans for services such as VoIP.</li>
                <li>Subscription fees are deducted from wallet balance.</li>
                <li>Subscriptions may auto-renew unless canceled by the user. Users will be notified before each renewal.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Messaging</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Users can send text messages and media (images, videos) within the app.</li>
                <li>All messages and calls are end-to-end encrypted.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Location Services</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>FlowAfric collects your location to provide location-based services, such as showing nearby merchants in FlowHub.</li>
                <li>Location data is only collected when permission is granted and can be disabled at any time in device settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. User Responsibilities</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Do not share your account or wallet credentials.</li>
                <li>Use FlowAfric services lawfully and in accordance with local regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. Changes to Terms</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>FlowAfric Ltd reserves the right to update these Terms & Conditions at any time.</li>
                <li>Continued use of the app constitutes acceptance of the updated terms.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-4">Questions about our Terms?</h3>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms & Conditions, please contact us.
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