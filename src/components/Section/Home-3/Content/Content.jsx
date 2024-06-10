const ContentSection = () => {
  return (
<div className="section   text-black pb-10 mx-auto  white-bg">
  <div className="pb-10 items-center justify-center flex flex-col"> 
       <h1 className="playfair-display py-2 text-xl text-black md:text-2xl lg:text-3xl font-bold">Our Services</h1> 
          <div className="w-14  h-1  rounded-full bg-[#BCDBFF]"/> 
          </div> 
      <div className="container flex flex-col lg:flex-row gap-10 items-center justify-center">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/images/v1/project_mg.jpg"
            className="rounded-xl max-w-full h-auto"
            alt="Project Management Thumbnail"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center  text-center px-5">
          <div className="max-w-lg">
            <h2 className="text-3xl lg:text-6xl font-bold">Project Management</h2>
            <p className="text-sm text-center lg:text-base pt-2">
              Ensuring that projects deliver on their benefits and objectives is the reason for the systematic project management approach adopted by 3GIS to project delivery. In achieving this, we align ourselves as a company to applying proven project management tenets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
