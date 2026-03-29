import { Check } from "lucide-react";
import React from "react";

const PricingFeatures = ({ feature, isPremium }) => {
  return (
    <div>
      <p className={`flex italic ${isPremium?
        'text-cyan-300':'text-white'
      }`}>
        <Check></Check>
        {feature}
      </p>
    </div>
  );
};

export default PricingFeatures;
