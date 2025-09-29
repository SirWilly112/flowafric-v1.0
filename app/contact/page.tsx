'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-glow">
            Contact FlowAfric
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our services? Need technical support? Want to partner with us? 
            We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <span>Our Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  KM 5, Iworoko Road<br />
                  behind Pathfinder Hotel<br />
                  Ado-Ekiti, Ekiti State<br />
                  Nigeria
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <span>Phone Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Available 24/7 for urgent issues
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <span>Email Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  We typically respond within 2-4 hours
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  West Africa Time (WAT)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form (Brevo via /api/contact) */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Additional Support Options */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-center p-6">
                <h3 className="text-lg font-bold text-white mb-2">Technical Support</h3>
                <p className="text-gray-300 mb-4">
                  Need help with the FlowAfric app or having technical issues?
                </p>
                <Button asChild variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                  <a href="https://flowafric.app" target="_blank" rel="noopener noreferrer">
                    Access Help Center
                  </a>
                </Button>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-center p-6">
                <h3 className="text-lg font-bold text-white mb-2">Business Partnerships</h3>
                <p className="text-gray-300 mb-4">
                  Interested in partnering with FlowAfric or integrating our API?
                </p>
                <Button asChild variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                  <a href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}?subject=Partnership Inquiry`}>
                    Partner With Us
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}