"use client"
import { motion } from 'framer-motion'
    const serviceData = [
      {
        title: 'Project Management Consulting',
        description: 'Ensuring that projects deliver on their benefits and objectives is the reason for the systematic project management approach adopted by 3GIS to project delivery. In achieving this, we align ourselves as a company to applying proven project management tenets.',
        imageUrl: '/images/service/project_mg.jpg',
        imageAlt: 'Project Management',
        reversed: false, // Normal layout
      },
      {
        title: 'Business Process Re-Engineering',
        description: 'For efficient running of any business, it is not enough to define the processes and procedures. Businesses must cultivate the habit of documenting these processes as well. Challenges however creep in when these processes stop yielding results due to lack of review and upgrade of the processes to solve new business challenges',
        imageUrl: '/images/service/business_reegineering.jpg',
        imageAlt: 'Business Process Re-Engineering',
        reversed: true, // Reversed layout
      },
      {
        title: 'Application Development',
        description: 'Once processes are working effectively for the organization, the frequency at which transactions occur would reach a level whereby businesses need automation to improve efficiencies of existing manual processes. Combining business process re-engineering and bespoke software development, 3GIS can help to improve workforce efficiency and throughput.',
        imageUrl: '/images/service/app_dev.jpg',
        imageAlt: 'Application Development',
        reversed: false, // Normal layout
      },
    ]

    
export default function Service() {
  return (
    <section id="services"> 
    <div id="services" className="bg-[#fff]  py-5 flex flex-col  items-center justify-center  w-full">
      <div className="py-5 items-center justify-center flex flex-col">
        <h1 className="playfair-display  py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">
          Our Services
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
    </div></section>
  );
}
