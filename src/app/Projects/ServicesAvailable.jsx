import Link from "next/link"
export default function ServiceData() {
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
                <img src="/images/project/Marketplace.jpeg" alt="MarketPlace by AtaraPay" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/1">
                    <p>The MarketPlace by AtaraPay</p>
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
                <img src="/images/project/MobileAppForBusiness.jpeg" alt="Mobile App for Business" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/2">
                    <p>Mobile App for Business</p>
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
                <img src="/images/project/OnlineInterterMonitoring.jpeg" alt="Online Interter Monitoring" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/3">
                    <p>Online Inverter Monitoring Solution</p>
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
                <img src="/images/project/CloudHotspot.jpeg" alt="Cloud Hotspot Service" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/4">
                    <p>Cloud Hotspot Service</p>
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
                <img src="/images/project/ShipmentTracking.jpeg" alt="Shipment & Warehouse Management Solution" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/5">
                    <p>Shipment & Warehouse Management Solution</p>
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
