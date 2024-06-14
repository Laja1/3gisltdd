"use client"
import { motion } from 'framer-motion'

const serviceData = [
    {
      title: 'The MarketPlace by AtaraPay',
    description: 'This is a multi-vendor online marketplace designed to bridge the gap between buyers and sellers of virtually all types of goods and services. It includes the option to make payment with escrow, thereby giving both buyer and sellers the assurance of a 100% fraud-free transaction on the marketplace. It provides dashboards for the buyer, seller and the marketplace owner. With the option of escrow payment, the marketplace also allows the listing of services such as sales of software development, package delivery, web designing, etc.',
    cardColor: "#A3B2C230"
    },
    {
      title: 'MTN BizApp',
      description: 'MTN BizApp is a mobile app developed specifically to cater to Small and Medium Businesses (SMBs) that are subscribed to the MTN network across all its Operating Companies in Africa and the Middle East. It is designed to help SMBs leverage Social Media as an online growth strategy and access MTN Services such as the MTN Bulk SMS and Online Directory.',
      cardColor: "#EEDEDE30"
    },
    
    {
      title: 'Online Inverter Monitoring Solution',
      description: 'The bank’s maintenance department was challenged with the ability to monitor the availability of its ATMs located at remote sites. When a power outage occurs, the ATMs backup power kicks in but goes off after a while. This costs the bank millions in service downtime, battery refresh, hardware fixes and application uptime. The inverter monitoring is an IoT solution that provided the maintenance team with an online portal that enabled proactive monitoring of the backup powers connected to all the ATMs in Stanbic’s branches, thereby saving the bank millions in repair and downtime costs.',
      cardColor: "#BCBBF330"
    },
    {
      title: 'Cloud Hotspot Service at National Youth Service Corp (NYSC) Camps',
      description: 'This was an ongoing marketing innovation started by Leadway in the country. The project provided free Wi-Fi internet access to NYSC candidates at the camps during their 3 weeks orientation into the service. This solution advertised Leadway and its services on the hotspot and captured data of the corpers for follow up after the exercise.',
      cardColor: "#FFB5B530"
    },
   
    {
        title: 'Sailbond Shipping Ltd',
      description: 'International and domestic freight companies are challenged with providing on-time notification to their customers on the whereabouts of there goods being shipped from the source to destination location. 3GIS integrated its shipments tracking solution for Sailbond Shipping which enabled its logistics team to update the shipment milestones on the app, which provided instant email notification to the customers with a link to track in real time. The solution also allows management to have visibility of progress of each vessel and each shipment they contain, which helped Sailbond improve its workforce efficiency.',
      cardColor: "#FFF3EA30"
      },
  ]

  
export default function Projects() {
  return (
    <div className="text-center  flex flex-col items-center justify-center p-10">
           
           <div className="pt-10 items-center justify-center  grid  lg:grid-cols-2 md:grid-cols-2 grid-rows-3 gap-5">
      {serviceData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{duration:1, ease:"easeIn"}}
          style={{ backgroundColor: item.cardColor }}
          className="items-center justify-center flex w-[300px] lg:w-[400px]  md:w-[330px] h-[445px]  lg:h-[365px] py-10 px-3"
        >
          <div>
            <p className="font-bold  poppins-medium pt-3 text-center">{item.title}</p>
           <div>
              <p className="text-[12px] leading-loose open-sans text-[#56627b] py-2">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
             
    
    </div>
  )
}
