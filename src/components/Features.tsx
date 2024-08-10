import React, { ReactNode } from "react";
import { FaCar } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { MdAssignmentReturned } from "react-icons/md";
const FeatureItem = ({ icon, label }: { icon: ReactNode; label: string }) => {
  return (
    <div className="bg-black flex items-center py-10 px-8 rounded-xl w-1/5">
      {icon}
      <h4 className="text-xl ml-5 text-white">{label}</h4>
    </div>
  );
};
function Features() {
  return (
    <div className="py-20 bg-opacity-20 bg-black ">
      <div className="container mx-auto px-6">
        <div className="flex justify-between">
          <FeatureItem
            icon={<FaCar size={48} color="white" />}
            label="Fast Delivery"
          />
          <FeatureItem
            icon={<MdVerified size={48} color="white" />}
            label="Verified Products"
          />
          <FeatureItem
            icon={<MdAssignmentReturned size={48} color="white" />}
            label="Easy Return"
          />
          <FeatureItem
            icon={<MdOutlineSupportAgent size={48} color="white" />}
            label="Customer Support"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
