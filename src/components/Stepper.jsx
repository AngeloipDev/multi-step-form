const DisplaySteps = ({ steps, currentStep }) => {
  return (
    <>
      {steps.map((step, index) => (
        <div
          key={index}
          className={
            index !== steps.length - 1
              ? "w-full flex items-center"
              : "flex items-center"
          }
        >
          <div className="relative flex flex-col items-center text-teal-600">
            <div
              className={`rounded-full transition duration-300 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
                currentStep > index + 1 &&
                "bg-green-600 text-white font-bold border border-green-600"
              }`}
            >
              {currentStep > index + 1 ? (
                <span className="text-white font-bold text-xl">&#10003;</span>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div
              className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase transition duration-300 ease-in-out ${
                currentStep === index + 1 ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {step}
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-300 ease-in-out ${
              currentStep > index + 1 ? "border-green-600" : "border-gray-300"
            }`}
          ></div>
        </div>
      ))}
    </>
  );
};

export const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      <DisplaySteps steps={steps} currentStep={currentStep} />
    </div>
  );
};
