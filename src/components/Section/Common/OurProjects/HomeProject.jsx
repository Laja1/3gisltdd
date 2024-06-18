"use client"
import { motion } from 'framer-motion'
import Link from 'next/link';
    const serviceData = [
      {
        title: 'The MarketPlace by AtaraPay',
        description: 'This is a multi-vendor online marketplace designed to bridge the gap between buyers and sellers of virtually all types of goods and services. It includes the option to make payment with escrow, thereby giving both buyer and seller the assurance of a 100% fraud-free transaction on the marketplace.',
         imageUrl:"/images/project/Marketplace.jpeg",
        imageAlt: 'MarketPlace by AtaraPay',
        reversed: false, // Normal layout
      },
      {
         title: 'Mobile App for Business',
    description: 'MTN BizApp is a mobile app developed specifically to cater to Small and Medium Businesses (SMBs) that are subscribed to the MTN network across all its Operating Companies in Africa and the Middle East. It is designed to help SMBs leverage Social Media as an online growth strategy and access MTN Services such as the MTN Bulk SMS and Online Directory.',
  imageUrl: '/images/project/MobileAppForBusiness.jpeg',
        imageAlt: 'Mobile App for Business',
        reversed: true, // Reversed layout
      },
      {
        title: 'Shipment & Warehouse Management Solution',
    description: 'International and domestic freight companies are challenged with providing on-time notification to their customers on the whereabouts of their goods being shipped from the source to destination location. 3GIS integrated its shipments tracking solution for Sailbond Shipping which enables its logistics team to update the shipment milestones on the app.',
     imageUrl: '/images/project/ShipmentTracking.jpeg',
        imageAlt: 'Shipment & Warehouse Management Solution',
        reversed: false, // Normal layout
      },
    ]

    
export default function HomeProject() {
  return (
    <div className="bg-[#fff] py-5 flex flex-col  items-center justify-center  w-full">
      <div className="py-5 items-center justify-center flex flex-col">
        <h1 className="playfair-display  py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">
          Some of Our Projects
        </h1>
        <div className="w-14  h-1  rounded-full bg-[#2D5ED8]" />
      </div>

      <div className="pt-10 items-center justify-center  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {serviceData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            style={{ borderRadius: 10 }}
            className="lg:w-[380px] w-[330px] md:[360px] rounded-lg  h-[600px]   border-[1px] shadow-xl  border-[#fdfdf] flex flex-col "
          >
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              className="rounded-t-lg "
              style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            />
            <div className="px-5  flex flex-col">
              <p className="font-bold poppins-medium  pt-3 text-center">
                {item.title}
              </p>
              <p className="text-[13px]  open-sans leading-loose text-[#56627b] py-3">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
        <Link href='/Projects'><div className="flex-row animate-bounce pt-5 flex justify-center items-center gap-2">
      <p className="open-sans">View More</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

       </div></Link> 
    </div>
  );
}
