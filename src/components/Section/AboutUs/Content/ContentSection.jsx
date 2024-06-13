const ContentSection = () => {
  return (
    <div className="section zubuz-section-padding2">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="zubuz-v3-thumb max-w-xs lg:max-w-full">
              <img src="/images/v3/home.png" alt="Thumb Image" className="rounded-xl max-w-full h-auto" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-5">
            <div className="zubuz-default-content text-center lg:text-left max-w-lg">
              <h2 className="text-5xl md:text-4xl text-3xl font-bold">Our Core</h2>
              <div className="zubuz-extara-mt mt-6 lg:mt-8">
                <div className="zubuz-iconbox-wrap-left mw-100 flex flex-col items-center lg:items-center mb-6 lg:mb-8">
                  <div className="zubuz-iconbox-icon none-bg mb-4 lg:mb-0">
                    <img src="/images/about/icon1.png" alt="Icon 1" className="max-w-full h-auto" />
                  </div>
                  <div className="zubuz-iconbox-data  text-center lg:text-left">
                    <span className="font-bold">Who Are We?</span>
                  <p className="text-sm leading-loose  open-sans">
                      3G Integrated Systems is an information technology firm dedicated exclusively to delivering end-to-end computing, telecommunication and project management solutions.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left mw-100 flex flex-col items-center lg:items-center">
                  <div className="zubuz-iconbox-icon none-bg items-center justify-center flex">
                    <img src="images/about/icon2.png" alt="Icon 2" className="max-w-full h-auto" />
                  </div>
                  <div className="zubuz-iconbox-data  text-center lg:text-left">
                    <span className="font-bold">What Do We Do?</span>
                  <p className="text-sm leading-loose  open-sans">
                      We at 3G Integrated Systems strive to understand the needs of the consumers, and provide the most effective computing solutions to meet those needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
