import React from 'react'
import { Header } from '~/components/Section/Common/Header'
import PageHeader from '~/components/Section/Common/PageHeader'

export default function Mtn() {
    return (
        <div>
            <Header />
            <PageHeader title="MTN BizApp" />
   <div className="bg-gray-100 py-12">
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
         <div className="relative">
           <img src='/images/project/mtn.png' className="w-full h-64 object-cover" alt="Mtn App" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
           <h2 className="absolute inset-x-0 bottom-4 text-center text-white text-2xl font-bold">MTN BizApp</h2>
         </div>
         <div className="px-6 py-8">
           <p className="text-gray-700 text-sm leading-relaxed">
           MTN BizApp is a mobile app developed specifically to cater for Small and Medium Businesses (SMB) subscribed to the MTN network across all its Operating Companies in Africa and the Middle East.  </p>
           <p className="mt-4 text-gray-700  text-sm leading-relaxed">
           It is designed to help SMBs leverage Social Media as an online growth strategy. The solution provides the following features;</p>
           <ul className="mt-4 text-sm list-disc list-inside text-gray-700 leading-relaxed">
             <li>1. Facebook, Instagram and Google Business social media dashboards</li>
             <li>2. Messaging services including Bulk SMS</li>
             <li>3. Business Directory of registered businesses</li>
             <li>4. Instant Messaging amongst registered businesses</li>
             <li>5. Customer Service</li>
             <li>6. Robust Reporting</li>
           </ul>
         </div>
         
       </div>
     </div>
   </div></div>
 )
}