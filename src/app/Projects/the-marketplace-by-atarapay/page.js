import React from 'react'
import { Header } from '~/components/Section/Common/Header'
import PageHeader from '~/components/Section/Common/PageHeader'
import Head from 'next/head';
export default function Atarapay() {
    return (
      <div>
        <Head>
          <title>The MarketPlace by AtaraPay</title>
          <meta
            name="description"
            content="The MarketPlace by AtaraPay"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <PageHeader title="The MarketPlace by AtaraPay" />
        <div className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/images/project/Marketplace.jpeg"
                  className="w-full h-80 object-cover"
                  alt="Atarapay App"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
                <h2 className="absolute inset-x-0 bottom-4 text-center text-white text-2xl font-bold">
                  The MarketPlace by AtaraPay
                </h2>
              </div>
              <div className="px-6 py-8">
                <p className="text-gray-700 text-sm leading-relaxed">
                  This is a multi-vendor online marketplace designed to bridge
                  the gap between buyers and sellers of virtually all types of
                  goods and services. It includes the option to make payment
                  with escrow, thereby giving both buyer and seller the
                  assurance of a 100% fraud-free transaction on the marketplace.
                </p>
                <p className="mt-4 text-gray-700  text-sm leading-relaxed">
                  It provides dashboards for the buyer, seller and the
                  marketplace owner. With the option of escrow payment, the
                  marketplace also allows the listing of services such as sales
                  of software development, package delivery, web designing, etc.{" "}
                </p>
                {/* <ul className="mt-4 text-sm list-disc list-inside text-gray-700 leading-relaxed">
             <li>1. Multiple Payment Options (PayPal, Paystack, Monnify)</li>
             <li>2. Local and Cross border Transactions (Supports USD and NGN Currencies)</li>
             <li>3. Supports eCommerce of Goods including Services</li>
             <li>4. Stress-Free Delivery of Goods</li>
             <li>5. Dispute Resolution Portal</li>
             <li>6. APIs and Plugins for Seamless Integration</li>
           </ul>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}