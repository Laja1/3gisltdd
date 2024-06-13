"use client"
import { motion } from 'framer-motion'

const serviceData = [
    {
      title: 'Trustpay Technologies',
      description: 'AtaraPay is a mobile app developed to guarantee online fraud prevention during eCommerce transactions by acting as a holding account and a trusted thrid party between the buyer and the seller. The buyer pays into the holding account and the seller is only credited if the buyer confirms that the goods or service is in good condition. ',
        cardColor: "#A3B2C230"
    },
    {
      title: 'MTN BizApp',
      description: 'MTN BizApp is a mobile app developed specifically to cater for Small and Medium Businesses (SMB) subscribed to the MTN network across all its Operating Companies in Africa and the Middle East. It is designed to help SMBs leverage Social Media as an online growth strategy.',
      cardColor: "#EEDEDE30"
    },
    
    {
        title: 'Stanbic Bank (Online Inverter Monitoring Solution)',
        description: 'The banks maintenance department was challenged with the ability to monitor availability of its ATMs located at remote sites. When there is power outage, the ATMs backup power kicks in but goes off after a while. This costs the bank millions in service downtime, battery refresh, hardware fixes and application uptime.',
        cardColor: "#BCBBF330"
    },
    {
        title: 'Leadway Pensions (Cloud Hotspot Service at National Youth Service Corp (NYSC) Camps)',
        description: 'This is an ongoing marketing innovation started by Leadway in the country. The project provides free Wi-Fi internet access to NYSC candidates at the camps during their 3 weeks orientation into the service. This solution advertises Leadway and its services on the hotspot and captures data of the corpers for follow up after the exercise. ',
        cardColor: "#FFB5B530"
    },
    // {
    //   title: 'Masque Technologies',
    //   description: 'This is an arts and craft online marketplace designed to bridge the gap between lovers of art and artists. It provides artists an account management portal which allows them to upload their art works and sell them via the Masque marketplace. The service also includes image manipulation for framing and printing. ',
    //   cardColor: "#BAFED530"
    // },
    {
        title: 'Sailbond Shipping Ltd',
        description: 'This is a website developed for Sailbond Shipping Limited in the logistics and courier sector. The website was developed to allow the company have a web presence and also to enable her customers track their shipment online from their website.',
        cardColor: "#FFF3EA30"
      },
  ]

  
export default function Projects() {
  return (
    <div className="text-center  flex flex-col items-center justify-center pt-10">
          
           <div className="pt-10 items-center justify-center  grid lg:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-5">
      {serviceData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{duration:1, ease:"easeIn"}}
          style={{ backgroundColor: item.cardColor }}
          className="items-center justify-center flex w-[300px] lg:w-[400px]  md:w-[330px] h-[335px] py-10 px-5"
        >
          <div>
            <p className="font-bold text-lg  poppins-medium pt-3 text-center">{item.title}</p>
            <div>
              <p className="text-[13px] leading-loose open-sans text-[#56627b] py-3">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
             
    
    </div>
  )
}
