import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;

  return (
    <div
      className={`border-2 border-cyan-500 
     ${name == "Premium" ?
         "hover:bg-amber-400 card-hover" : 
         name == "Standard" ? 
         "hover:bg-cyan-400 card-hover" : 
         "hover:bg-white card-hover"}     
    rounded-md p-6 
    `}
    >
      <div className="card-header">
        <h2 className="text-3xl">{name}</h2>
        <h3 className="text-xl">{price}</h3>
        <h4>{description}</h4>
      </div>
      <div className="card-features">
        {features.map((feature, index) => (
          <PricingFeatures feature={feature} key={index}></PricingFeatures>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
