import Link from "next/link";

const IntegrationCard = ({ icon, name, category, description,  }) => {
  return (
    <div className="">
      <div className="zubuz-iconbox-wrap-left d-block iconbox-left-border">
        <div className="zubuz-iconbox-header">
          <div className="zubuz-iconbox-icon">
            <img src={icon} alt="" />
          </div>
          <div className="zubuz-iconbox-header-data">
            <h4>{name}</h4>
            <p>{category}</p>
          </div>
        </div>
        <div className="">
          <p className="text-sm leading-loose">{description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;
