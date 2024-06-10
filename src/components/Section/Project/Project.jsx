import Link from "next/link"
export default function Projects() {
  return (
     <div className="section zubuz-section-padding3   overflow-hidden">
      <div className="container ">
       
       
        <div
          className="zubuz-portfolio-column lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center justify-center  grid   "
          id="zubuz-threee-column"
        >
            <div className=" ui branding">
            <div className="collection-grid-item zubuz-portfolio-wrap branding ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/project/atarapay.png" alt="" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/atarapay">
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
                <img src="/images/project/mtn.png" alt="" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/mtn">
                    <p>MTN BizApp</p>
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
                <img src="/images/project/stanbic.png" alt="" />
                <div className="zubuz-portfolio-data">
                 <div className="flex-row flex items-center justify-between">  <Link href="/leadway">
                    <p>Cloud Hotspot Service at National Youth Service Corp (NYSC) Camps</p>
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
                <img src="/images/project/sailbond.png" alt="" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/sailbond">
                    <p>Sailbond Shipping Ltd  </p>
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
                <img src="/images/project/masque.jpg" alt="" className=""/>
                <div className="zubuz-portfolio-data">
                  <div className="flex-row flex items-center justify-between">
                    <Link href="/service/1">
                    <p>Masque Technologies</p>
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
                <img src="/images/project/inverter.png" alt="" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/1">
                    <p>Online Inverter Monitoring Solution</p>
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
