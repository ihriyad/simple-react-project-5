import { Check } from "lucide-react";
import React from "react";

const PricingFeatures = ({ feature }) => {
  return (
    <div>
      <p className="flex italic">
        <Check></Check>
        {feature}
      </p>
    </div>
  );
};

export default PricingFeatures;
