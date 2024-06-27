"use client"

import {motion} from 'framer-motion'
export default function Vision() {
  return (
    <div> <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeIn' }}
          className="items-start pt-10"
        >
          
           <div className="py-5 items-center justify-center flex flex-col">
        <h1 className="playfair-display  py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">
          Our Profile
        </h1>
        <div className="w-14  h-1  rounded-full bg-[#2D5ED8]" />
      </div>
          <div className="pt-2 lg:px-32  px-10  space-y-1">
            <p className="text-sm leading-loose text-center  open-sans">
              3G Integrated Systems is an information technology firm dedicated exclusively to delivering end-to-end computing, telecommunication and project management solutions. We deliver complete solutions to all industries that require our services and you can rely on our industry-based expertise to meeting your specific needs and expectations.
            </p>
           
           
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeIn' }}
          className="items-center flex flex-col pt-10"
        >
           <div className="py-5 items-center justify-center flex flex-col">
        <h1 className="playfair-display  py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">
          Our Mission
        </h1>
        <div className="w-14  h-1  rounded-full bg-[#2D5ED8]" />
      </div>
          <div className="pt-2 lg:px-32 px-10 space-y-1">
            <p className="text-sm leading-loose text-center open-sans">
              3G Integrated Systems&apos; mission is to provide customer satisfaction, as this is the key to success. We will continue supplying quality services and products to meet our customers&apos; needs. We will maintain highly skilled and professional workforce in partnership with you, our customer, towards meeting your business objectives.
            </p>
          </div>
        </motion.div></div>
  )
}
