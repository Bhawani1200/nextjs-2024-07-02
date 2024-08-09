import React, { ReactNode } from "react";
import { FaCar } from "react-icons/fa";
const FeatureTtem = ({ icon, label }: { icon: ReactNode; label: string }) => {
  return (
    <div className="bg-gray-500 flex items-center py-8 px-6 rounded-xl w-1/5">
      {icon}
      <h4 className="text-xl ml-5 text-white">{label}</h4>
    </div>
  );
};
function Features() {
  return (
    <div className="container mx-auto py-20 bg-black ">
      <div className="flex justify-between">
        <FeatureTtem
          icon={<FaCar size={48} color="white" />}
          label="Fast Delivery"
        />
      </div>
    </div>
  );
}

export default Features;
