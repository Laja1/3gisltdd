/* eslint-disable react/no-unescaped-entities */

const HeroSection = () => {
  return (
    <div className="zubuz-hero-section">
      <div className="container">
        <div className="zubuz-hero-content center">
          <h1>
           Welcome to 3GIS.
            <span className="zubuz-title-shape">
              <img src="/images/v3/shape-v3-01.png" alt="" />
            </span>
          </h1>
          <p className="text-sm md:text-base lg:text-xl">
            With years of experience in business and Finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with Technology that enable growth and development for the organization.
                </p>
          <div className="items-center flex justify-center">
            <div className="w-[200px] rounded-lg items-center flex justify-center text-white  h-[60px] p-3 bg-blue-600">
            <button
                  className=""
                  
                  type="submit"
                >
                  <span>Get started</span>
                </button>
            </div>
           
          </div>
        </div>
          <div className="zubuz-hero-thumb3">
          <div className="relative lg:h-full md:h-[85vh] h-[75vh] w-full">
            <img src="/images/v1/team.png" className="w-full h-full object-cover" alt="Home" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <p className="playfair-display text-3xl md:text-4xl lg:text-5xl font-bold">3GIS Edge</p>
              <div className="w-14 h-1 rounded-full bg-[#BCDBFF]" />
              <p className="open-sans text-center text-sm md:text-base lg:text-lg leading-loose text-gray-400 py-3 w-80 md:w-[550px] lg:w-[650px]">
                3GIS adopts a systematic project management approach to ensure the delivery of project benefits and objectives. This strategy involves aligning with established project management principles to guarantee success.
              </p>
              </div></div>
          
        
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
