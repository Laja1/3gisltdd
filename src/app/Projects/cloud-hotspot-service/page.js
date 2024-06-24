import React from 'react'
import Head from 'next/head'
import { Header } from '~/components/Section/Common/Header'
import PageHeader from '~/components/Section/Common/PageHeader'

export default function Leadway() {
    return (
      <div>
        <Head>
          <title>Cloud Hotspot Service</title>
          <meta name="description" content="Cloud Hotspot Service" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <PageHeader title="Cloud Hotspot Service" />
        <div className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/images/project/CloudHotspot.jpeg"
                  className="w-full h-80 object-cover"
                  alt="Cloud-Hotspot-Service"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
                <h2 className="absolute inset-x-0 bottom-4 text-center text-white text-2xl font-bold">
                  Cloud Hotspot Service
                </h2>
              </div>
              <div className="px-6 py-8">
                <p className="text-gray-700 text-sm leading-relaxed">
                  This was an ongoing marketing innovation started by Leadway in
                  the country. The project provided free Wi-Fi internet access
                  to National Youth Service Corp (NYSC) candidates at the camps
                  during their 3 weeks orientation into the service.{" "}
                </p>

                <p className="mt-2 text-gray-700  text-sm leading-relaxed">
                  This solution advertised Leadway and its services on the
                  hotspot and captured data of the corpers for follow up after
                  the exercise.
                </p>
                {/* <ul className="mt-4 text-sm list-disc list-inside text-gray-700 leading-relaxed">       
             <li>1. Online and real-time reporting of user access and registrations</li>
             <li>2. Provided online monitoring of the hotspot routers proactively informing of downtimes and delivering resolutions in real-time</li>
             <li>3. Supported up to 500 concurrent users within the major campuses</li>
             <li>4. Provided in-app advertising</li>
             <li>5. Authentication of emails and form validation of NYSC call-up numbers</li>
             <li>6. Deployment of Mikrotik Cloud Core Hotspot routers at the core</li>
           </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}