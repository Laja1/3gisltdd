import React from 'react'
import { Header } from '~/components/Section/Common/Header'
import PageHeader from '~/components/Section/Common/PageHeader'

export default function Stanbic() {
    return (
        <div>
            <Header />
            <PageHeader title="Online Inverter Monitoring Solution" />
   <div className="bg-gray-100 py-12">
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
         <div className="relative">
           <img src='/images/project/sailbond.png' className="w-full h-64 object-cover" alt="Mtn App" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
           <h2 className="absolute inset-x-0 bottom-4 text-center text-white text-2xl font-bold">Online Inverter Monitoring Solution</h2>
         </div>
         <div className="px-6 py-8">
           <p className="text-gray-700 text-sm leading-relaxed">
                                The bank&apos;s maintenance department was challenged with the ability to monitor availability of its ATMs located at remote sites. When there is power outage, the ATM&apos;s backup power kicks in but goes off after a while. This costs the bank millions in service downtime, battery refresh, hardware fixes and application uptime.
                            </p>                     <p className="mt-4 text-gray-700  text-sm leading-relaxed">

                            Our online inverter monitoring solution (IMS) provided the maintenance department a cloud service that enables Stanbic to monitor the ATMs availability online from the comfort of their office. Features deployed include;    </p>
                            <ul className="mt-4 text-sm list-disc list-inside text-gray-700 leading-relaxed">
             <li>1. View list of all sites installed from the IMS cloud portal</li>
             <li>2. Supported up to 500 concurrent users within the major campuses</li>
             <li>3. Provided online monitoring of the hotspot routers proactively informing of downtimes and delivering resolutions in real-time</li>
             <li>4. Provided in-app advertising</li>
             <li>5. Authentication of emails and form validation of NYSC call-up numbers</li>
                                <li>6. Deployment of Mikrotik Cloud Core Hotspot routers at the core</li>
                                <li>7. Deployment of Mikrotik and Ubiquity indoor and outdoor Access Points for full coverage across key locations on campus</li>
                                <li>8. Deployed power cabling and inverter systems powered by solar and diesel generators</li>
                                <li>9. Implemented structured cabling including fiber and copper cable campus wide</li>
           </ul>
         </div>
         
       </div>
     </div>
   </div></div>
 )
}