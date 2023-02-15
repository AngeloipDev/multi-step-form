import React from "react";
import { useStepper } from "../../context/StepperContext";
import { Input } from "../Input";

export const Details = () => {
  const { userData, setUserData } = useStepper();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <div className="mb-5">
        <Input
          type="text"
          text="Address"
          name="address"
          value={userData["address"] || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <Input
          type="text"
          text="City"
          name="city"
          value={userData["city"] || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
