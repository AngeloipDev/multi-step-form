import check from "../../img/checksymbol.svg";

export const Complete = () => {
  return (
    <div className="container md:mt-10 step_box">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <img src={check} alt="check" className="h-20" />
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-green-500 text-center">
          Congratulations!
        </div>
        <div className="text-lg font-semibold text-gray-500 text-center">
          Your Account has been created.
        </div>
        <a className="mt-10" href="/">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            Close
          </button>
        </a>
      </div>
    </div>
  );
};
