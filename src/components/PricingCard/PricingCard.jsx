import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className="border-2 border-cyan-400 rounded-md p-6">
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
