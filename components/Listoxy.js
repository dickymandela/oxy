import React from "react";

function Listoxy(props) {
  return (
    <div>
      <div className="flex">
        <div className="mr-4">
          <div className="flex items-center justify-center w-8 h-8 mb-3 rounded-full bg-purple-500 text-white">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </div>
        <div>
          <p className=" text-base text-gray-700 md:text-lg antialiased mt-1">
            {props.list}
          </p>
          <hr className="w-full tracking-wide border-gray-300" />
        </div>
      </div>
    </div>
  );
}

export default Listoxy;
