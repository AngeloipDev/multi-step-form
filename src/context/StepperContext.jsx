import { createContext, useContext, useState } from "react";

export const StepperContext = createContext();

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) throw new Error("There is not stepper provider");
  return context;
};

export const StepperProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const value = {
    userData,
    setUserData,
    finalData,
    setFinalData
  };

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
};
