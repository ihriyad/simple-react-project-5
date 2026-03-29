import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div className="max-w-9/12 mx-auto space-y-8">
      <h3 className="text-center text-cyan-300   text-3xl md:text-5xl font-bold">
        Get Membership
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {pricingData.map((pricing) => (
          <PricingCard pricing={pricing} key={pricing.id}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
