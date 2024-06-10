import Link from "next/link"
export default function ServiceData() {
  return (
     <div className="section zubuz-section-padding3   overflow-hidden">
      <div className="container ">
        <div className="zubuz-section-title center">
          <h2>Some of our Services</h2>
        </div>
       
        <div
          className="zubuz-portfolio-column lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center justify-center  grid   "
          id="zubuz-threee-column"
        >
            <div className=" ui branding">
            <div className="collection-grid-item zubuz-portfolio-wrap branding ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/service/project_mg.jpg" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="/service/1">
                    <h3>Project Management Consulting</h3>
                  </Link>
               
                  <Link
                    className="zubuz-portfolio-icon"
                    href="/service/1"
                  >
                    <img src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="ui website">
            <div className="collection-grid-item zubuz-portfolio-wrap ui Website">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/service/web_des.jpg" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="/service/2">
                    <h3>Web page Design</h3>
                  </Link>
               
                  <Link
                    className="zubuz-portfolio-icon"
                    href="/service/2"
                  >
                    <img src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" ui">
            <div className="collection-grid-item zubuz-portfolio-wrap ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/service/app_dev.jpg" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="/service/3">
                    <h3>E-Commerce & Network Security</h3>
                  </Link>
                
                  <Link
                    className="zubuz-portfolio-icon"
                    href="/service/3"
                  >
                    <img src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" ui branding website">
            <div className="collection-grid-item zubuz-portfolio-wrap branding ui Website">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/service/software.jpg" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="/service/4">
                    <h3>Custom Software Design</h3>
                  </Link>
                 
                  <Link
                    className="zubuz-portfolio-icon"
                    href="/service/4"
                  >
                    <img src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
           <div className=" ui">
            <div className="collection-grid-item zubuz-portfolio-wrap ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/service/networking.jpg" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="/service/5">
                    <h3>Network Design & Installations</h3>
                  </Link>
                
                  <Link
                    className="zubuz-portfolio-icon"
                    href="/service/5"
                  >
                    <img src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
           <div className=" ui">
            <div className="collection-grid-item zubuz-portfolio-wrap ui">
              <div className="zubuz-portfolio-thumb">
                <img src="/images/service/data_warehousing.jpg" alt="" />
                <div className="zubuz-portfolio-data">
                  <Link href="/service/6">
                    <h3>Data Warehousing and Content-based Networking</h3>
                  </Link>
                  
                  <Link
                    className="zubuz-portfolio-icon"
                    href="/service/6"
                  >
                    <img src="/images/portfolio/arrow-right.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
