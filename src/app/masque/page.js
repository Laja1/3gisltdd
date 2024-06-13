import React from 'react'
import { Header } from '~/components/Section/Common/Header'
import PageHeader from '~/components/Section/Common/PageHeader'

export default function Masqu() {
    return (
        <div>
            <Header />
            <PageHeader title="Masque Technologies" />
   <div className="bg-gray-100 py-12">
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
         <div className="relative">
           <img src='/images/project/masque.png' className="w-full h-64 object-cover" alt="Mtn App" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
           <h2 className="absolute inset-x-0 bottom-4 text-center text-white text-2xl font-bold">Masque Technologies</h2>
         </div>
         <div className="px-6 py-8">
           <p className="text-gray-700 text-sm leading-relaxed">
           This is an arts and craft online marketplace designed to bridge the gap between lovers of art and artists. It provides artists an account management portal which allows them to upload their art works and sell them via the Masque marketplace. The service also includes image manipulation for framing and printing.
                            </p>
           <p className="mt-4 text-gray-700  text-sm leading-relaxed">
                                The service also includes image manipulation for framing and printing. The solution provides the following features;
                                </p><ul className="mt-4 text-sm list-disc list-inside text-gray-700 leading-relaxed">
             <li>1. eCommerce marketplace supporting Interswitch and PayPal</li>
             <li>2. Shipment tracking via Email and SMS</li>
             <li>3. Buyer, Merchant and Admin portals</li>
             <li>4. Responsive 360 degrees image viewing of 3-D arts and crafts</li>
             <li>5. Robust Reporting</li>
           </ul>
         </div>
         
       </div>
     </div>
   </div></div>
 )
}