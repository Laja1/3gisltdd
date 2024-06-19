import Link from "next/link"
export default function ProjectsData() {
  return (
     <div className="p-5">
      <div className=" ">
        
       
        <div
          className="zubuz-portfolio-column lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center justify-center  grid   "
          id="zubuz-threee-column"
        >
            <div className=" ui branding">
            <div className="collection-grid-item zubuz-portfolio-wrap branding ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/project/Marketplace.jpeg" className="w-full" alt="MarketPlace by AtaraPay" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/The-MarketPlace-by-Atarapay">
                    <p className="lg:text-base text-sm">The MarketPlace by AtaraPay</p>
                  </Link>
                    <img src="/images/portfolio/arrow-right.svg" alt="" className="size-6"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui website">
            <div className="collection-grid-item zubuz-portfolio-wrap ui Website">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/project/MobileAppForBusiness.jpeg" className="w-full" alt="Mobile App for Business" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/Mobile-App-for-Business">
                    <p className='lg:text-base text-sm'>Mobile App for Business</p>
                  </Link>
                    <img src="/images/portfolio/arrow-right.svg" alt="" className="size-6"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" ui">
            <div className="collection-grid-item zubuz-portfolio-wrap ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/project/OnlineInterterMonitoring.jpeg" className="w-full" alt="Online Interter Monitoring" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/Online-Inverter-Monitoring-Solution">
                    <p className='lg:text-base text-sm'>Online Inverter Monitoring Solution</p>
                  </Link>
                    <img src="/images/portfolio/arrow-right.svg" alt="" className="size-6"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" ui branding website">
            <div className="collection-grid-item zubuz-portfolio-wrap branding ui Website">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/project/CloudHotspot.jpeg" className="w-full" alt="Cloud-Hotspot-Service" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/Cloud-Hotspot-Service">
                    <p className='lg:text-base text-sm'>Cloud Hotspot Service</p>
                  </Link>
                    <img src="/images/portfolio/arrow-right.svg" alt="" className="size-6"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
           <div className=" ui">
            <div className="collection-grid-item zubuz-portfolio-wrap ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/project/ShipmentTracking.jpeg" className="w-full" alt="Shipment & Warehouse Management Solution" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/shipmentTracking">
                    <p className='lg:text-base text-sm'>Shipment & Warehouse Management Solution</p>
                  </Link>
                    <img src="/images/portfolio/arrow-right.svg" alt="" className="size-6"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
       
        </div>
      </div>
    </div>
  )
}
