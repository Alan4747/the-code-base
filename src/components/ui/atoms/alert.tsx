import React from "react";

interface AlertProps {
  message?: string;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ message, className }) => {
  return (
    <div
      className={`w-full h-full text-[0.75rem] font-semibold flex items-center justify-center  rounded-[12px] ${className}`}
    >
      {message}
    </div>
  );
};

export default React.memo(Alert);
