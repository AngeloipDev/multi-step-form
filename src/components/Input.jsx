import React from "react";

export const Input = ({ type, name, text, onChange, value }) => {
  return (
    <div className="relative h-11">
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className="h-full w-full text-lg border-2 rounded-lg border-gray-300 outline-none focus:border-blue-500 focus:text-gray-400 transition duration-200
       px-3.5 py-3 input-text"
        placeholder=" "
      />
      <span className="text-lg text-gray-900 text-opacity-80 absolute  top-1/2 left-0 transform -translate-x-0 -translate-y-1/2 mx-2 px-2 transition duration-200 select-none pointer-events-none span-text">
        {text}
      </span>
    </div>
  );
};
