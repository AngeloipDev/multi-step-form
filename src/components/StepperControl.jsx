export const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8 ">
      <button
        onClick={() => handleClick()}
        className={`bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer transition duration-200 ease-in-out ${
          currentStep === 1
            ? "opacity-50 cursor-not-allowed bg-gray-500 hover:bg-gray-600"
            : "hover:bg-green-600"
        }`}
        disabled={currentStep === 1}
      >
        Back
      </button>

      <button
        onClick={() => handleClick("next")}
        className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-green-600 transition duration-200 ease-in-out"
      >
        {currentStep === steps.length ? "Confirm" : "Next"}
      </button>
    </div>
  );
};
