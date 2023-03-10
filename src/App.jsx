import "./App.css";
import { Stepper } from "./components/Stepper";
import { StepperControl } from "./components/StepperControl";
import { Account } from "./components/steps/Account";
import { Details } from "./components/steps/Details";
import { Complete } from "./components/steps/Complete";
import { useState } from "react";
import { Payment } from "./components/steps/Payment";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Account information", "Personal Details", "Payment"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Complete />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length + 1 && setCurrentStep(newStep);
  };

  return (
    <div className="md:w-1/2 max-[768px]:mx-2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className=" horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>

      <div className="my-10 p-10">{displayStep(currentStep)}</div>

      {currentStep !== steps.length + 1 && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
