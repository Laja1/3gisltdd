import React from 'react'
import { Header } from '~/components/Section/Common/Header'
import PageHeader from '~/components/Section/Common/PageHeader'
import Head from 'next/head';
export default function Stanbic() {
    return (
      <div>
        <Head>
          <title>Online Inverter Monitoring Solution</title>
          <meta name="description" content="Online Inverter Monitoring Solution" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <PageHeader title="Online Inverter Monitoring Solution" />
        <div className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/images/project/OnlineInterterMonitoring.jpeg"
                  className="w-full h-80 object-cover"
                  alt="OnlineInterterMonitoring"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
                <h2 className="absolute inset-x-0 bottom-4 text-center text-white text-2xl font-bold">
                  Online Inverter Monitoring Solution
                </h2>
              </div>
              <div className="px-6 py-8">
                <p className="text-gray-700 text-sm leading-relaxed">
                  The bank&apos;s maintenance department was challenged with the
                  ability to monitor availability of its ATMs located at remote
                  sites. When there is power outage, the ATM&apos;s backup power
                  kicks in but goes off after a while. This costs the bank
                  millions in service downtime, battery refresh, hardware fixes
                  and application uptime.
                </p>{" "}
                <p className="mt-4 text-gray-700  text-sm leading-relaxed">
                  The{" "}
                  <span className="text-blue-600 font-bold">
                    inverter monitoring
                  </span>{" "}
                  is an IoT solution that provided the maintenance team with an
                  online portal that enabled proactive monitoring of the backup
                  powers connected to all the ATMs in Stanbic&apos;s branches,
                  thereby saving the bank millions in repair and downtime costs.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}