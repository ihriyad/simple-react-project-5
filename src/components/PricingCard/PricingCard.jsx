import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;

  return (
    <div
      className={`
        border-2
        flex 
        flex-col
     ${
       name == "Premium"
         ? "border-cyan-500"
         : name == "Standard"
           ? "border-gray-700 "
           : "border-gray-700 "
     }    
        rounded-md
        p-6 
    `}
    >
      <div className="card-header">
        <h2 className="text-3xl">{name}</h2>
        <h3 className="text-xl">{price}</h3>
        <h4>{description}</h4>
      </div>
      <div className="card-features flex-1">
        {features.map((feature, index) => (
          <PricingFeatures
            feature={feature}
            key={index}
            isPremium={pricing.name == "Premium"}
          ></PricingFeatures>
        ))}
      </div>
      <button className="btn btn-primary mt-2">Subscribe</button>
    </div>
  );
};

export default PricingCard;
