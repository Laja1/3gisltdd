"use client";
import { useEffect, useState } from "react";
import IntegrationCard from "~/components/Ui/Cards/Integration";

const IntegrationSection = () => {
  const [platformDatas, setPlatformDatas] = useState([]);
  const platformData = async () => {
    const res = await fetch("./db/platformData.json");
    const platformData = await res.json();
    setPlatformDatas(platformData);
  };
  useEffect(() => {
    platformData();
  }, []);

  return (
    <div className="section zubuz-section-padding3">
      <div className="container">
        <div className="row">
          {platformDatas?.map((platform, index) => (
            <IntegrationCard
              key={index}
              icon={platform?.icon}
              name={platform?.name}
    
              description={platform?.description}
              link={platform?.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
