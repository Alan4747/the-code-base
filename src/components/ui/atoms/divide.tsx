import React from "react";

export const Divide = () => {
  return (
    <div className="relative py-2">
      <div className="h-0.5 bg-[#2C2D30]"></div>
      <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 bg-[#1E1E1E] px-4 text-white">
        veya
      </span>
    </div>
  );
};

export default React.memo(Divide);
