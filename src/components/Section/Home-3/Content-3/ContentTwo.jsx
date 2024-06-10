const ContentSectionThree = () => {
  return (
    <div className="section zubuz-section-padding5">
      <div className="container py-10 flex flex-col lg:flex-row gap-10 items-center justify-center">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/images/v1/app_dev.jpg"
            className="rounded-xl max-w-full h-auto"
            alt="Application Development Thumbnail"
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center text-center justify-center px-5">
          <div className="max-w-lg">
            <h2 className="text-3xl lg:text-6xl font-bold">Application Development</h2>
            <p className="text-sm text-center lg:text-base mt-4 lg:mt-6">
              Once processes are working effectively for the organization, the frequency at which transactions occur would reach a level whereby businesses need automation to improve efficiencies of existing manual processes. Combining business process re-engineering and bespoke software development, 3GIS can help to improve workforce efficiency and throughput.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionThree;
