import React from "react";
import servicecData from "../../data/service.json";
import ServicesCard from "@/Components/Card/ServicesCard";
const Services = () => {
  console.log(servicecData);
  return (
    <div className="p-4 md:p-0">
      <h1 className="text-2xl font-bold text-primary my-6 md:my-15 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicecData.map((service) => (
          <ServicesCard
            service={service}
            key={service.description}
          ></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
