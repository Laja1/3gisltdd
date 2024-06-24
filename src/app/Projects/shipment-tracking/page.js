import Head from 'next/head';
import React from 'react'
import { Header } from '~/components/Section/Common/Header'
import PageHeader from '~/components/Section/Common/PageHeader'

export default function Sailbond() {
    return (
      <div>
        <Head>
          <title>Shipment & Warehouse Management Solution</title>
          <meta name="description" content="Shipment & Warehouse Management Solution" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <PageHeader title="Shipment & Warehouse Management Solution" />
        <div className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/images/project/ShipmentTracking.jpeg"
                  className="w-full h-[360px] object-cover"
                  alt="Shipment Tracking"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
                <h2 className="absolute inset-x-0 bottom-4 text-center text-white text-2xl font-bold">
                  Shipment & Warehouse Management Solution
                </h2>
              </div>
              <div className="px-6 py-8">
                <p className="text-gray-700 text-sm leading-relaxed">
                  International and domestic freight companies are challenged
                  with providing on-time notification to their customers on the
                  whereabouts of there goods being shipped from the source to
                  destination location.
                </p>{" "}
                <p className="mt-2 text-gray-700  text-sm leading-relaxed">
                  <span className="text-blue-600 font-bold">3GIS</span>{" "}
                  integrated its shipments tracking solution for{" "}
                  <span className="text-blue-600 font-bold">
                    Sailbond Shipping
                  </span>{" "}
                  which enabled its logistics team to update the shipment
                  milestones on the app, which provided instant email
                  notification to the customers with a link to track in real
                  time.{" "}
                </p>
                <p className="mt-2 text-gray-700  text-sm leading-relaxed">
                  The solution also allows management to have visibility of
                  progress of each vessel and each shipment they contain, which
                  helped Sailbond improve its workforce efficiency.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}