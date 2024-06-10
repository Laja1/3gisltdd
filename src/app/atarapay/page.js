import React from 'react'
import { Header } from '~/components/Section/Common/Header'
import PageHeader from '~/components/Section/Common/PageHeader'

export default function Atarapay() {
    return (
        <div>
            <Header />
            <PageHeader title="Atarapay" />
   <div className="bg-gray-100 py-12">
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
         <div className="relative">
           <img src='/images/project/atarapay.png' className="w-full h-64 object-cover" alt="Atarapay App" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
           <h2 className="absolute inset-x-0 bottom-4 text-center text-white text-2xl font-bold">AtaraPay</h2>
         </div>
         <div className="px-6 py-8">
           <p className="text-gray-700 text-sm leading-relaxed">
             AtaraPay is a mobile app developed to guarantee online fraud prevention during eCommerce transactions by acting as a holding account and a trusted third party between the buyer and the seller. The buyer pays into the holding account, and the seller is only credited if the buyer confirms that the goods or service is in good condition.
           </p>
           <p className="mt-4 text-gray-700  text-sm leading-relaxed">
             It is also designed to protect transactions for third-party or brokered transactions such as marketplace transactions that involve the buyer, seller, and a service provider. The solution provides the following features:
           </p>
           <ul className="mt-4 text-sm list-disc list-inside text-gray-700 leading-relaxed">
             <li>1. Multiple Payment Options (PayPal, Paystack, Monnify)</li>
             <li>2. Local and Cross border Transactions (Supports USD and NGN Currencies)</li>
             <li>3. Supports eCommerce of Goods including Services</li>
             <li>4. Stress-Free Delivery of Goods</li>
             <li>5. Dispute Resolution Portal</li>
             <li>6. APIs and Plugins for Seamless Integration</li>
           </ul>
         </div>
         
       </div>
     </div>
   </div></div>
 )
}