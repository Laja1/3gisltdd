const FAQSection = () => {
  return (
    <div className="zubuz-cta-section2  py-5">
      <div className="container">
        <div
          className="zubuz-cta-wrap"
          style={{ backgroundImage: "url(/images/v2/cta-bg.png)" }}
        >
          <div className="zubuz-cta-content">
            <h2>Start managing your money now!</h2>
             <div className="items-center flex justify-center">
            <div className="w-[200px] rounded-xl items-center flex justify-center text-white  h-[60px] p-3 bg-black">
            <button
                  className=""
                  
                  type="submit"
                >
                  <span>Get started</span>
                </button>
            </div>
           
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
