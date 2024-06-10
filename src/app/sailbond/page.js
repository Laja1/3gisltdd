import React from 'react'
import { Header } from '~/components/Section/Common/Header'
import PageHeader from '~/components/Section/Common/PageHeader'

export default function Sailbond() {
    return (
        <div>
            <Header />
            <PageHeader title="Sailbond Shipping Ltd" />
   <div className="bg-gray-100 py-12">
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
         <div className="relative">
           <img src='/images/project/sailbond.png' className="w-full h-64 object-cover" alt="Mtn App" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
           <h2 className="absolute inset-x-0 bottom-4 text-center text-white text-2xl font-bold">Sailbond Shipping Ltd</h2>
         </div>
         <div className="px-6 py-8">
           <p className="text-gray-700 text-sm leading-relaxed">
                                International and domestic freight companies are challenged with providing on-time notification to their customers on the whereabouts of there goods being shipped from the source to destination location.
           </p>                     <p className="mt-4 text-gray-700  text-sm leading-relaxed">
           3GIS integrated its shipments tracking solution for Sailbond Shipping which enabled its logistics team to update the shipment milestones on the app, which provided instant email notification to the customers with a link to track in real time. The solution also allows management to have visibility of progress of each vessel and each shipment they contain, which helped Sailbond improve its workforce efficiency.          </p>
         
         </div>
         
       </div>
     </div>
   </div></div>
 )
}