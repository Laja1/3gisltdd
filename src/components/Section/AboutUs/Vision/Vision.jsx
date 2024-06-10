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
          <div className="flex items-center">
            <div className="w-10 h-1 rotate-90 bg-[#222] rounded-full" />
            <p className="font-bold playfair-display text-2xl text-center ml-3">Our Profile</p>
          </div>
          <div className="pt-10 px-10 space-y-1">
            <p className="text-sm leading-loose  open-sans">
              3G Integrated Systems is an information technology firm dedicated exclusively to delivering end-to-end computing, telecommunication and project management solutions. We deliver complete solutions to the government, health, banking, manufacturing and distribution industries.
            </p>
            <p className="text-sm leading-loose  open-sans">
              We invest in our clients, our employees and our core values and you can rely on our industry expertise for all your needs.
            </p>
            <p className="text-sm leading-loose  open-sans">
            &apos;For more details, please download our&apos; <a href="profile.pdf" target="_blank" className="underline">company profile</a>
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeIn' }}
          className="items-end flex flex-col pt-10"
        >
          <div className="flex items-center">
            <p className="font-bold playfair-display text-2xl text-center mr-3">Our Mission</p>
            <div className="w-10 h-1 rotate-90 bg-[#222] rounded-full" />
          </div>
          <div className="pt-10 px-10 space-y-1">
            <p className="text-sm leading-loose open-sans">
              3G Integrated Systems&apos; mission is to provide customer satisfaction, as this is the key to success. We will continue supplying quality services and products to meet our customers&apos; needs. We will maintain highly skilled and professional workforce in partnership with you, our customer, towards meeting your business objectives.
            </p>
          </div>
        </motion.div></div>
  )
}
