import React from "react";
import { useStepper } from "../../context/StepperContext";

export const Account = () => {
  const { userData, setUserData } = useStepper();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return <div className="flex flex-col">Account</div>;
};
