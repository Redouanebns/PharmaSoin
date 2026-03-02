import axios from "axios";
import { useState, useEffect } from "react";
import ServicesCard from "./ServicesCard";

export default function Services() {
  const [services, setServices] = useState();
  useEffect(() => {
    const ft = async () => {
      const req = await axios.get("http://localhost:8000/api/services");
      setServices(req.data);
    };
    ft();
  }, []);
  return (
    <>
      <h1 className="text-center m-5">Notre Services</h1>
      {!services ? (
        ""
      ) : (
        <div className="row justify-content-center m-4">
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>
      )}
    </>
  );
}

// 
