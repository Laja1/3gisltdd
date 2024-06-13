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
                <img src="/images/service/project_mg.png" alt="" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/1">
                    <p>Project Management Consulting</p>
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
                <img src="/images/service/web_des.jpg" alt="" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/2">
                    <p>Web Page Design</p>
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
                <img src="/images/service/app_dev.jpg" alt="" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/3">
                    <p>E-Commerce & Network Security</p>
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
                <img src="/images/service/software.jpg" alt="" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/4">
                    <p>Custom Software Design</p>
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
                <img src="/images/service/networking.jpg" alt="" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/5">
                    <p>Network Design & Installations</p>
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
                <img src="/images/service/data_warehousing.jpg" alt="" />
                <div className="zubuz-portfolio-data">
                <div className="flex-row flex items-center justify-between">  <Link href="/service/6">
                    <p>Data Warehousing and Content-based Networking</p>
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
