"use client"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const serviceData = [
  {
    title: 'The MarketPlace by AtaraPay',
    description: 'This is a multi-vendor online marketplace designed to bridge the gap between buyers and sellers of virtually all types of goods and services. It includes the option to make payment with escrow, thereby giving both buyer and seller the assurance of a 100% fraud-free transaction on the marketplace. It provides dashboards for the buyer, seller and the marketplace owner. With the option of escrow payment, the marketplace also allows the listing of services such as sales of software development, package delivery, web designing, etc.',
    cardColor: "#A3B2C2",
    imageUrl:"/images/icon/atarapay.png"
  },
  {
    title: 'Mobile App Development',
    description: 'MTN BizApp is a mobile app developed specifically to cater to Small and Medium Businesses (SMBs) that are subscribed to the MTN network across all its Operating Companies in Africa and the Middle East. It is designed to help SMBs leverage Social Media as an online growth strategy and access MTN Services such as the MTN Bulk SMS and Online Directory.',
    cardColor: "#EEDEDE",
      imageUrl:"/images/v1/mtn.svg"
  },
  {
    title: 'Online Inverter Monitoring Solution',
    description: 'Stanbic IBTC bank’s maintenance department was challenged with the ability to monitor the availability of its ATMs located at remote sites. When a power outage occurs, the ATMs backup power kicks in but goes off after a while. This costs the bank millions in service downtime, battery refresh, hardware fixes and application uptime. The inverter monitoring is an IoT solution that provides the maintenance team with an online portal that enables proactive monitoring of the backup powers connected to all the ATMs in Stanbic’s branches, thereby saving the bank millions in repair and downtime costs.',
    cardColor: "#BCBBF3"
  },
  {
    title: 'Cloud Hotspot Service',
    description: 'This was an ongoing marketing innovation started by Leadway in the country. The project provided free Wi-Fi internet access to National Youth Service Corp (NYSC) candidates at the camps during their 3 weeks orientation into the service. This solution advertised Leadway and its services on the hotspot and captured data of the corpers for follow up after the exercise.',
    cardColor: "#FFB5B5"
  },
  {
    title: 'Shipment & Warehouse Management Solution',
    description: 'International and domestic freight companies are challenged with providing on-time notification to their customers on the whereabouts of their goods being shipped from the source to destination location. 3GIS integrated its shipments tracking solution for Sailbond Shipping which enables its logistics team to update the shipment milestones on the app, which provides instant email notification to the customers with a link to track in real time. The solution also allows management to have visibility of progress of each vessel and each shipment they contain, which helpes Sailbond improve its workforce efficiency.',
    cardColor: "#FFF3EA"
  },
]
export default function Projects() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
         
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our diverse range of projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex justify-center h-[450px] lg:h-[500px] mt-4">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={30}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
            >
              {serviceData.map((item, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div
                    style={{ backgroundColor: item.cardColor, borderRadius: '0.625rem' }}
                    className="rounded-lg shadow-md justify-center items-center flex overflow-hidden lg:h-[400px] h-[400px] "
                  >
                    <div className="px-6 py-8 h-full overflow-y-auto justify-center items-center flex  flex-col">
                      {/* <img src={item.imageUrl} className='w-32 h-20'/> */}
                      <h3 className="text-xl text-center font-bold mb-2  text-gray-900">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}