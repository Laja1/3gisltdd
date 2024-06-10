const ContentSectionTwo = () => {
  return (
    <div className="section text-white zubuz-section-padding2 dark-bg">
      <div className="container flex flex-col lg:flex-row-reverse gap-10 items-center justify-center">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/images/v1/business_reegineering.jpg"
            className="rounded-xl max-w-full h-auto"
            alt="Business Process Re-Engineering"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-left px-5">
          <div className="max-w-lg">
            <h2 className="text-white text-4xl lg:text-6xl font-bold">Business Process Re-Engineering</h2>
            <p className="text-sm lg:text-base mt-4 lg:mt-6">
              For efficient running of any business, it is not enough to define the processes and procedures. Businesses must cultivate the habit of documenting these processes as well. Challenges however creep in when these processes stop yielding results due to lack of review and upgrade of the processes to solve new business challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTwo;
